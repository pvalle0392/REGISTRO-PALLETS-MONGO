const mongoose = require('mongoose');

const modulo = mongoose.Schema({
    codigomodulo:String
})

module.exports = mongoose.model('modulo',modulo);