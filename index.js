const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config({path: 'variables.env'})

// Cors permite que un cliente se conecte a otro servidor para intercambio de recursos
const cors = require('cors')

// conectar mongo
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true
})

// crear el servidor
const app = express()

// habilitar body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Definir un dominio(s) para recibir las peticiones
const whitelist = [process.env.FRONTEND_URL]
const corsOptions = {
    origin: (origin, callback) => {
        const existe = whitelist.some(dominio => dominio === origin)
        if (existe) {
            callback(null, true)
        } else {
            callback(new Error('No permitido por CORS'))
        }
    }
}

// Habilitar cors
app.use(cors(corsOptions))

// Rutas de la app
app.use('/', routes())

// carpeta publica
app.use(express.static('uploads'));

// puerto
app.listen(5000)