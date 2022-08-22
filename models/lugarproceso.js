const mongoose = require('mongoose');

const lugarproceso = mongoose.Schema({
    codigoproceso:String
})

module.exports = mongoose.model('lugarproceso',lugarproceso);