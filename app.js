const express = require('express');
const bodyParser = require('body-parser');
const router_usuario = require('./routes/usuario');
const {connectDB} = require('./database');
var app = express();


// app.use(nodemon)run dev
//Conexion a la base  de datos
connectDB();
//
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cors

//rutas
app.use('/api/usuario',router_usuario);
//exportar
module.exports = app; 