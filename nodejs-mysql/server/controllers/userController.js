const mysql = require('mysql')
require('dotenv').config();

var pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

exports.view = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected!
        console.log("Database Connected");

        connection.query('SELECT * FROM users Where status = "active"', (err, rows) => {
            connection.release();
            if (!err) {
                res.render('home', { rows })
            } else {
                console.log(err)
            }
            console.log("the Data From User Table:\n", rows)
        });
    });
},

    exports.find = (req, res) => {
        pool.getConnection((err, connection) => {
            if (err) throw err; //not connected!
            console.log("Database Connected");
            let searchItem = req.body.search;
            console.log(searchItem)
            connection.query('SELECT * FROM users WHERE first_name LIKE ?', ['%' + searchItem + '%'], (err, rows) => {
                connection.release();
                if (!err) {
                    res.render('home', { rows })
                } else {
                    console.log(err)
                }
                console.log("the Data From User Table:\n", rows)
            });
        });
    }
