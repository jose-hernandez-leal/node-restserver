const mongoose = require('mongoose');


const dbConections = async() =>{

    try {
        await mongoose.connect(process.env.MONGODCATLAS,{
            useNewUrlParser:true,
            useUnifiedTopology: true
                    },
            )
            console.log('base de datos online');
        
    } catch (error) {
        console.log(error)
        throw new Error('error al iniciar la base de datos');
    }
}

module.exports = {
    dbConections
};