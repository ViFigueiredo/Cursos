const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const storage = multer.diskStorage({
  destination: (req, res, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) =>
    cb(null, file.originalname + Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/upload', upload.array('files', 10), (req, res) => {
  res.send('Arquivo recebido...');
});

app.listen(3000, () => {
  console.log('Servidor rodando...');
});
