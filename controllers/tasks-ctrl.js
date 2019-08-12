exports.getIndex = (req, res) => {
  res.render('index');
};

exports.getAddTask = (req, res) => {
  console.log(req.body);
  res.redirect('/');
};
