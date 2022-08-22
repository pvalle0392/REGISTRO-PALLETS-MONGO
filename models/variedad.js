const mongoose = require('mongoose');

const variedad = mongoose.Schema({
    codigovariedad:String
})

module.exports = mongoose.model('variedad',variedad);