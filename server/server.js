const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Phone = require('./models/phone');



const server = express();
server.use(cors());
server.use(bodyParser.json());





const phoneRoutes = require('./controllers/phone');
server.use('/phones', phoneRoutes);




module.exports = server
