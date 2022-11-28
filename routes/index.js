var express = require('express');
var router = express.Router();
const beneficiarioController= require("../controllers/beneficiarioController");

/* GET home page. */
router.get('/',function(req, res, next) {
     res.redirect('/beneficiario');    
});

module.exports = router;
