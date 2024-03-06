/* Funções */

// void - sem retorno (não é obrigado)

function somar(n1: number, n2: number): number {
    return n1 + n2;
}

let n_res: number = somar(2, 2)
console.log(n_res);

let s_res: string = somar(2, 2).toString();
console.log(s_res);


function logar(user: string, pass: string) {
    console.log('User: ' + user);
    console.log('Senha: ' + pass);

}

// logar('figcode', '123')


function teste(): void {
    console.log('Teste');
}

// teste();
// teste();
// teste();