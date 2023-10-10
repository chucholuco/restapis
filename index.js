const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// Cors permite que un cliente se conecte a otro servidor para intercambio de recursos
const cors = require('cors')

// conectar mongo
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/restapis', {
    useNewUrlParser: true
})

// crear el servidor
const app = express()

// habilitar body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Habilitar cors
app.use(cors())

// Rutas de la app
app.use('/', routes())

// carpeta publica
app.use(express.static('uploads'));

// puerto
app.listen(5000)