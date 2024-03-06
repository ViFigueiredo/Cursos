/* EXPRESS */
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

/* PARSE APLICATIONS */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* ROTAS */
const router = require('./routes/routes');
app.use('/', router);

/* EXECUTANDO SERVIDOR */
const port = 3000;
app.listen(3000, () => {
  console.log(`[Exec] http://localhost:${port}`);
});
