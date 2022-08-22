const mongoose = require('mongoose');

const tratamiento = mongoose.Schema({
    codigotratamiento:String
})

module.exports = mongoose.model('tratamiento',tratamiento);