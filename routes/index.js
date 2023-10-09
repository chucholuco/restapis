const express = require('express')
const router = express.Router()

const clienteController = require('../controllers/clienteController')

module.exports = function() {

    // Agrega nuevos clientes via POST
    router.post('/clientes', clienteController.nuevoCliente)

    // Obtener todos los clientes
    router.get('/clientes', clienteController.mostrarClientes)

    // muestra un cliente en especifico
    router.get('/clientes/:idCliente', clienteController.mostrarCliente)

    // actualizar cliente
    router.put('/clientes/:idCliente', clienteController.actualizarCliente)

    // eliminar cliente
    router.delete('/clientes/:idCliente', clienteController.eliminarCliente)

    return router
}