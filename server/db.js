const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'abcd246',
    host: 'localhost',
    port: 5432,
    database: 'entries'
});

module.exports = pool;