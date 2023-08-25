const { Router } = require('express');
const bodyParser = require("body-parser");
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validaRol, emailExiste, existeId } = require('../helpers/db-validator');
const router = Router();
const jsonParser = bodyParser.json();



router.get('/', usuariosGet);
router.put('/:id',jsonParser,[
    check('id','no es un id valido').isMongoId(),
    check('id').custom(existeId),
    check('rol').custom(validaRol),
    validarCampos
], usuariosPut)
router.post("/",jsonParser,[
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('pasword', 'la contraseña debe tener 6 caracteres como minimo').isLength({min:6}),
    check('correo', 'el correo no es valido').isEmail(),
    check('correo').custom(emailExiste),
    check('rol').custom(validaRol),
    validarCampos] , usuariosPost);
router.delete('/:id',jsonParser,[ 
    check('id','no es un id valido').isMongoId(),
    check('id').custom(existeId),
    validarCampos
],usuariosDelete)
router.patch('/',usuariosPatch)

module.exports = router;