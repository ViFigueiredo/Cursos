const app = require('../src/app');
const supertest = require('supertest');
const request = supertest(app);

// sempre que for promisse devemos retornar alguma coisa
test('A aplicação deve responder na porta 3131', () => {
    return request.get('/').then(res => expect(res.statusCode).toEqual(200));
});

// test('A aplicação deve responder na porta 3131', async () => {

//     // axios ou supertest

//     try {
//         let res = await request.get('/');
//         expect(res.statusCode).toEqual(200);    
//     } catch (error) {
//         console.log(error);
//     }
// });

test('Deve retornar vermelho como cor favorita do Victor', () => {
    return request.get('/cor/victor').then(res => {
        // assertion = conjunto de expects
        expect(res.statusCode).toEqual(200)
        expect(res.body.cor).toEqual('vermelho')
        expect(res.body.color).toEqual('red')
    });
})