const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Utilizado quando precisamos reutilizar variaveis imutaveis por toda nossa aplicação
// caso uma rota faça alteração de seu valor, todo a aplicação será impactada
// Basta chamar a variável sem precisar enviar como middleware de rota
// ex: res.render('index.ejs', variavel) NÃO PRECISA
app.locals = {
  NOME: 'Vinicius',
};

app.get('/1', (req, res) => {
  res.render('index1');
});

app.get('/2', (req, res) => {
  res.render('index2');
});

app.listen(3000, () => {
  console.log('Servidor rodando...');
});
