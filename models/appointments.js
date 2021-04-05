const mongoose = require("mongoose");

const appointmentsSchema = mongoose.Schema({
  _id: { type: String },
  doctor: { type: String, require: true, ref: "Doctor" },
  hospital: { type: String, require: true, ref: "Hospital" },
  patinet: { type: String, ref: "Patient" },
  startTime: { type: String, require: true },
  endTime: { type: String, require: true },
  date:{ type: String, require: true },
  createdAt:{ type: Date, default: new Date()},
  updatedAt:{ type: Date, default: new Date()},
});

const Appointment = mongoose.model("Appointment", appointmentsSchema);

module.exports = Appointment;
