const Task = require('./../models/Task');

exports.getIndex = (req, res) => {
  res.render('index', {
    tasks: []
  });
};

exports.postAddTask = (req, res) => {
  const addTask = req.body.addTask;
};

exports.deleteTask = (req, res) => {
  const id = req.params.taskId;
};

exports.updateTask = (req, res) => {
  console.log(req.params);
};
