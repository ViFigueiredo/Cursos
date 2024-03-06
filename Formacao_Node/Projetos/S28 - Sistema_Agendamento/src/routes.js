const express = require('express');
const router = express.Router();
const AppointmentService = require('./services/AppointmentService');

router.get('/', (req, res) => res.render('index'));
router.get('/cadastro', (req, res) => res.render('create'));
router.get('/getcalendar', async (req, res) => res.json(await AppointmentService.GetAll(false)));
router.get('/event/:id', async (req, res) => res.render('event', await AppointmentService.GetById(req.params.id)));
router.post('/finish', async (req, res) => await AppointmentService.Finish(req.body.id) && res.redirect('/'));

router.get('/list', async (req, res) => {
  const list = await AppointmentService.GetAll(true);
  //   console.log(list);
  res.render('list', { list });
});

router.get('/search', async (req, res) => {
  const regex = /^\s*$/;
  if (req.query.search.length > 0 && !regex.test(req.query.search)) {
    const list = await AppointmentService.Search(req.query.search);
    //   console.log(list);
    return res.render('list', { list });
  }
  return res.redirect('/list');
});

router.post('/create', async (req, res) => {
  const { name, email, description, cpf, date, time } = req.body;
  await AppointmentService.Create(
    name,
    email,
    description,
    cpf,
    date,
    time,
  );
  res.redirect('/');
});

module.exports = router;
