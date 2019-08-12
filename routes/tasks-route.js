const express = require('express');
const route = express.Router();

// body parser
const bodyParser = require('body-parser');
route.use(bodyParser.urlencoded({ extended: false }));

// task controller
const tasksCtrl = require('./../controllers/tasks-ctrl');

// Routes :

// get index
route.get('/', tasksCtrl.getIndex);

// post task
route.post('/add-task', tasksCtrl.getAddTask);

module.exports = route;
