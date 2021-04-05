const Appointment = require("../models/appointments");

const getDoctorAppointments = async filter => {
  const results = await Appointment.find(filter);
  return results;
};

const createAppointment = async appointment => {
  appointment._id = Date.now()
  let instance = new Appointment(appointment);
  try {
    let result = await instance.save();
    return result;
  } catch {
    return {message :"failed to create"};
  }
};

module.exports = { getDoctorAppointments, createAppointment };
