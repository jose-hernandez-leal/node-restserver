const {Schema,model} = require('mongoose');


const rolSchema= Schema({

    rol:{
        type: String,
        require: [true,'el rol es obligatorio']
    }
})
module.exports= model('Rol', rolSchema);