const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const PwdToken = require('../models/PwdToken');

/* JWT SECRET */
const secret = 'dç~ksaçiep0384e09qwipile-0qielx-02-=exo0ei-0ier9i=0w- xi-';

class UsersController {
  /*  */
  async validate(req, res) {
    // next();
    res.send('ok');
  }

  /* LOGIN DE USUÁRIOS */
  async login(req, res) {
    const { email, password } = req.body;

    const user = await PwdToken.findByEmail(email);

    if (user.length > 0) {
      const result = await bcrypt.compare(password, user[0].password);
      if (result) {
        const token = jwt.sign(
          {
            email: user[0].email,
            role: user[0].role,
          },
          secret
        );

        res.status(200);
        return res.json({ token, role: user[0].role });
      }
      res.status(406);
      return res.json({ err: 'Senha incorreta!' });
    }
    res.status(406);
    return res.json({ err: 'Usuário não existe!' });
  }

  /* ALTERA A SENHA CASO O TOKEN SEJA VALIDO */
  async changePwd(req, res) {
    const { token, password } = req.body;
    const isTokenValid = await PwdToken.validate(token);

    if (isTokenValid.status) {
      await User.changePassword(
        password,
        isTokenValid.token.user_id,
        isTokenValid.token.token
      );
      res.send('Senha alterada!');
    }
    res.status(406);
    res.send(isTokenValid.err);
  }

  /* TOKEN DE RECUPERAÇÃO DE SENHA */
  async recoverPwd(req, res) {
    const { email } = req.body;

    const result = await PwdToken.create(email);
    if (result.status) {
      res.send(result.token.toString());

      /* envio de email do token */
      // NodeMailer.send();
    } else {
      res.status(406);
      res.send(result.err);
    }
  }

  /* REMOVENDO USUÁRIO */
  async removeUser(req, res) {
    const { id } = req.params;
    const result = await User.delete(id);
    if (result.status) res.send('Tudo OK!');
    res.status(406);
    res.send(result.err);
  }

  /* EDITANDO USUÁRIOS */
  async editUser(req, res) {
    const { id, email, password, name, role, status } = req.body;

    const result = await User.update(id, email, password, name, role, status);

    if (result != undefined) {
      if (result.status) {
        return res.send('Tudo OK!');
      }
      res.status(406);
      return res.send(result.err);
    }
    res.status(406);
    return res.send('Ocorreu um erro no servidor!');
  }

  /* LISTA USUÁRIOS */
  async indexUsers(req, res) {
    const users = await User.findAll();
    if (!users) {
      res.status(404);
      res.json({ err: 'Usuários não cadastrados!' });
      return;
    }
    res.json({ users });
  }

  /* LISTA USUÁRIO PELO ID */
  async userId(req, res) {
    const { id } = req.params;
    const users = await User.findById(id);
    if (!users) {
      res.status(404);
      res.json({ err: 'Usuário inexistente!' });
      return;
    }
    res.json({ users });
  }

  /* CRIANDO USUÁRIOS */
  async createUser(req, res) {
    const { name, email, password, role, status } = req.body;

    // enviou email no corpo requisição?
    if (email == undefined || email == '' || email == ' ') {
      res.status(406);
      res.json({ err: 'E-mail inválido!' });
      return;
    }

    // email ja está cadastrado?
    const emailExists = await User.findEmail(email);
    if (emailExists) {
      res.status(406);
      res.json({ err: 'E-mail existente!' });
      return;
    }

    // email valido?
    const emailValido = await User.isEmail(email);
    if (!emailValido) {
      res.status(406);
      res.json({ err: 'E-mail inválido!' });
      return;
    }

    // insere dados no banco
    await User.new(email, password, name, role, status);

    res.send('Tudo OK!');
  }
}

module.exports = new UsersController();
