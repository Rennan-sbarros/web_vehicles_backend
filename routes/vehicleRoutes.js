const router = require('express').Router()
const Vehicle = require('../models/Vehicle')

// Create
router.post('/', async (req, res) => {
    const { 
        placa,
        chassi,
        renavam,
        modelo,
        marca,
        ano, 
    } = req.body

    const vehicle = {
        placa,
        chassi,
        renavam,
        modelo,
        marca,
        ano,
    }

    try {
        await Vehicle.create(vehicle)

        res.status(201).json({ message: 'Veículo inserido com sucesso!' })
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

module.exports = router