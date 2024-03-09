const express = require("express"); 
const config = require('./config'); 

const clientes = require('./modulos/clientes/rutas');
const usuarios = require('./modulos/usuarios/rutas');
const error = require('./red/errors');

const morgan = require("morgan");

const app = express(); 

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Config
app.set('port', config.app.port)

//Rutas
app.use('/api/clientes', clientes)
app.use('/api/usuarios', usuarios)
app.use(error);

module.exports = app;