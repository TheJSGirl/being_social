const mysql = require('promise-mysql');
const config = require('../config/config');
let connection = null;
 
module.exports = {
    pool : pool = mysql.createPool({
        host: config['db-details']['db-host'],
        user: config['db-details']['db-user'],
        password: config['db-details']['db-pass'],
        database: config['db-details']['db-name'],
        connectionLimit: 10
    })
}   