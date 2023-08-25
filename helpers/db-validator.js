const Rol = require('../models/rol')
const Usuario = require('../models/usuario')



const validaRol = async(rol='') =>{
    const existeRol = await Rol.findOne({rol})
    if(!existeRol){
        throw new Error(`el rol ${rol} no esta en la BD`)
    }
}

const emailExiste = async(correo ='') =>{
    const existeCorreo = await Usuario.findOne({ correo });
    
    if (existeCorreo) {
        throw new Error(`el correo ${correo} ya existe`);

    }
}
const existeId = async(id ='') =>{
    const existeIdDb = await Usuario.findById(id);
    
    if (!existeIdDb) {
        throw new Error(`el usuario con id:${id} no existe`);

    }
}
module.exports = {
    validaRol,
    emailExiste,
    existeId
}