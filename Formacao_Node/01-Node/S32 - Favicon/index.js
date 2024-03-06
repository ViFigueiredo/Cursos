const express = require('express');

const app = express();

app.use('/favicon.ico', express.static('images/favicon.ico'));

app.get('/', (req, res) => {
  res.send('Página Inicial');
});

app.listen(3000, () => {
  console.log('Servidor rodando...');
});
