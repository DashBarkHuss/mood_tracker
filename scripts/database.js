const mysql = require('mysql');
require('dotenv/config');


console.log({host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.DBPW,
    database: process.env.DB})
class database {
    static create(){
        this.connection = mysql.createConnection({
            host: process.env.HOST,
            user: process.env.DBUSER,
            password: process.env.DBPW,
            database: process.env.DB
        })
        this.connection.connect();
        console.log("connected to database");
    }

}



module.exports = database;
