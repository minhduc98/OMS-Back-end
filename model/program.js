const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const programSchema = new Schema({
  programName: {
    type: String,
    required: true,
  },
  programName_v: {
    type: String,
    required: true,
  },
  shortName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Program', programSchema);
