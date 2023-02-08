const { alfabeto } = require('./base');
// console.log(alfabeto);

// obs1 -> á != a
// obs2 -> existem ranges simplificados -> \w \W

// [abc] -> conjunto
// console.log(alfabeto.match(/[abc123]/gi)); // arr do elementos abc123
// console.log(alfabeto.match(/[abc123]+/gi)); // todas ocorrencias de abc123
// console.log(alfabeto.match(/[^abc123]/gi)); // arr com tudo menos abc123
// console.log(alfabeto.match(/[^abc123]+/gi)); // todas ocorrencias que não possui abc123

// [min-max] -> ranges (sempre do menor pro maior)
// console.log(alfabeto.match(/[0-3]/gi)); // arr de cada elemento do range
// console.log(alfabeto.match(/[a-z]/gi)); // arr de cada elemento do range
// console.log(alfabeto.match(/[0-9]+/gi)); // ocorrencia do elemento do range entre espaços
// console.log(alfabeto.match(/[a-z0-9]+/gi)); // ocorrencias combinando ranges
// console.log(alfabeto.match(/[^a-z0-9]+/gi)); // ocorrencias combinando ranges menos o conjunto
// console.log(alfabeto.match(/[a-z0-9çã]+/gi)); // acentuação
// console.log(alfabeto.match(/[\u00A0-\u00BA]+/gi)); // utilizando unicode

// Ranges simplificados e suas negações
// console.log(alfabeto.match(/\w/gi)); // alfanumérico + underline
// console.log(alfabeto.match(/\W/gi)); // negação

// console.log(alfabeto.match(/\d/gi)); // números
// console.log(alfabeto.match(/\D/gi)); // negação

// console.log(alfabeto.match(/\s/gi)); // espaço em branco, espaço, tabulação, avanço de página, quebra de linha
// console.log(alfabeto.match(/\S/gi)); // negação