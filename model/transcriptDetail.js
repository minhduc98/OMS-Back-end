const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transcriptDetailSchema = new Schema({
  transcript: {
    type: Schema.Types.ObjectId,
    ref: 'Transcript',
    required: true,
  },
  ETCSCredits: {
    type: Number,
    required: true,
  },
  GPAGrade: {
    type: Number,
    required: true,
  },
  Notes: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('TranscriptDetail', transcriptDetailSchema);
