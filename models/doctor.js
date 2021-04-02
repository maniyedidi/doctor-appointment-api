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
  }
});
