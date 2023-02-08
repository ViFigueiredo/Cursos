const database = require('../database');

/* JOIN */

/* exemplo 1 - relacionamento de um jogo com id X */
// database.select([
//   'estudios.nome as estudio_nome',
//   'games.nome as game_nome',
//   'games.preco as game_preco',
// ]).table('games_estudios')
//   .innerJoin('games', 'games.id', 'games_estudios.game_id')
//   .innerJoin('estudios', 'estudios.id', 'games_estudios.estudio_id')
//   .where('games.id', 10)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/* exemplo 2 - todos relacionamentos */
database.select([
  'estudios.nome as estudio_nome',
  'games.nome as game_nome',
  'games.preco as game_preco',
]).table('games_estudios')
  .innerJoin('games', 'games.id', 'games_estudios.game_id')
  .innerJoin('estudios', 'estudios.id', 'games_estudios.estudio_id')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
