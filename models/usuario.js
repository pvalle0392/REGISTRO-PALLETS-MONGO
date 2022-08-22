const mongoose = require('mongoose');

const usuario = mongoose.Schema({
    codigo:String
})

module.exports = mongoose.model('usuario',usuario);