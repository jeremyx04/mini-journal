const Pool = require('pg').Pool;
require('dotenv').config({path:'../.env'});

const pool = new Pool({
    user: 'postgres',
    password: process.env.PW,
    host: 'localhost',
    port: 5432,
    database: 'entries'
});

module.exports = pool;