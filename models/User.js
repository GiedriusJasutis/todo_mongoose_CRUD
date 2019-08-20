const mongoose = require('mongoose');
const taskSchema = require('./Task').taskSchema;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  tasks: [taskSchema]
});

module.exports = {
  userSchema,
  User: mongoose.model('User', userSchema)
};
