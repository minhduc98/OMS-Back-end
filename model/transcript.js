const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transcriptSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  year: {
    type: Schema.Types.ObjectId,
    ref: 'Year',
    required: true,
  },
});

module.exports = mongoose.model('Transcript', transcriptSchema);
