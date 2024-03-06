/* eslint-disable eqeqeq */
const jwt = require('jsonwebtoken');

/* JWT SECRET */
const secret = 'dç~ksaçiep0384e09qwipile-0qielx-02-=exo0ei-0ier9i=0w- xi-';

module.exports = (req, res, next) => {
  try {
    /* CAPTURA O CABEÇALHO DA REQUISIÇÃO */
    const authToken = req.headers.authorization; // "bearer jwt"
    if (authToken != undefined) {
      const bearer = authToken.split(' '); // ["bearer", "jwt"]
      const token = bearer[1]; // "jwt"

      const decoded = jwt.verify(token, secret);

      if (decoded.role == 0) return next(); // Admin?
      res.status(403);
      return res.send('Não autorizado!');
    }
    res.status(403);
    return res.send('Não autorizado!');
  } catch (err) {
    res.status(403);
    return res.send('Erro interno!');
  }
};
