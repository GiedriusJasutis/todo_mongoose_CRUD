const mongoose = require('mongoose');

const Task = mongoose.Schema({
  task: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Task', Task);
