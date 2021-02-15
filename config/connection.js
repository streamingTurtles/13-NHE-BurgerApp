// db connection settings for localhost
const mysql = require('mysql');
const dotenv = require('dotenv').config();



const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    // password: 'xxxx',  // removed my password, its now in the .env living in gitignore
    password: process.env.PASSWORD,   
    database: 'burgers_db',    
});

// check the db connection
connection.connect((err) => {
    if (err) throw err;
    console.log('You connected to the db as id ' + connection.threadId);  // random id generated when successful connection with the db
});
