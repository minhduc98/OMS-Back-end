const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseReportSchema = new Schema({
  transcript: {
    type: Schema.Types.ObjectId,
    ref: 'TranscriptDetail',
    required: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  final: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('CourseReport', courseReportSchema);
