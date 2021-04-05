const Doctor = require("../models/doctor");
const appointmentService = require("./appointments.service");
const { SLOTS } = require("../utils");

const getDoctorSlots = async filter => {
  let appointments = await getDoctorAppointments(filter);  
  SLOTS.evening.forEach(element => {
    element.blocked = !!appointments.find(
      appointment =>
        appointment.startTime === element.startTime &&
        appointment.endTime === element.endTime
    );
  });

  return SLOTS;
};

const getDoctorAppointments = async doctorId => {
  let result = await appointmentService.getDoctorAppointments(doctorId);
  return result;
};

const createAppointment = async appointment => {
  let result = await appointmentService.createAppointment(appointment);
  return result;
};

const createDoctor = async doctor => {
  let instance = new Doctor(doctor);
  try {
    let result = await instance.save();
    return result;
  } catch {
    return "failed to create";
  }
};

module.exports = {
  getDoctorSlots,
  getDoctorAppointments,
  createAppointment,
  createDoctor
};
