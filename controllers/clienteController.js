const Clientes = require('../models/Clientes')

// Agrega un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
    
    const cliente = new Clientes(req.body)

    try {
        await cliente.save()
        res.json({mensaje: 'Se agrego un nuevo cliente'})
    } catch (error) {
        res.send(error)
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

// muestra un cliente por su id
exports.mostrarCliente = async (req, res, next) => {
    const cliente = await Clientes.findById(req.params.idCliente)
    console.log('cliente:' + cliente)
    if (!cliente) {
        res.json({mensaje: 'Ese cliente no existe'})
        next()
    }

    res.json(cliente)
}

// actualiza un cliente por su id
exports.actualizarCliente = async (req, res, next) => {
    try {
        const cliente = await Clientes.findOneAndUpdate({ _id: req.params.idCliente }, req.body, {
            new : true})
            
            res.json(cliente)
    } catch (error) {
        res.send(error)
        next()
    }
}

// elimina un cliente por su id
exports.eliminarCliente = async (req, res, next) => {
    try {
        await Clientes.findOneAndDelete({_id: req.params.idCliente})    
        res.json({mensaje: 'El cliente se ha eliminado'})
    } catch (error) {
        console.log(error)
        next()
    }
}