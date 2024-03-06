// g - global (encontra todas as ocorrências)
// i - case INsensitive
// (()()) - grupos de regex
// | - ou

const { texto } = require('./base');

// verifica (true ou false) todas as ocorrências de 'João' no texto base sem case sensitive
const regExp1 = /João/gi;
// console.log(regExp1.test(texto));

// verifica (true ou false) a primeira ocorrência de 'João' no texto base com case sensitive
const regExp2 = /João/g;
// console.log(regExp2.test(texto));

// verifica (true ou false) a primeira ocorrência de 'João' no texto base sem case sensitive
const regExp3 = /João/i;
// console.log(regExp3.test(texto));

// verifica (true ou false) todas ocorrências de 'Teve 5 filhos' no texto base sem case sensitive e todos os espaçamentos
const regExp4 = /Teve 5 filhos/gi;
// console.log(regExp4.test(texto));

// retorna um array com várias informações da busca [ retorno [0], index, input, groups ]
const regExp5 = /Teve 5 filhos/gi;
// console.log(regExp5.exec(texto)); // array inicial
// console.log(regExp5.exec(texto)[0]); // o que estamos buscando
// console.log(regExp5.exec(texto).index); // posição inicial de array que contém o retorno de nossa busca -> 136
// console.log(regExp5.exec(texto).input); // o que estamos buscando
// console.log(regExp5.exec(texto).groups);

// utilizando grupos
const regExp6 = /(maria|rebecka)(, hoje sua esposa)/gi;
const found = regExp6.exec(texto);
// condicionais com regex
if (found) {
    console.log(found[0]);
    console.log(found[1]);
    console.log(found[2]);
} else {
    console.log('Não existe no texto base.');
}

