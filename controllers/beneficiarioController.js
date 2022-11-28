var conexion= require('../config/conexion');
var beneficiario= require("../model/beneficiario")

module.exports={

    index:function(req,res){
        
        beneficiario.obtener(conexion,function(err,datos){
            //console.log(datos);
            res.render('beneficiario/index', { title: 'Aplicación CRUD Node-Express', beneficiario:datos});
        });
    },

    crear:function(req,res) {
        res.render('beneficiario/crear');  
    },
    
    guardar:function(req,res) {

        beneficiario.insertar(conexion,req.body,function(err){
            console.log(req.body);
             res.redirect('/beneficiario');
        });
    },

    eliminar:function(req,res) {
        console.log("Recepción de datos");
        console.log(req.params.id);
        beneficiario.eliminar(conexion,req.params.id,function(err) {
           res.redirect("/beneficiario");
        });
    },

    editar:function(req,res){
        beneficiario.retornarDatosID(conexion,req.params.id,function(err,registros){
            console.log(registros[0]);
            res.render('beneficiario/editar', {beneficiario:registros[0]});  
        });
    },

    actualizar:function(req,res) {
        console.log(req.body.nombre);
        console.log(req.body.rfc);
        if (req.body.nombre && req.body.rfc) {
            beneficiario.actualizar(conexion,req.body,function(err) {});
        }
        res.redirect('/beneficiario');
    }
}