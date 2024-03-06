const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: '192.168.0.200',
    port: 6404,
    user: 'avanttidb',
    password: 'Db@#2023',
    database: 'api_users',
  },
});

module.exports = knex;
