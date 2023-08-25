const { Schema, model} = require('mongoose');


const usuarioSchema = Schema({
    nombre:{
        type: String,
        required: [true,'el nombre es obligatorio']
    },
    correo:{
        type: String,
        required: [true,'el correo es obligatorio'],
        unique: true
    },  
    pasword:{
        type: String,
        required: [true,'la contraseña es obligatorio']
    },
    img:{
        type: String
    }, 
    rol:{
        type: String,
        required:  true,
        emun: ['ADMIN_ROL','USER_ROL']
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    }
});

usuarioSchema.methods.toJSON = function(){
    const {__v, pasword,...usuario}= this.toObject();
    return usuario;
}

module.exports = model('Usuario', usuarioSchema);

