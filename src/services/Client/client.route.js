'use strict';

const express = require('express');
const routeClient = express.Router();
const controllerClient = require('./client.controller');

routeClient.get('/', controllerClient.list);
routeClient.get('/:id', controllerClient.get);
routeClient.post('/', controllerClient.post);
routeClient.put('/:id', controllerClient.put);
routeClient.delete('/:id', controllerClient.delete);


module.exports = routeClient;
