const Status = require("http-status");
const doctorService = require("../service/doctor.service");

const getDoctorSlots = async (req, res) => {
  const { doctorid } = req.params;
  const { date } = req.query;
  let result = await doctorService.getDoctorSlots({
    doctor: doctorid,
    date: date
  });
  return res.json(result).status(Status.OK);
};

const getDoctorAppointments = async (req, res) => {
  const { doctorid } = req.params;
  const { date } = req.query;
  let result = await doctorService.getDoctorAppointments({
    doctor: doctorid,
    date: date
  });
  return res.json(result).status(Status.OK);
};

const createAppointment = async (req, res) => {
  let result = await doctorService.createAppointment(req.body);
  return res.json(result).status(Status.OK);
};

const createDoctor = async (req, res) => {
  let result = await doctorService.createDoctor(req.body);
  return res.json(result).status(Status.OK);
};

module.exports = {
  getDoctorSlots,
  getDoctorAppointments,
  createAppointment,
  createDoctor
};
