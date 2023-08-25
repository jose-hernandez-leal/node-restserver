const express = require('express')
const cors = require('cors');   
const { dbConections } = require('../DB/config');
class Server{

    constructor(){
        this.app = express();
        this.port =process.env.PORT;
        this.usuariosPath = '/api/usuarios';


        this.conectarDB();
        
        this.midlewares();

        this.rutes();

    }

    async conectarDB(){
        await dbConections();
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