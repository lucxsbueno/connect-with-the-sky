const { createPool } = require('mysql');

const pool = createPool({
    connectionLimit : 10,
    host: 'localhost',
    user: 'root',
    password: 'ViaMaquinas123',
    database: 'chat_app'
});

module.exports = pool;