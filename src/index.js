require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors');

app.use(cors());

app.use(
    express.urlencoded({
      extended: true,
    }),
  )
  
app.use(express.json())

// rotas da API
const vehicleRoutes = require('./routes/vehicleRoutes')

app.use('/vehicles', vehicleRoutes)

// Rota inicial / endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Você acessou a API com sucesso' })
})

// Configuração banco de dados
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose.connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.y9xd7vv.mongodb.net/bancodaapi?retryWrites=true&w=majority`,
    )
    .then(() => {
        console.log('Conectou ao banco!')
        app.listen(3000)
    })
    .catch((err) => console.log(err))