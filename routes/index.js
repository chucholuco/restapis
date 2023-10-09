const express = require('express')
const router = express.Router()

const clienteController = require('../controllers/clienteController')
const productosController = require('../controllers/productosController')

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

    /** Productos */
    // nuevos productos
    router.post('/productos', 
        productosController.subirArchivo,
        productosController.nuevoProducto
    );

    // Muestra todos los productos
    router.get('/productos', productosController.mostrarProductos)

    // Muestra producto por id
    router.get('/productos/:idProducto', productosController.mostrarProducto)

    // Actualizar producto
    router.put('/productos/:idProducto',
        productosController.subirArchivo,
        productosController.actualizarProducto)

    // Eliminar productos
    router.delete('/productos/:idProducto',
        productosController.eliminarProducto)

    return router
}