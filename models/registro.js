const mongoose = require('mongoose');

const registro = mongoose.Schema({
    placa:String,
    modelo:String,
    placa2:String,
    modelo2:String,
    usuario:String,
    emptransporte:String,
    licencia:String,
    chofer:String,
    lugarp:String,
    acopio:String,
    pallet:String,
    formato:String,
    peso:Number,
    tratamiento:String,
    modulo:String,
    variedad:String,
    cantidad:Number,
    pesototal:Number,
    fecharegistro:Date,
    fechaguia:Date,
    guia:String
})

module.exports = mongoose.model('registro',registro);