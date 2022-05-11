const express = require('express');
const fs = require('fs');
const cors = require('cors');
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
    connection.query('SELECT * FROM archive_alexandr.coins;',
        (err, data) => {
            if (err) return res.status(500);
            const result = data.filter((item)=> item.Chapter === 'Commemorative Coins')
            res.json(result);
        })
});

app.get('/investment_coins', (req, res) => {
    connection.query('SELECT * FROM archive_alexandr.coins;',
        (err, data) => {
            if (err) return res.status(500);
            const result = data.filter((item)=> item.Chapter === 'Investment Coins')
            res.json(result);
        })
});

app.get('/exclusive_coins', (req, res) => {
    connection.query('SELECT * FROM archive_alexandr.coins;',
        (err, data) => {
            if (err) return res.status(500);
            const result = data.filter((item)=> item.Chapter === 'Exclusive Coins')
            res.json(result);
        })
});

//весь список монет
app.get('/coins', (req, res) => {
    connection.query(`SELECT * FROM archive_alexandr.coins;`,
        (err, data) => {
            if (err) return res.status(500);
            res.json(data);
        })
});

//полная информация по монете
app.get('/coins/:id', (req, res) => {
    connection.query(`SELECT * FROM archive_alexandr.coins WHERE id = ${req.params.id};`,
        (err, data) => {
            if (err) return res.status(500);
            res.json(data);
        })
});

//ответ по инпуту
app.get('/coin/:id', (req, res) => {
    connection.query(`SELECT * FROM archive_alexandr.coins WHERE Title = '${req.params.id}';`,
        (err, data) => {
            if (err) return res.status(500);
            res.json(data);
        })
});

//фильтрация по стоимости
app.get('/coinsprice/:from/:to', (req, res) => {
    console.log(req.params);
    connection.query(`SELECT * FROM archive_alexandr.coins WHERE Price BETWEEN '${req.params.from}$' AND '${req.params.to}$';`,
        (err, data) => {
            if (err) return res.status(500);
            res.json(data);
        })
});

//фильтрация по году 
app.get('/coinsyear/:from/:to', (req, res) => {
    console.log(req.params);
    connection.query(`SELECT * FROM archive_alexandr.coins WHERE Year_Year BETWEEN '${req.params.from}' AND '${req.params.to}';`,
        (err, data) => {
            if (err) return res.status(500);
            res.json(data);
        })
});

//фильтрация по году и стоимости
app.get('/coinsYearAndPrice/:fromP/:toP/:fromY/:toY', (req, res) => {
    console.log(req.params);
    connection.query(`SELECT * FROM archive_alexandr.coins WHERE Year_Year BETWEEN '${req.params.fromY}' AND '${req.params.toY}'
    AND Price BETWEEN '${req.params.fromP}' AND '${req.params.toP}';`,
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
