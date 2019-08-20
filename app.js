const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDbStoreSession = require('connect-mongodb-session')(session);

// .env
const env = require('dotenv').config();
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const DB_connection = `mongodb+srv://${username}:${password}@mycluster-9dlye.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const app = express();

// initialize session
const store = new MongoDbStoreSession({
  uri: DB_connection,
  collection: 'sessions'
});

// set view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// use session
app.use(
  session({
    secret: 'some secret value',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

// Routes
const tasksRoute = require('./routes/tasks-route');
const detailRoute = require('./routes/details-route');
const authRoute = require('./routes/auth');
app.use(tasksRoute);
app.use(detailRoute);
app.use(authRoute);

// connection
mongoose
  .connect(DB_connection, { useNewUrlParser: true })
  .then(result => {
    console.log('Connected');
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
