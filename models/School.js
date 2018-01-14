const mongoose = require('mongoose');
const { Schema } = mongoose;

const SchoolSchema = new Schema({
  id: {
    type: Number,
    index: true
  },
  link: String,
  sd: String,
  city: String,
  state: String,
  county: String,
  disableSearch: { type: Boolean, default: false },
  customSearch: { type: Boolean, default: false }
});

module.exports = mongoose.model('School', SchoolSchema);
