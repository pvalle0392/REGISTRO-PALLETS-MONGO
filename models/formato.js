const mongoose = require('mongoose');

const formato = mongoose.Schema({
    codigoformato:String,
    peso:Number
})

module.exports = mongoose.model('formato',formato);