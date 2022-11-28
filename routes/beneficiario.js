var express = require('express');
var router = express.Router();
const beneficiarioController= require("../controllers/beneficiarioController");
var multer = require('multer');
/* GET home page. */
router.get('/',beneficiarioController.index);
router.get('/crear',beneficiarioController.crear);
router.post('/',beneficiarioController.guardar);
router.post('/eliminar/:id',beneficiarioController.eliminar);
router.get('/editar/:id',beneficiarioController.editar);
router.post('/actualizar',multer().none(), beneficiarioController.actualizar);

module.exports = router;
