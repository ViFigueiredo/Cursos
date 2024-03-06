// test('Deve fazer algo quando receber X', () => {});
// test('Deve cadastrar um usuário quando receber um email X', () => {});
// test('Deve recusar o cadastra de usuário quando receber um email já cadastrado', () => {});

// mesma coisa, porém utilizado na lingua inglesa:
// it('Should do something', () => {});

const app = require('../app');

describe('Operações básicas', () => {

    
    test('Deve retornar o valor 10 ao somar 5 + 5', () => {
        let resultado = app.soma(5,5);
        expect(resultado).toEqual(10);
    });

    test('Deve retornar o valor 10 ao multiplicar 2 * 5', () => {
        let resultado = app.multiplicacao(2,5);
        expect(resultado).toEqual(10);
    });

})

