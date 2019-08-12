const knex = require('../lib/knex');
const mail = require('../lib/mail');
const uuidv4 = require('uuid/v4');
const bcrypt = require('bcrypt');

async function hashPassword(password) {
    const saltRounds = 10;
    const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, function (err, hash) {
            if (err) reject(err);
            resolve(hash);
        });
    });
    return hashedPassword;
}

module.exports = {
    signupByEmail: async function (email) {
        // check duplication
        const result = await knex.raw(`select email from user where email = ?`, [email.trim()]);
        if (result[0].length > 0) {
            throw { msg: 'duplicate email' };
        }

        // check recent
        const sql_recent = `select count(*) as cnt
        from user_candidate
        where email = ? and finish = 'N'
        and timediff(now(), created_at) < '00:05:00';`;
        const result_recent = await knex.raw(sql_recent, [email.trim()]);
        if (result_recent[0][0]['cnt'] > 0) {
            throw { msg: 'email sent already' };
        }


        // generate uuid
        const uuid = uuidv4();
        const message = `
        <p>안녕하세요. OKdevTV 가입 안내 메일입니다.</p>
        <p>아래 링크 페이지로 오셔서 가입을 완료하실 수 있습니다.</p>
        <p><a href="https://okdevtv.com/user/setup?q=${uuid}" target="_blank">
        https://okdevtv.com/user/setup?q=${uuid}</a></p>
        <p></p><p>- Kenu @ OKdevTV</p>`;

        // send email
        const send_result = await mail.send(email, message);
        console.log(send_result);

        // save sending info
        const save_result = await knex.raw(
            `insert into user_candidate 
(seq, email, uuid, created_at) values (null, ?, ?, now());`, [email, uuid]);
        return save_result;
    },
    setUpAccount: async (hash) => {
        const query = `select * from user_candidate
where uuid = ? and finish != 'Y';`;
        const result = await knex.raw(query, [hash]);
        if (result[0].length == 0) {
            throw { msg: `invalid code` };
        }
        const { seq, email, reset } = result[0][0];

        if (reset === 'N') {
            const query_account = `insert into user (seq, email, created_at)
            values (null, ?, now());`;
            await knex.raw(query_account, [email]);
        }

        const query_finish_candidate =
            `update user_candidate set finish = 'P', finished_at = now() where seq = ?;`;
        const result_finish = await knex.raw(query_finish_candidate, [seq]);

        return result_finish;
    },
    setUpPassword: async ({ password, password_confirm, hash }) => {

        if (password.length < 8) {
            throw '비밀번호는 8자리 이상으로 해주세요.';
        }
        if (password !== password_confirm) {
            throw '입력하신 두 비밀번호가 다릅니다.';
        }
        const crypted_password = await hashPassword(password);
        const query_account = `select seq, email, reset from user_candidate where uuid = ?`;
        const result_account = await knex.raw(query_account, [hash]);
        if (result_account[0].length === 0) {
            throw 'email 주소를 찾을 수 없습니다.';
        }

        const { seq, email, reset } = result_account[0][0];

        const query = `update user set passwd = ?, updated_at = now()
        where email = ?`;
        const result = await knex.raw(query, [crypted_password, email]);

        const query_finish = `update user_candidate set finish='Y', finished_at = now()
        where seq = ?;`
        await knex.raw(query_finish, [seq]);

        return { result, reset };
    },
    changePassword: async ({ password, password_confirm, email }) => {
        if (password.length < 8) {
            throw '비밀번호는 8자리 이상으로 해주세요.';
        }
        if (password !== password_confirm) {
            throw '입력하신 두 비밀번호가 다릅니다.';
        }
        const crypted_password = await hashPassword(password);

        const query = `update user set passwd = ?, updated_at = now()
        where email = ?`;
        const result = await knex.raw(query, [crypted_password, email]);

        return { result };
    },

    doLogin: async ({ email, password }) => {
        const query = `select seq, passwd from user where email = ?`;
        const result = await knex.raw(query, [email]);
        if (result[0].length === 0) {
            throw '등록되지 않은 사용자입니다.';
        }
        const hashedPassword = result[0][0].passwd;
        const match = await bcrypt.compare(password, hashedPassword);
        return match;
    },
    resetPassword: async (email) => {
        // generate uuid
        const uuid = uuidv4();
        const message = `
        <p>안녕하세요. OKdevTV 비밀번호 변경 메일입니다.</p>
        <p>아래 링크 페이지로 오셔서 비밀번호를 변경하실 수 있습니다.</p>
        <p><a href="https://okdevtv.com/user/setup?q=${uuid}" target="_blank">
        https://okdevtv.com/user/setup?q=${uuid}</a></p>
        <p></p><p>- Kenu @ OKdevTV</p>`;

        // send email
        const send_result = await mail.send(email, message);
        console.log(send_result);

        // save sending info
        const save_result = await knex.raw(
            `insert into user_candidate 
(seq, email, uuid, created_at, reset) values (null, ?, ?, now(), 'Y');`, [email, uuid]);
        return save_result;
    }
}