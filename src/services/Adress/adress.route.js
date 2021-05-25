'use strict';

const express = require('express');
const routerAdress = express.Router();
const controllerAdress = require('./adress.controller')

routerAdress.get('/', controllerAdress.list);
routerAdress.get('/:id', controllerAdress.get);
routerAdress.post('/', controllerAdress.post);
routerAdress.put('/:id', controllerAdress.put);
routerAdress.delete('/:id', controllerAdress.delete);


module.exports = routerAdress;
