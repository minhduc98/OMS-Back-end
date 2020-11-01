const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const majorSchema = new Schema({
  majorName: {
    type: String,
    required: true,
  },
  majorName_v: {
    type: String,
    required: true,
  },
  shortName: {
    type: String,
    required: true,
  },
  year: {
    type: Schema.Types.ObjectId,
    ref: 'Year',
    required: true,
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: 'Department',
    required: true,
  },
  program: {
    type: Schema.Types.ObjectId,
    ref: 'Program',
    required: true,
  },
});

module.exports = mongoose.model('Major', majorSchema);
