const mongoose = require('mongoose');

const acopio = mongoose.Schema({
    codigoacopio:String
})

module.exports = mongoose.model('acopio',acopio);