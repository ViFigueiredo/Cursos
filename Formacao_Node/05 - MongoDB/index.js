const mongoose = require('mongoose');
const articleModel = require('./article');

mongoose.connect('mongodb://admin:dev123@localhost:27017/aprendendoMongo')
  .then(() => {
    console.log('Conectado com sucesso!');
  })
  .catch((err) => console.log(err));

const Article = mongoose.model('Article', articleModel);

/* Atualizando um dado */
Article.findByIdAndUpdate('649d849e1208159955c32ede', {
  author: 'Alterado!',
})
  .then(() => {
    console.log('Atualizado!');
  })
  .catch((err) => console.log(err));

/* Deletando um dado */
// Article.findByIdAndDelete('649d84c2af6f93fd6df93874')
//   .then(() => {
//     console.log('Deletado!');
//   })
//   .catch((err) => console.log(err));

/* Buscando um dado especifico */
// Article.findOne({
//   author: 'Vinicius Figueiredo',
//   title: 'Vue é melhor que React?',
//   'resume.content': 'bla bla bla',
// })
//   .then((article) => {
//     console.log(article);
//   })
//   .catch((err) => console.log(err));

/* Buscando todos os dados */
// Article.find({})
//   .then((articles) => {
//     console.log(articles);
//   })
//   .catch((err) => console.log(err));

/* Inserindo dados na collection */
// const artigo = new Article({
//   title: 'Jr, Pl ou Sr, o que eu sou?',
//   author: 'Vinicius Figueiredo',
//   body: 'Udemy.com',
//   resume: {
//     content: 'bla bla bla',
//     author: 'teste',
//   },
// });

// artigo.save()
//   .then(() => {
//     console.log('Salvo com sucesso!');
//   })
//   .catch((err) => console.log(err));
