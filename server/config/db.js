const mySQL = require('mysql');

const db = mySQL.createConnection({
    host: 'localhost',
    user: 'cacadinhas',
    password: 'ar4ar4',
    database: 'blog'
});

module.exports = db
