const Task = require('./../models/Task').Task;
const Detail = require('./../models/Detail').Detail;

// renders details.ejs
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
          details: task.details,
          isAuthenticated: req.session.isLogged
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
    const updatedDetails = task.details.filter(det => {
      return det._id.toString() !== detailId;
    });

    task.details = updatedDetails;

    return task
      .save()
      .then(result => {
        console.log('Detail was deleted succesfully');
        res.redirect('/');
      })
      .catch(err => {
        console.log(err);
      });
  });
};
