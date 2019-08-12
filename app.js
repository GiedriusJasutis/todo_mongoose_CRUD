const express = require('express');
const app = express();

// set view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Routes
const tasksRoute = require('./routes/tasks-route');

app.use(tasksRoute);

app.listen(2000);
