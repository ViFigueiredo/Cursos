const {cpfs2} = require('./base');

// ^ -> Começa com
// $ -> Termina com
// [^] -> Negação
// m -> Multiline (linha por linha)

console.log(cpfs2);
console.log(cpfs2.match(/^(\d{3}\.){2}\d{3}\-\d{2}$/gm));
