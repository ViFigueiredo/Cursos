/* Factory Function - recebe um valor simples e retorna algo mais complexo */

class AppointmentFactory {
  Build(simpleAppointment) {
    const day = simpleAppointment.date.getDate() + 1;
    const month = simpleAppointment.date.getMonth();
    const year = simpleAppointment.date.getFullYear();
    const hour = Number.parseInt(simpleAppointment.time.split(':')[0], 10);
    const minute = Number.parseInt(simpleAppointment.time.split(':')[1], 10);

    const startDate = new Date(year, month, day, hour, minute, 0, 0);
    // startDate.setHours(startDate.getHours() - 3);

    const appo = {
      id: simpleAppointment._id,
      title: `${simpleAppointment.name} - ${simpleAppointment.description}`,
      email: simpleAppointment.email,
      start: startDate,
      end: startDate,
      notified: simpleAppointment.notified,
    };

    return appo;
  }
}

module.exports = new AppointmentFactory();
