require('dotenv').config();
const supertest = require('supertest');
const app = require('../src/app');
const request = supertest(app);
const port = process.env.APP_PORT;

test(`App deve responder na porta ${port}`, () => {
    return request
        .get('/')
        .then(res => {
            const status = res.statusCode;
            expect(status).toEqual(200);
        })
        .catch(err => {
            throw new Error(err);
        });
});
