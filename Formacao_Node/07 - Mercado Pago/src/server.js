require('dotenv').config();
const express = require('express');
const app = express();
const host = process.env.APP_HOST;
const port = process.env.APP_PORT;
const MercadoPago = require('mercadopago');

MercadoPago.configure({
    sandbox: true, // teste: true || producao: false
    access_token: process.env.MP_AT,
});

app.get('/', (req, res) => {
    res.send('Página Inicial');
});

let id = String(Date.now());
let emailPagador = 'pagador@outlook.com.br';

app.get('/pagar', async (req, res) => {
    // Pagamentos
    // id // codigo // pagador // status
    // 1 // 4645646987985 // email1@teste.com.br // não foi pago
    // 2 // 3211584894651 // email2@teste.com.br // foi pago

    let dados = {
        items: [
            (item = {
                id,
                title: '2x video games; 3x camisas, 7x cuecas',
                quantity: 1,
                currency_id: 'BRL',
                unit_price: parseFloat(150),
            }),
        ],
        payer: { emailPagador },
        external_reference: id,
    };

    try {
        let pagamento = await MercadoPago.preferences.create(dados);
        // console.log(pagamento);
        // Banco.salvarPagamento({id, emailPagador})
        return res.redirect(pagamento.body.init_point);
    } catch (err) {
        return res.send(err.message);
    }
});

app.post('/not', (req, res) => {
    let id = req.query.id;

    setTimeout(() => {
        let filtro = {
            'order.id': id,
        };

        MercadoPago.payment
            .search({ qs: filtro })
            .then((data) => {
                const pgto = data.body.results[0];

                if (pgto != undefined) {
                    // console.log(pgto);
                    console.log(pgto.external_reference);
                    console.log(pgto.status);

                    // if (pgto.status === 'approved') {
                    // Banco.definirComoPago(pgto.external_reference);
                    // }
                } else {
                    console.log('Pgto inválido.');
                }
            })
            .catch((err) => console.log(err));
    }, 20000);

    res.send('OK');
});

app.listen(port, () => {
    console.log(`[+][SRV] -> ${host}:${port}`);
});
