/* IMPORTA AS VARIÁVEIS DE AMBIENTE */
require('dotenv').config();

/* IMPORTA TODA A APLICAÇÃO */
const app = require('./app');

/* EXECUTANDO SERVIDOR */
const port = process.env.APP_PORT;
const host = process.env.APP_HOST;
app.listen(port, () => {
    console.log(`[+][SRV] -> ${host}:${port}`);
});
