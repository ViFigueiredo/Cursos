const express = require('express');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

// sempre que um client envia um evento
io.on('connection', (socketCliente) => {
  // evento de desconexão
  socketCliente.on('disconnect', () => {
    console.log(`X desconectou: ${socketCliente.id}`);
  });

  //   console.log(socketCliente);
  //   console.log(socketCliente.id); // único

  // evento do cliente
  //   socketCliente.on('boasvindas', (data) => {
  //     console.log('Executando evento de Boas-Vindas!');
  //     console.log(data);
  //   });

  socketCliente.on('palavra', (data) => {
    console.log(data);
    socketCliente.emit('resultado', `${data} - Programador Jr.`);
  });
});

const port = 3000;
http.listen(3000, () => {
  console.log(`App rodando: http://localhost:${port}`);
});
