const mongoose = require('mongoose');

// Detail schema

const detailSchema = new mongoose.Schema({
  image: {
    type: String,
    required: false
  },

  description: {
    type: String,
    required: false
  }
});

module.exports = {
  detailSchema,
  Detail: mongoose.model('Detail', detailSchema)
};
