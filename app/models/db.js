const mysql = require("mysql");
const dbConfig = require('../config/db_config');

const con = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    insecureAuth : true
})

con.connect(err => {
    if (err) throw err;

    console.log("Connected!");
    // const createTable = `CREATE TABLE products(
    //     p_id SERIAL PRIMARY KEY,
    //     description VARCHAR(255),
    //     categrory VARCHAR(50),
    //     created_at DATETIME DEFAULT NOW(),
    //     price DECIMAL(18,2),
    //     qty NUMERIC(50),
    //     picurl VARCHAR(100)
    // )`

    // con.query(createTable, (err,result) => {
    //     if (err) throw err;
    //     console.log("Database table created");
    // });
});

module.exports = con;

