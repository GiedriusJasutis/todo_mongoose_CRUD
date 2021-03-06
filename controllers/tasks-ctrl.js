const Task = require('./../models/Task');

exports.getIndex = (req, res) => {
  Task.find().then(tasks => {
    res.render('index', {
      tasks,
      updateMode: false,
      isAuthenticated: false
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
      taskId: task._id,
      isAuthenticated: true
    });
  });
};

exports.postUpdateTask = (req, res) => {
  const id = req.params.taskId;
  Task.findById(id)
    .then(task => {
      task.task = req.body.addTask;
      if (req.body.addImage !== '' && req.body.description !== '') {
        const detail = {
          image: req.body.addImage,
          description: req.body.description
        };

        console.log('added details');
        task.details.push(detail);
      }
      console.log('added only task');
      return task.save();
    })
    .then(result => {
      res.redirect('/');
    });
};
