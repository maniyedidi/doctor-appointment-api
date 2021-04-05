const moongoose = require("mongoose");

const Address = mongoose.Schema({
  line1: {
    type: String
  },
  city: {
    type: String
  },
  country: {
    type: String
  },
  zipcode: {
    type: String,
    require: true
  }
});

const patientSchema = moongoose.Schema({
  _id: {
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  contact: {
    type: String,
    require: true,
    unique: true
  },
  address: {
    type: Address,
    require: true
  },
  updatedAt: { type: Date, default: new Date() },
  createdAt: { type: Date, default: new Date() }
});

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
