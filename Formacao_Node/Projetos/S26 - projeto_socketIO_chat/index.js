const express = require('express');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http); // servidor websocket

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

// sempre que um client envia um evento
io.on('connection', (socketCliente) => {
  // evento de desconexão
  socketCliente.on('disconnect', () => {
    // console.log(`X desconectou: ${socketCliente.id}`);
  });

  socketCliente.on('msg', (data) => {
    // socketCliente.emit('showmsg', data);

    // envia para todo mundo menos quem enviou
    // socketCliente.broadcast.emit('showmsg', data);

    // envia para todo mundo conectado ao servidor io
    io.emit('showmsg', data);
    console.log(data);
  });
});

const port = 3000;
http.listen(3000, () => {
  console.log(`App rodando: http://localhost:${port}`);
});
