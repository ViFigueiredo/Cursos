/* Muito utilizado quando temos que fazer várias requisições dependentes ao banco de dados, onde não pode haver falhas, caso contrário, toda as demais requisições são prejudicadas - exemplo: métodos de pagamentos */

const database = require('../database');

async function testeTransacao() {
  try {
    await database.transaction(async (trans) => {
      await database.insert({ nome: 'GoG' }).table('estudios');
      await database.insert({ nome: 'Square Enix' }).table('estudios');
      await database.insert({ nome: 'Nintendo' }).table('estudios');
      await database.insert({ nome: 'Tencent' }).table('estudios');
      return console.log('Finalizado');
    });
  } catch (error) {
    console.log(error);
  }
}

testeTransacao();
