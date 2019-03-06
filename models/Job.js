const mongoose = require('mongoose');
const { Schema } = mongoose;

const JobSchema = new Schema({
  jobId: {
    type: String,
    index: true
  },
  schoolId: String,
  jobTitle: String,
  jobUrl: String,
  sd: String,
  city: String,
  county: String,
  state: String,
  date: String,
  paid: { type: Boolean, default: false }
});

module.exports = mongoose.model('Job', JobSchema);
