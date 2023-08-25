const {response, request} = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');


const usuariosGet  = async(req, res = response) =>{

    const {limite = 5, desde = 0} = req.query;


    const [total,usuarios] = await Promise.all([
        Usuario.countDocuments({estado:true}),
        Usuario.find({estado:true})
            .skip(Number(desde))
            .limit(Number(limite))
    ])
    res.json({
       total,
       usuarios
    })
}
const usuariosPut  = async(req, res = response) =>{
    const {id} = req.params;
    const {pasword,google,...resto} = req.body;

    if(pasword){
        const salt =  bcrypt.genSaltSync();
        resto.pasword = bcrypt.hashSync(pasword, salt);
    }

    const records = await Usuario.findByIdAndUpdate(id, resto, { new: true });

    res.json({
        msg:'put api- controlador', 
        id
    })
}
const usuariosPost = async (req = request, res = response) => {
    try {
        
        const { nombre, correo, pasword, rol } = req.body;

        // Generar un hash seguro para la contraseña
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(pasword, salt);

        // Crear y guardar el usuario
        const usuario = new Usuario({ nombre, correo, pasword: hashedPassword, rol });
        await usuario.save();

        // Respuesta exitosa
        res.json({
            msg: 'Usuario creado exitosamente',
            usuario
        });
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({
            msg: 'Hubo un error al procesar la solicitud'
        });
    }
};
const usuariosDelete  = async(req, res = response) =>{

    const { id } = req.params;
    const usuario = await Usuario.findByIdAndUpdate( id , {estado: false}, {new:true});

    res.json({
        msg:'delete api- controlador',
        id,
        usuario
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