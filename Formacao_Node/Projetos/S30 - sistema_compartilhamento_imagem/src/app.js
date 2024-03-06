const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = process.env.DB;
const user = process.env.DB_USER;
const pwd = process.env.DB_PWD;
const routes = require('./routes');

mongoose
    .connect(`mongodb+srv://${user}:${pwd}@cluster0.ghxmtly.mongodb.net/${db}`)
    .then(/*() => console.log('[+][DB] -> Conectado com sucesso.')*/)
    .catch(() => console.log('[-][DB] -> Falha ao conectar.'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(routes);

module.exports = app;
