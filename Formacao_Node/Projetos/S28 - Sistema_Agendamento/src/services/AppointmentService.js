/* eslint-disable no-return-await */

const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const appointment = require('../models/Appointment');
const AppointmentFactory = require('../factories/AppointmentFactory');

const Appo = mongoose.model('Appointment', appointment);

class AppointmentService {
  async Create(name, email, description, cpf, date, time) {
    const newAppo = new Appo({
      name,
      email,
      description,
      cpf,
      date,
      time,
      finished: false,
      notified: false,
    });

    try {
      await newAppo.save();
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async GetAll(showFinished) {
    if (showFinished) {
      return await Appo.find();
    }
    const appos = await Appo.find({ finished: false });
    const appointments = [];

    appos.forEach((appo) => {
      if (appo.date !== undefined) {
        appointments.push(AppointmentFactory.Build(appo));
      }
    });

    return appointments;
  }

  async GetById(id) {
    if (id !== undefined) {
      try {
        return await Appo.findOne({ _id: id });
      } catch (error) {
        console.log(error);
      }
    }

    return { msg: 'Consulta inválida!' };
  }

  async Finish(id) {
    if (id !== undefined) {
      try {
        await Appo.findByIdAndUpdate(id, { finished: true });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }

    return { msg: 'Falha ao finalizar consulta!' };
  }

  async Search(query) {
    if (query !== undefined) {
      try {
        return await Appo.find().or([{ email: query }, { cpf: query }]);
      } catch (error) {
        console.log(error);
      }
    }

    return { msg: 'Pesquisa inválida!' };
  }

  async sendNotification() {
    const appos = await this.GetAll(false);
    const transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PWD,
      },
    });

    appos.forEach(async (appo) => {
      const date = appo.start.getTime();
      const hour = 1000 * 60 * 60;
      const gap = date - Date.now();

      if (gap <= hour) {
        if (!appo.notified) {
          await Appo.findByIdAndUpdate(appo.id, { notified: true });

          transport.sendMail({
            from: 'Vinicius Figueiredo <vifigueiredo@outlook.com.br>',
            to: appo.email,
            subject: 'Oi! Esse é um email de teste utilizando NodeJs',
            text: 'Se você recebeu esse e-mail de teste, significa que estou aprendendo a utilizar uma biblioteca de envio de e-mail, chamada Nodemailer :)',
            html: 'Me chamo Vinicius e estou curtindo muito aprendendo <a href="https://nodemailer.com/about/">Nodemailer.</a>',
          }).then((message) => {
            console.log(message);
            console.log('E-mail enviado com sucesso!');
          }).catch((err) => {
            console.log(err);
          });
        }
      }
    });
  }
}

module.exports = new AppointmentService();
