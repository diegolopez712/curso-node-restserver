const { response } = require('express');

usuariosGet = (req, res = response ) => {
    //res.send('Hello World')

    //const query = req.query;
    //const { q, nombre } = req.query;
    const { q, nombre, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - Controlador',
        q,
        nombre, 
        page,
        limit
    })
}

usuariosPost =  (req, res = response) => {
    //Recibir peticiones del usuario
    const body = req.body;
    //desestructurar
    const { nombre, edad } = req.body;

    //res.send('Hello World')
    res.status(201).json({
        msg: 'post API', 
        body,
        nombre,
        edad
    })
}

usuariosPut = (req, res = response ) => {
    const { id } = req.params;
    //res.send('Hello World')
    res.status(500).json({
        msg: 'put API',
        id
    })
}

usuariosPatch = (req, res = response) => {
    //res.send('Hello World')
    res.json({
        msg: 'patch API'
    })
}

usuariosDelete =  (req, res = response) => {
    //res.send('Hello World')
    res.json({
        msg: 'delete API'
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}