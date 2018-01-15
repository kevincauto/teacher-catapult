const mongoose = require('mongoose');
const { Schema } = mongoose;

const JobSchema = new Schema({
  id: {
    type: Number,
    index: true
  },
  jobTitle: String,
  link: String,
  sd: String,
  city: String,
  county: String,
  state: String,
  date: String,
  paid: { type: Boolean, default: false }
});

module.exports = mongoose.model('Job', JobSchema);
