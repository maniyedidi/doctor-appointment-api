const mongoose = require("mongoose");

const workingHoursSchema = mongoose.Schema({
  _id: { type: String, require: true },
  dotorId: {
    type: String,
    require: true,
    unique: true
  },
  workingDays: {
    type: String,
    require: true,
    defult: "WEEKDAYS"
  },
  workingHoursFrom: {
    type: Number
  },
  workingHoursTo: {
    type: Number
  },
  workingShift: {
    type: String
  }
});

const WorkingHours = mongoose.model("WorkingHours", workingHoursSchema);

module.exports = WorkingHours;
