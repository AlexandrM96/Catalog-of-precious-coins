const express = require('express');
const fs = require('fs');
const cors = require('cors');
// const e = require('express');
const app = express();

app.use(cors());

const mysql = require('mysql2');
const { DB_CONNECTION } = require('./const');

const connection = mysql.createConnection({
    host: DB_CONNECTION.host,
    port: DB_CONNECTION.port,
    user: DB_CONNECTION.username,
    password: DB_CONNECTION.password,
    database: DB_CONNECTION.database
})

connection.connect((err) => {
    if (!err) {
        console.log('success');
    } else {
        console.log('err:', err);
    }
});

app.get('/commemorative_coins', (req, res) => {
    connection.query('SELECT * FROM archive_alexandr.commemorative_coins;',
        (err, data) => {
            if (err) return res.status(500);
            res.json(data);
        })
});

app.get('/investment_coins', (req, res) => {
    connection.query('SELECT * FROM archive_alexandr.investment_coins;',
        (err, data) => {
            if (err) return res.status(500);
            res.json(data);
        })
});

app.get('/exclusive_coins', (req, res) => {
    connection.query('SELECT * FROM archive_alexandr.exclusive_coins;',
        (err, data) => {
            if (err) return res.status(500);
            res.json(data);
        })
});



app.listen(5000, function () {
    console.log('Example app listening on port 5000!!!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
