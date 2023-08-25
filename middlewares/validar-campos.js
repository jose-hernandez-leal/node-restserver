
const { validationResult } = require('express-validator');


const validarCampos = (req,res,nextr) =>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    nextr();

}

module.exports= {
    validarCampos
};