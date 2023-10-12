const express = require('express')
const router = express.Router()

const clienteController = require('../controllers/clienteController')
const productosController = require('../controllers/productosController')
const pedidosController = require('../controllers/pedidosController')
const usuariosController = require('../controllers/usuariosController')

const auth = require('../middleware/auth')

module.exports = function() {

    // Agrega nuevos clientes via POST
    router.post('/clientes', auth, clienteController.nuevoCliente)

    // Obtener todos los clientes
    router.get('/clientes', 
        auth,
        clienteController.mostrarClientes)

    // muestra un cliente en especifico
    router.get('/clientes/:idCliente', auth, clienteController.mostrarCliente)

    // actualizar cliente
    router.put('/clientes/:idCliente',auth, clienteController.actualizarCliente)

    // eliminar cliente
    router.delete('/clientes/:idCliente', auth, clienteController.eliminarCliente)

    /** Productos */
    // nuevos productos
    router.post('/productos', 
        auth,
        productosController.subirArchivo,
        productosController.nuevoProducto
    );

    // Muestra todos los productos
    router.get('/productos', auth, productosController.mostrarProductos)

    // Muestra producto por id
    router.get('/productos/:idProducto', auth, productosController.mostrarProducto)

    // Actualizar producto
    router.put('/productos/:idProducto',
        auth,
        productosController.subirArchivo,
        productosController.actualizarProducto)

    // Eliminar productos
    router.delete('/productos/:idProducto',
        auth,
        productosController.eliminarProducto)

    // Busqueda de productos
    router.post('/productos/busqueda/:query', auth, productosController.buscarProducto)

    /** Pedidos */
    // agrega nuevos pedidos
    router.post('/pedidos/nuevo/:idUsuario', auth, pedidosController.nuevoPedido)

    // mostrar todos los pedidos
    router.get('/pedidos', auth, pedidosController.mostrarPedidos)

    // Mostrar un pedido por su id
    router.get('/pedidos/:idPedido', auth, pedidosController.mostrarPedido)

    // Actualizar pedido
    router.put('/pedidos/:idPedido', auth, pedidosController.actualizarPedido)

    // Eliminar pedido
    router.delete('/pedidos/:idPedido', auth, pedidosController.eliminarPedido)

    // Usuarios
    router.post('/crear-cuenta', usuariosController.registrarUsuario)

    router.post('/iniciar-sesion', usuariosController.autenticarUsuario)

    return router
}