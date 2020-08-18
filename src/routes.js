const express = require('express');

const CloudVision = require('./controllers/CloudVision');

const routes = express.Router();

routes.post('/', CloudVision.index);

module.exports = routes;
