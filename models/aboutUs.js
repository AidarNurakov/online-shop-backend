const mongoose = require('mongoose');

const schema = mongoose.Schema;

const aboutUsSchema = new schema({
  text: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    requred: true
  },
  picture: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  socialNetworks: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
});

exports.AboutUs = mongoose.model('AboutUs', aboutUsSchema);