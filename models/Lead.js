const mongoose = require('mongoose');
const { Schema } = mongoose;

const leadSchema = new Schema({
  first: String,
  last: String,
  email: String,
  certifications: [String],
  startDate: String,
  zipcode: String,
  state: String,
  relocate: {
    type: Boolean,
    default: false
  },
  agree: {
    type: Boolean,
    default: true
  },
  resume: String,
  lastUpdated: Date
});

module.exports = mongoose.model('Lead', leadSchema);
