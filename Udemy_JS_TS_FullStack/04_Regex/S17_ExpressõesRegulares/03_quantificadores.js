/* 

* (opcionais) 0 ou n -> {0,}
+ (obrigatório) 1 ou n -> {1,}
? (opcionais) 0 ou 1 -> {0,1}

\ caracteres de escape para meta caracter

{n, m} numero de vezes, máximo de vezes
{10,} no mínimo 10
{,10} no máximo 10
{0,10} de 0 a 10
{5,10} de 5 a 10
{10} específico 10x

*/

const { texto, arquivos } = require('./base');
// console.log(texto);

const regExp1 = /Jo+ão+/gi; // 1 ou mais "o"
// console.log(texto.match(regExp1));

// somente arquivos .jpg
// e jpeg?
// const regExp2 = /\.(jpg|jpeg)/gi; // sem quantificador
const regExp2 = /\.jpe?g/gi; // com quantificador ?
for (const arquivo of arquivos) {
    const valido = arquivo.match(regExp2);
    if (!valido) continue;
    // console.log(arquivo, valido);
}

const regExp3 = /\.jpe{1,}g/gi; // com quantificador {}
for (const arquivo2 of arquivos) {
    const valido2 = arquivo2.match(regExp3);
    // console.log(arquivo2, valido2);
}

const regExp4 = /\.((jp|JP)(e|E)?(g|G))/g; // com quantificador e grupos
for (const arquivo3 of arquivos) {
    const valido3 = arquivo3.match(regExp4);
    console.log(arquivo3, valido3);
}