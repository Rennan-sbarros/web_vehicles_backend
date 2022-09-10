const mongoose = require('mongoose')

const Vehicle = mongoose.model('Vehicle', {
    placa: String,
    chassi: String,
    renavam: Number,
    modelo: String,
    marca: String,
    ano: Number
})

module.exports = Vehicle