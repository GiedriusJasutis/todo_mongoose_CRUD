const Task = require('./../models/Task');
const Detail = require('./../models/Detail').Detail;

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

exports.getDetails = (req, res) => {
  const id = req.params.taskId;
  Task.find().then(tasks => {
    const allTasks = tasks;
    Task.findById(id)
      .then(task => {
        res.render('details', {
          tasks: allTasks, // all tasks
          updateMode: false,
          taskContent: task.task,
          taskId: task._id,
          details: task.details
        });
      })
      .catch(err => {
        console.log(err);
      });
  });
};

exports.deleteDetail = (req, res, next) => {
  const detailId = req.body.detailId;
  const taskId = req.body.taskId;

  Task.findById(taskId).then(task => {
    task.details.find(detail => {
      return detail._id == detailId;
    });
    console.log(newTask);
    console.log(detailId);
    //console.log(task.details);

    task.save();
  });

  res.redirect('/');
};
