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
        const message = `https://okdevtv.com/user/setup?q=${uuid}`;

        // send email
        await mail.send(email, message);

        // save sending info
        const save_result = await knex.raw(
            `insert into user_candidate 
(seq, email, uuid, created_at) values (null, ?, ?, now());`, [email, uuid]);
        return save_result;
    }
}