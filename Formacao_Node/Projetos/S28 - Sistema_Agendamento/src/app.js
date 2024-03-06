/* EXPRESS */
const express = require('express');
const app = express();

/* BANCO DE DADOS */
const mongoose = require('mongoose');
const db = process.env.DB;
// const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const pwd = process.env.DB_PWD;
// const port = process.env.DB_PORT;
mongoose.connect(`mongodb+srv://${user}:${pwd}@cluster0.ghxmtly.mongodb.net/${db}`)
  .then(() => console.log('[+][DB] -> Conectado com sucesso.'));

/* VIEW ENGINE */
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* PARSE APLICATIONS */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* ROTAS */
const routes = require('./routes');
const AppointmentService = require('./services/AppointmentService');
app.use('/', routes);

/* IMG - CSS - JS */
app.use(express.static('public'));

const poolTime = 5000;
setInterval(async () => {
  await AppointmentService.sendNotification();
}, poolTime);

module.exports = app;
