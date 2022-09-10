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

// Read

router.get('/', async (req, res) => {
    try {
      const vehicle = await Vehicle.find()
  
      res.status(200).json(vehicle)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

module.exports = router