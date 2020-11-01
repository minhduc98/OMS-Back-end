const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const diplomaSchema = new Schema({
  majorName: {
    type: String,
    required: true,
  },
  majorName_v: {
    type: String,
    required: true,
  },
  ranking: {
    type: String,
    required: true,
  },
  ranking_v: {
    type: String,
    required: true,
  },
  graduationYear: {
    type: Number,
    required: true,
  },
  acceptGraduation: {
    type: String,
    required: true,
  },
  diplomaNote: {
    type: String,
    required: true,
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
});

module.exports = mongoose.model('Diploma', diplomaSchema);
