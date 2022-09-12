const router = require('express').Router()
const { body, validationResult } = require('express-validator');
const Vehicle = require('../models/Vehicle')


// Create
router.post('/', [
    body('placa').notEmpty().withMessage("O campo placa é obrigatório"),
    body('chassi').notEmpty().withMessage("O campo chassi é obrigatório"),
    body('renavam').notEmpty().withMessage("O campo renavam é obrigatório"),
    body('modelo').notEmpty().withMessage("O campo modelo é obrigatório"),
    body('marca').notEmpty().withMessage("O campo marca é obrigatório"),
    body('ano').notEmpty().withMessage("O campo ano é obrigatório"),
    body('ano').isNumeric().withMessage("O ano do veículo precisa ser numeral"), 
  ],
  async (req, res) => {
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
    
    const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
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

// Read by id
router.get('/:id', async (req, res) => {
    const id = req.params.id
  
    try {
      const vehicle = await Vehicle.findOne({ _id: id })
  
      if (!vehicle) {
        res.status(422).json({ message: 'Veículo não encontrado!' })
        return
      }
  
      res.status(200).json(vehicle)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
})

// Update
router.patch('/:id', async (req, res) => {
    const id = req.params.id
  
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
      const updatedVehicle = await Vehicle.updateOne({ _id: id }, vehicle)
  
      if (updatedVehicle.matchedCount === 0) {
        res.status(422).json({ message: 'Veículo não encontrado!' })
        return
      }
  
      res.status(200).json(vehicle)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
})
  
// Delete
router.delete('/:id', async (req, res) => {
    const id = req.params.id
  
    const vehicle = await Vehicle.findOne({ _id: id })
  
    if (!vehicle) {
      res.status(422).json({ message: 'Veículo não encontrado!' })
      return
    }
  
    try {
      await Vehicle.deleteOne({ _id: id })
  
      res.status(200).json({ message: 'Veículo removido com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
})

module.exports = router