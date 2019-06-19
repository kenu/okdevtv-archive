const knex = require('../lib/knex');
const mail = require('../lib/mail');
const uuidv4 = require('uuid/v4');

module.exports = {
    signupByEmail: async function (email) {
        // check duplication
        const result = await knex.raw(`select email from user where email = ?`, [email.trim()]);
        if (result[0].length > 0) {
            throw { msg: 'duplicate email' };
        }

        // generate uuid
        const uuid = uuidv4();
        const message = `
        <p>안녕하세요. OKdevTV 가입 안내 메일입니다.</p>
        <p>아래 링크 페이지로 오셔서 가입을 완료하실 수 있습니다.</p>
        <p><a href="https://okdevtv.com/user/setup?q=${uuid}" target="_blank">
        https://okdevtv.com/user/setup?q=${uuid}</a></p>
        <p></p><p>- Kenu @ OKdevTV`;

        // send email
        const send_result = await mail.send(email, message);
        console.log(send_result);

        // save sending info
        const save_result = await knex.raw(
            `insert into user_candidate 
(seq, email, uuid, created_at) values (null, ?, ?, now());`, [email, uuid]);
        return save_result;
    }
}