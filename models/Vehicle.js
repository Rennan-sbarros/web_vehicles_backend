const mongoose = require('mongoose')

const Vehicle = mongoose.model('Vehicle', {
    placa: String,
    chassi: String,
    renavam: String,
    modelo: String,
    marca: String,
    ano: String
})

module.exports = Vehicle