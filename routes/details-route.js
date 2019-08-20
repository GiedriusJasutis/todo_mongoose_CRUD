const express = require('express');
const route = express.Router();

// body parser
const bodyParser = require('body-parser');
route.use(bodyParser.urlencoded({ extended: true }));

const detailCtrl = require('./../controllers/details-ctrl');

// details
route.get('/details/:taskId', detailCtrl.getDetails);

// delete detail
route.post('/delete-detail', detailCtrl.deleteDetail);

module.exports = route;
