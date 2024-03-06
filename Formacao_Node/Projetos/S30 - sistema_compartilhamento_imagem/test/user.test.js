require('dotenv').config();
const supertest = require('supertest');
const app = require('../src/app');
const request = supertest(app);

let mainUser = {};

beforeEach(() => {
    mainUser.name = 'Main User';
    mainUser.email = 'main_user@outlook.com.br';
    mainUser.password = '123456';
});

afterAll(() => {
    return request
        .delete('/user/' + mainUser.email)
        .then(res => {})
        .catch(err => {
            throw new Error(err);
        });
});

describe('Cadastro de usuário', () => {
    test('Deve cadastrar um usuário com sucesso', () => {
        const user = {
            name: String(Date.now()),
            email: Date.now() + '@email.com',
            password: String(Date.now()),
        };
        return request
            .post('/user')
            .send({ name: user.name, email: user.email, password: user.password })
            .then(res => {
                expect(res.statusCode).toEqual(200);
                expect(res.body.email).toEqual(user.email);
            })
            .catch(err => {
                throw new Error(err);
            });
    });

    test('Deve impedir que um usuário se cadastre com email repetido', () => {
        return request
            .post('/user')
            .send(mainUser)
            .then(res => {
                expect(res.statusCode).toEqual(200);
                expect(res.body.email).toEqual(mainUser.email);
                return request
                    .post('/user')
                    .send(mainUser)
                    .then(res => {
                        expect(res.statusCode).toEqual(400);
                        expect(res.body.error).toEqual('E-mail já cadastrado.');
                    })
                    .catch(err => {
                        throw new Error(err);
                    });
            })
            .catch(err => {
                throw new Error(err);
            });
    });

    test('Deve impedir que um usuário se cadastre com dados vazios', () => {
        mainUser.name = mainUser.email = mainUser.password = '';
        return request
            .post('/user')
            .send(mainUser)
            .then(res => {
                expect(res.statusCode).toEqual(400);
            })
            .catch(err => {
                throw new Error(err);
            });
    });
});

describe('Autenticação', () => {
    test('Deve me retornar um token quando logar', () => {
        return request
            .post('/auth')
            .send({ email: mainUser.email, password: mainUser.password })
            .then(res => {
                console.log(res.body.token);
                expect(res.statusCode).toEqual(200);
                expect(res.body.token).toBeDefined(); // garante que não é undefined
            })
            .catch(err => {
                throw new Error(err);
            });
    });

    test('Deve impedir usuários não cadastrados', () => {
        mainUser.email = 'teste@teste.com.br';
        return request
            .post('/auth')
            .send({ email: mainUser.email, password: mainUser.password })
            .then(res => {
                expect(res.statusCode).toEqual(403);
                expect(res.body.errors.email).toEqual('E-mail não cadastrado.');
            })
            .catch(err => {
                throw new Error(err);
            });
    });

    test('Deve impedir usuários com senhas inválidas', () => {
        return request
            .post('/auth')
            .send({ email: mainUser.email, password: 'vscode' })
            .then(res => {
                expect(res.statusCode).toEqual(403);
                expect(res.body.errors.password).toEqual('Senha inválida.');
            })
            .catch(err => {
                throw new Error(err);
            });
    });
});
