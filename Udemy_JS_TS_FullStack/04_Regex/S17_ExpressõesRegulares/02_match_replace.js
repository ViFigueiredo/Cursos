const { texto } = require('./base');
// console.log(texto);

const regExp1 = /João/i;
const regExp2 = /João/gi;
const regExp3 = /João|maria/gi;

// encontra na string todas as referências
// console.log(texto.match(regExp1));
// console.log(texto.match(regExp2));
// console.log(texto.match(regExp3));

// troca 'João' por 'Vinicius
// console.log(texto.replace(/João|Maria/gi, 'Vinicius'));

// funções especiais no replace
// console.log(texto.replace(/(João|Maria)()/gi, '"<b>$1</b>"')); // adiciona <> no grupo 1

console.log(texto.replace(/(João|Maria)()/gi, (input) => {
    return '############## ' + input.toUpperCase() + ' ##############';
})); // adiciona maiusculo ao grupo 1

// leitura de grupos
// (...(1))(...(2(3)))(...4) $1 $2 $3 $4... segue conforme leitura da esquerda para direita
