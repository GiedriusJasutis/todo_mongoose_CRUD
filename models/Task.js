const mongoose = require('mongoose');

// Detail Schema
const detailSchema = require('./Detail').detailSchema;

// Task schema

const Task = new mongoose.Schema({
  task: {
    type: String,
    required: true
  },

  details: [detailSchema]
});

module.exports = mongoose.model('Task', Task);
