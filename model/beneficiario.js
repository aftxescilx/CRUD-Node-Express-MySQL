const { actualizar } = require("../controllers/beneficiarioController");

module.exports={
    obtener:function (conexion,funcion) {
        conexion.query("SELECT * FROM beneficiario WHERE estatus=1", funcion);        
    },
    insertar:function(conexion,datos,funcion){
        conexion.query("INSERT INTO beneficiario (nombre, rfc, estatus, idUsuarioCrea) VALUES (?,?,1,1)", [datos.nombre, datos.rfc],funcion);
    },
    retornarDatosID:function(conexion,id,funcion) {
        conexion.query("SELECT * FROM beneficiario WHERE idBeneficiario=?",[id],funcion);        
    },
    eliminar:function(conexion,id,funcion) {
        conexion.query("UPDATE beneficiario SET estatus=0 WHERE idBeneficiario=?",[id],funcion);        
    },
    actualizar:function(conexion,datos,funcion){
        conexion.query("UPDATE beneficiario SET nombre=?, rfc=? WHERE idBeneficiario=?", [datos.nombre, datos.rfc, datos.id],funcion);
    }
}