const mongoose = require('mongoose');

// Detail Schema
const detailSchema = require('./Detail').detailSchema;

// Task schema

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  },

  details: [detailSchema]
});

module.exports = {
  taskSchema,
  Task: mongoose.model('Task', taskSchema)
};
