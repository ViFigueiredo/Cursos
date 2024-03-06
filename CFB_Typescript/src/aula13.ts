/* Funções - Parâmetros Padrões e Opcionais */

// ? - parâmetro opcinal

function novoUser(user: string, pass: string, nome?: string): void {
    // console.log('User: ' + user);
    // console.log('Pass: ' + pass);
    // console.log('Nome: ' + nome); // pode ser undefined

    let dados = { user, pass, nome }
    console.log(dados);

}

novoUser('figcode', '123');

// parâmetros padrôes
function soma(n1: number = 0, n2: number = 3) {
    return n1 + n2;
}

// console.log(soma(3, 5)); // 3 + 5
// console.log(soma(5)); // 5 + 3
// console.log(soma()); // 0 + 3
