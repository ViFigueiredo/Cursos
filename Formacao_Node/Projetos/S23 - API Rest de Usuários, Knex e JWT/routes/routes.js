/* EXPRESS */
const express = require('express');

/* EXPRESS ROUTER */
const router = express.Router();

/* CONTROLLERS */
const HomeController = require('../controllers/HomeController');
const UsersController = require('../controllers/UsersController');

/* MIDDLEWARES */
const AuthAdmin = require('../middlewares/AdminAuth');

/* ROTAS -> API INDEX */
router.get('/', HomeController.index);

/* ROTAS -> API USUÁRIOS */
router.get('/users', AuthAdmin, UsersController.indexUsers);
router.get('/users/:id', AuthAdmin, UsersController.userId);
router.post('/users', AuthAdmin, UsersController.createUser);
router.put('/users', AuthAdmin, UsersController.editUser);
router.delete('/users/:id', AuthAdmin, UsersController.removeUser);
router.post('/auth/recoverpwd', UsersController.recoverPwd);
router.post('/auth/changepwd', UsersController.changePwd);
router.post('/auth/login', UsersController.login);
router.post('/validate', AuthAdmin, UsersController.validate);

/* EXPORTA AS ROTAS DESSA INSTÂNCIA */
module.exports = router;
