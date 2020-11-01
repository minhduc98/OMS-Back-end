const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  courseName: {
    type: String,
    required: true,
  },
  courseName_v: {
    type: String,
    required: true,
  },
  courseCode: {
    type: String,
    required: true,
  },
  academicYear: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  totalHour: {
    type: Number,
    required: true,
  },
  lectureHour: {
    type: Number,
    required: true,
  },
  labHour: {
    type: Number,
    required: true,
  },
  major: {
    type: Schema.Types.ObjectId,
    ref: 'Major',
    required: true,
  },
});

module.exports = mongoose.model('Course', courseSchema);
