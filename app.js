const express = require('express');
const bodyParser = require('body-parser');
const router_usuario = require('./routes/usuario')
var app = express();

//rutas

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cors

//rutas
app.use('/api/usuario',router_usuario);
//exportar
module.exports = app;