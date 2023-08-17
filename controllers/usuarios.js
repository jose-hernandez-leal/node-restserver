const {response, request} = require('express');


const usuariosGet  = (req, res = response) =>{
    res.json({
        msg:'get api- controlador'
    })
}
const usuariosPut  = (req, res = response) =>{
    res.json({
        msg:'put api- controlador'
    })
}
const usuariosPost = (req= request, res = response) =>{
    const body = req.body;

    res.json({
        msg:'post api- controlador111',
        body

    });
}
const usuariosDelete  = (req, res = response) =>{
    res.json({
        msg:'delete api- controlador'
    })
}
const usuariosPatch  = (req, res = response) =>{
    res.json({
        msg:'patch api- controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch

}