const express = require("express");
const doctorController = require("../controller/doctor.controller");

const router = express.Router();

router  
  .route("/doctor/:doctorid/getSlots").get(doctorController.getDoctorSlots);
router
  .route("/doctor/:doctorid/getAppointments").get(doctorController.getDoctorAppointments);
router.route("/doctor/createAppointment").post(doctorController.createAppointment);
router.route("/doctor/create").post(doctorController.createDoctor);

module.exports = router;
