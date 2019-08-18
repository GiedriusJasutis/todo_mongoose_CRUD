const Task = require('./../models/Task');
const Details = require('./../models/Details');

const detail = new Details({
  image: 'some image url',
  description: 'some description.............'
});

exports.getIndex = (req, res) => {
  Task.find().then(tasks => {
    res.render('index', {
      tasks,
      updateMode: false
    });
  });
};

exports.postAddTask = (req, res) => {
  const addTask = req.body.addTask;
  new Task({
    task: addTask
  })
    .save()
    .then(tasks => {
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.deleteTask = (req, res) => {
  const id = req.params.taskId;
  Task.findByIdAndDelete(id).then(result => {
    console.log('Task deleted succesfully');
  });
  res.redirect('/');
};

exports.editTask = (req, res) => {
  const id = req.params.taskId;
  Task.findById(id).then(task => {
    res.render('index', {
      tasks: [task],
      updateMode: true,
      taskContent: task.task,
      taskId: task._id
    });
  });
};

exports.updateTask = (req, res) => {
  const id = req.params.taskId;
  Task.findById(id)
    .then(task => {
      task.task = req.body.addTask;
      return task.save();
    })
    .then(result => {
      console.log(result);
      res.redirect('/');
    });
};

exports.getDetails = (req, res) => {
  const id = req.params.taskId;
  Task.find().then(tasks => {
    const allTasks = tasks;
    Task.findById(id).then(task => {
      res.render('details', {
        tasks: allTasks,
        updateMode: false,
        taskContent: task.task,
        taskId: task._id
      });
      console.log(task);
    });
  });
};
