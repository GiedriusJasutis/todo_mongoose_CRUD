const express = require('express');
const route = express.Router();

// body parser
const bodyParser = require('body-parser');
route.use(bodyParser.urlencoded({ extended: true }));

const authCtrl = require('./../controllers/auth');

route.get('/login', authCtrl.getLogin);

route.post('/login', authCtrl.postLogin);

route.post('/logout', authCtrl.postLogout);

route.get('/signUp', authCtrl.getSignUp);

route.post('/signUp', authCtrl.postSignUp);

module.exports = route;
