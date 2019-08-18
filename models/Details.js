const mongoose = require('mongoose');

const Detail = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Detail', Detail);
