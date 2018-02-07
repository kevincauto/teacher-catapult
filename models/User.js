const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: {
    type: Number,
    default: 0
  },
  admin: {
    type: Boolean,
    default: false
  },
  recruiter: {
    type: Boolean,
    default: false
  },
  leadPermission: {
    type: Boolean,
    default: false
  },
  first: String,
  last: String,
  email: String,
  certifications: [String],
  startDate: String,
  zipcode: String,
  city: String,
  state: String,
  relocate: {
    type: Boolean,
    default: false
  },
  substitute: {
    type: Boolean,
    default: false
  },
  agree: {
    type: Boolean,
    default: false
  },
  resume: String,
  lastUpdated: Date
});

module.exports = mongoose.model('users', userSchema);
