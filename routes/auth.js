const express = require('express');
const route = express.Router();

// body parser
const bodyParser = require('body-parser');
route.use(bodyParser.urlencoded({ extended: true }));

module.exports = route;
