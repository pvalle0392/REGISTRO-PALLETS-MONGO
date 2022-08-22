const express = require('express');
const bodyParser = require('body-parser');
const router_usuario = require('./routes/usuario')
const {connectDB} = require('./database')
var app = express();

//Conexion a la base  de datos
connectDB();

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cors

//rutas
app.use('/api/usuario',router_usuario);
//exportar
module.exports = app;