const mongoose = require('mongoose');
const { Schema } = mongoose;

const schooldistrictSchema = new Schema({
  id: Number,
  link: String,
  sd: String,
  city: String,
  state: String,
  county: String,
  disableSearch: { type: Boolean, default: false },
  customSearch: { type: Boolean, default: false }
});

mongoose.model('schooldistricts', schooldistrictSchema);
