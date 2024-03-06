/* Enum */

enum dias {
    domingo = 0,
    segunda = 1,
    terca = 2,
    quarta = 3,
    quinta = 4,
    sexta = 5,
    sabado = 6,
}

// no caso acima não é necessário especificar um valor de atribuição, somente para casos onde não começa com 0

// console.log(dias.domingo);
// console.log(dias['domingo']);
// console.log(dias[1]);

const data = new Date();
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(dias[d.getDay()]);

enum cores {
    branco = '#fff',
    preto = '#000',
    vermelho = '#f00',
    verde = '#0f0',
    azul = '#00f',
}

console.log(cores.branco);
console.log(cores['branco']);

enum tipoUsuario {
    USER = 10,
    ADMIN = 100,
    SUPER = 1000
}

console.log(tipoUsuario.USER);

const tp: tipoUsuario = tipoUsuario.ADMIN;
console.log(tp);


