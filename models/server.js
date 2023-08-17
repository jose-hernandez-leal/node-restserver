const express = require('express')
const cors = require('cors');   
class Server{

    constructor(){
        this.app = express();
        this.port =process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        this.midlewares();

        this.rutes();

    }

    midlewares(){
        this.app.use(cors())
        this.app.use(express.static('public'));
    }

    rutes(){
       this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }
    listen(){
        this.app.listen(this.port)
    }
}

module.exports = Server;