'use strict';
const express = require('express');
const morgan = require('morgan');
const config = require('./config/default');
const bodyParser = require('body-parser');

//services
const routeClient = require('./services/Client/client.route');
const routeAdress = require('./services/Adress/adress.route');

//config
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//routes
app.use('/client', routeClient);
app.use('/adress', routeAdress);

app.listen(config.port, () => {
    console.log(`Server in the port ${config.port}`);
});

