const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
  _id: { type: String, require: true },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  workingDays: {
    type: String,
    require: true,
    defult: "WEEKDAYS"
  }
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
