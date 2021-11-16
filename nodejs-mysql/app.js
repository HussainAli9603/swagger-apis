const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require('mysql');
const { route } = require("./server/routes/user");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());

app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set("view engine", 'hbs');

const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});
pool.getConnection((err, connection) => {
    if (err) throw err; //not connected!
    console.log("Database Connected")
})

const routes = require('./server/routes/user');
app.use('/', routes)

app.listen(port, function () {
    console.log("Server is running on port " + 9000);
})