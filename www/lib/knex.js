var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: process.env.DB_USER || 'devuser',
        password: process.env.DB_PASS || 'okpassokpass',
        database: process.env.DB_NAME || 'okdevdb'
    }
});

module.exports = knex;
