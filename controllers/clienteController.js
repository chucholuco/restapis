const Clientes = require('../models/Clientes')

// Agrega un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
    
    const cliente = new Clientes(req.body)

    try {
        await cliente.save()
        res.json({mensaje: 'Se agrego un nuevo cliente'})
    } catch (error) {
        console.log(error)
        next()
    }
}

// muestra todos los clientes
exports.mostrarClientes = async (req, res, next) => {
    try {
        const clientes = await Clientes.find({})
        res.json(clientes)
    } catch (error) {
        console.log(error)
        next()
    }
}