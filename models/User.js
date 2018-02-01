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
  first: String,
  last: String,
  certifications: [String],
  startDate: String,
  zipcode: String,
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
  resume: { data: Buffer, contentType: String }
});

mongoose.model('users', userSchema);
