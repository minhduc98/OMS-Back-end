const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
  departmentName: {
    type: String,
    required: true,
  },
  departmentName_v: {
    type: String,
    required: true,
  },
  shortName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Department', departmentSchema);
