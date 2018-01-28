const mongoose = require('mongoose');
const { Schema } = mongoose;

const PaidJobSchema = new Schema({
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
  description: String,
  date: String,
  active: { type: Boolean, default: true },
  paid: { type: Boolean, default: true }
});

module.exports = mongoose.model('PaidJob', PaidJobSchema);
