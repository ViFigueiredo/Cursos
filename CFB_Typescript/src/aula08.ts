/* Object */

let dados = {
    nome: 'Vinicius',
    idade: 30,
    status: 'Ativo',
    saudacao: () => {
        console.log('oi');
    },
    cargo: (p: string) => {
        console.log(p);
    }
}

console.log(typeof dados);
console.log(dados.nome);
dados.saudacao();
dados.cargo('Dev');

