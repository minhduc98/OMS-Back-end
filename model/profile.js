const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  fullName_v: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  DOB_v: {
    type: String,
    required: true,
  },
  POB: {
    type: String,
    required: true,
  },
  POB_v: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  ethnicity: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  phoneNum: {
    type: String,
    required: true,
  },
  martialStatus: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Profile', profileSchema);
