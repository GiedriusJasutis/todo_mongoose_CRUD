const express = require('express');
const app = express();
const env = require('dotenv').config();
const mongoose = require('mongoose');
// set view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Routes
const tasksRoute = require('./routes/tasks-route');

app.use(tasksRoute);

const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const dbName = 'Todo';

exports.say = function() {
  return 'labas';
};

// connection
mongoose
  .connect(
    `mongodb+srv://${username}:${password}@mycluster-9dlye.mongodb.net/${dbName}?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then(result => {
    console.log('Connected');
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
