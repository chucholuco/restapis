const express = require('express')
const router = express.Router()

const clienteController = require('../controllers/clienteController')
const productosController = require('../controllers/productosController')
const pedidosController = require('../controllers/pedidosController')

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

    /** Pedidos */
    // agrega nuevos pedidos
    router.post('/pedidos', pedidosController.nuevoPedido)

    // mostrar todos los pedidos
    router.get('/pedidos', pedidosController.mostrarPedidos)

    // Mostrar un pedido por su id
    router.get('/pedidos/:idPedido', pedidosController.mostrarPedido)

    // Actualizar pedido
    router.put('/pedidos/:idPedido', pedidosController.actualizarPedido)

    // Eliminar pedido
    router.delete('/pedidos/:idPedido', pedidosController.eliminarPedido)

    return router
}