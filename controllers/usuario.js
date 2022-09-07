const usuario = require('../models/usuario');
const acopio = require('../models/acopio');
const lugarproceso = require('../models/lugarproceso');
const formato = require('../models/formato');
const modulo = require('../models/modulo');
const variedad = require('../models/variedad');
const tratamiento = require('../models/tratamiento');
const registro = require('../models/registro');
const moment = require('moment-timezone');
// const { connectDB } = require('../database');

// connectDB();


var usuarioController = {
    //USUARIO
    agregarusuario: function (req, res) {
        const usuariobody = req.body;
        var nuevousuario = new usuario();
        nuevousuario.codigo = usuariobody.codigo;
        if (nuevousuario.codigo) {
            nuevousuario.save((err, item) => {
                if (err) return res.status(500).send({
                    status: "W",
                    response: "Error en la consulta"
                });
                if (!item) return res.status(200).send({
                    status: "W",
                    response: "No se guardó usuario"
                });
                return res.status(200).send({
                    status: "S",
                    response: item
                });
            })
        } else {
            return res.status(200).send({
                status: "W",
                response: "input no válido"
            });
        }
    },
    consultarusuario: function (req, res) {
        const codigousaurio = req.params.id;

        usuario.find({ codigo: codigousaurio }).exec((err, item) => {
            if (err) return res.status(500).send({
                status: "W",
                response: "Error en la consulta"
            });
            if (item.length == 0) return res.status(200).send({
                status: "W",
                response: "No se encontró usuario"
            });
            return res.status(200).send({
                status: "S",
                response: item
            });
        })
    },

    //ACOPIO
    agregaracopio: function (req, res) {
        const acopiobody = req.body;
        var nuevoacopio = new acopio();
        nuevoacopio.codigoacopio = acopiobody.codigoacopio;
        if (nuevoacopio.codigoacopio) {
            nuevoacopio.save((err, item) => {
                if (err) return res.status(500).send({
                    status: "W",
                    response: "Error en la consulta"
                });
                if (!item) return res.status(200).send({
                    status: "W",
                    response: "No se guardó acopio"
                });
                return res.status(200).send({
                    status: "S",
                    response: item
                });
            })
        } else {
            return res.status(200).send({
                status: "W",
                response: "input no válido"
            });
        }
    },
    consultaracopio: function (req, res) {
        acopio.find().exec((err, item) => {
            if (err) return res.status(500).send({
                status: "W",
                response: "Error en la consulta"
            });
            if (item.length == 0) return res.status(200).send({
                status: "W",
                response: "No se encontró acopio"
            });
            return res.status(200).send({
                status: "S",
                response: item
            });
        })
    },

    //LUGAR DE PROCESO
    agregarlugarproceso: function (req, res) {
        const lpbody = req.body;
        var nuevolp = new lugarproceso();
        nuevolp.codigoproceso = lpbody.codigoproceso;
        if (nuevolp.codigoproceso) {
            nuevolp.save((err, item) => {
                if (err) return res.status(500).send({
                    status: "W",
                    response: "Error en la consulta"
                });
                if (!item) return res.status(200).send({
                    status: "W",
                    response: "No se guardó proceso"
                });
                return res.status(200).send({
                    status: "S",
                    response: item
                });
            })
        } else {
            return res.status(200).send({
                status: "W",
                response: "input no válido"
            });
        }
    },
    consultarlugarproceso: function (req, res) {
        lugarproceso.find().exec((err, item) => {
            if (err) return res.status(500).send({
                status: "W",
                response: "Error en la consulta"
            });
            if (item.length == 0) return res.status(200).send({
                status: "W",
                response: "No se encontró proceso"
            });
            return res.status(200).send({
                status: "S",
                response: item
            });
        })
    },

    //FORMATO
    agregarformato: function (req, res) {
        const formatobody = req.body;
        var nuevoformato = new formato();
        nuevoformato.codigoformato = formatobody.codigoformato;
        nuevoformato.peso = formatobody.peso;
        if (nuevoformato.codigoformato) {
            nuevoformato.save((err, item) => {
                if (err) return res.status(500).send({
                    status: "W",
                    response: "Error en la consulta"
                });
                if (!item) return res.status(200).send({
                    status: "W",
                    response: "No se guardó formato"
                });
                return res.status(200).send({
                    status: "S",
                    response: item
                });
            })
        } else {
            return res.status(200).send({
                status: "W",
                response: "input no válido"
            });
        }
    },
    consultarformato: function (req, res) {
        formato.find().exec((err, item) => {
            if (err) return res.status(500).send({
                status: "W",
                response: "Error en la consulta"
            });
            if (item.length == 0) return res.status(200).send({
                status: "W",
                response: "No se encontró formato"
            });
            return res.status(200).send({
                status: "S",
                response: item
            });
        })
    },

    //modulo
    agregarmodulo: function (req, res) {
        const modulobody = req.body;
        var nuevomodulo = new modulo();
        nuevomodulo.codigomodulo = modulobody.codigomodulo;
        if (nuevomodulo.codigomodulo) {
            nuevomodulo.save((err, item) => {
                if (err) return res.status(500).send({
                    status: "W",
                    response: "Error en la consulta"
                });
                if (!item) return res.status(200).send({
                    status: "W",
                    response: "No se guardó modulo"
                });
                return res.status(200).send({
                    status: "S",
                    response: item
                });
            })
        } else {
            return res.status(200).send({
                status: "W",
                response: "input no válido"
            });
        }
    },
    consultarmodulo: function (req, res) {
        modulo.find().exec((err, item) => {
            if (err) return res.status(500).send({
                status: "W",
                response: "Error en la consulta"
            });
            if (item.length == 0) return res.status(200).send({
                status: "W",
                response: "No se encontró modulo"
            });
            return res.status(200).send({
                status: "S",
                response: item
            });
        })
    },

    //variedad
    agregarvariedad: function (req, res) {
        const variedadbody = req.body;
        var nuevovariedad = new variedad();
        nuevovariedad.codigovariedad = variedadbody.codigovariedad;
        if (nuevovariedad.codigovariedad) {
            nuevovariedad.save((err, item) => {
                if (err) return res.status(500).send({
                    status: "W",
                    response: "Error en la consulta"
                });
                if (!item) return res.status(200).send({
                    status: "W",
                    response: "No se guardó variedad"
                });
                return res.status(200).send({
                    status: "S",
                    response: item
                });
            })
        } else {
            return res.status(200).send({
                status: "W",
                response: "input no válido"
            });
        }
    },
    consultarvariedad: function (req, res) {
        variedad.find().exec((err, item) => {
            if (err) return res.status(500).send({
                status: "W",
                response: "Error en la consulta"
            });
            if (item.length == 0) return res.status(200).send({
                status: "W",
                response: "No se encontró variedad"
            });
            return res.status(200).send({
                status: "S",
                response: item
            });
        })
    },

    //TRATAMIENTO
    agregartratamiento: function (req, res) {
        const tratamientobody = req.body;
        var nuevotratamiento = new tratamiento();
        nuevotratamiento.codigotratamiento = tratamientobody.codigotratamiento;
        if (nuevotratamiento.codigotratamiento) {
            nuevotratamiento.save((err, item) => {
                if (err) return res.status(500).send({
                    status: "W",
                    response: "Error en la consulta"
                });
                if (!item) return res.status(200).send({
                    status: "W",
                    response: "No se guardó tratamiento"
                });
                return res.status(200).send({
                    status: "S",
                    response: item
                });
            })
        } else {
            return res.status(200).send({
                status: "W",
                response: "input no válido"
            });
        }
    },
    consultartratamiento: function (req, res) {
        tratamiento.find().exec((err, item) => {
            if (err) return res.status(500).send({
                status: "W",
                response: "Error en la consulta"
            });
            if (item.length == 0) return res.status(200).send({
                status: "W",
                response: "No se encontró tratamiento"
            });
            return res.status(200).send({
                status: "S",
                response: item
            });
        })
    },

    //REGISTRO
    agregarregistro: function (req, res) {
        const registrobody = req.body;
        let fecha = moment().tz("America/Bogota").format("YYYY-MM-DD");
        var nuevoregistro = new registro();
        nuevoregistro.placa=registrobody.placa;
        nuevoregistro.modelo=registrobody.modelo;
        nuevoregistro.placa2=registrobody.placa2||"";
        nuevoregistro.modelo2=registrobody.modelo2||"",
        nuevoregistro.usuario=registrobody.usuario;
        nuevoregistro.emptransporte=registrobody.emptransporte||"";
        nuevoregistro.licencia=registrobody.licencia||"";
        nuevoregistro.chofer=registrobody.chofer||"";
        nuevoregistro.lugarp=registrobody.lugarp;
        nuevoregistro.acopio=registrobody.acopio;
        nuevoregistro.pallet=registrobody.pallet;
        nuevoregistro.formato=registrobody.formato;
        nuevoregistro.peso=registrobody.peso;
        nuevoregistro.tratamiento=registrobody.tratamiento;
        nuevoregistro.modulo=registrobody.modulo;
        nuevoregistro.variedad=registrobody.variedad;
        nuevoregistro.cantidad=registrobody.cantidad;
        nuevoregistro.pesototal=registrobody.pesototal;
        nuevoregistro.fecharegistro=fecha ;
        nuevoregistro.fechaguia="";
        nuevoregistro.guia="";
        console.log(nuevoregistro);
        if (nuevoregistro.placa &&
            nuevoregistro.usuario &&
            nuevoregistro.acopio &&
            nuevoregistro.pallet &&
            nuevoregistro.formato &&
            nuevoregistro.peso &&
            nuevoregistro.tratamiento &&
            nuevoregistro.modulo &&
            nuevoregistro.variedad &&
            nuevoregistro.cantidad &&
            nuevoregistro.pesototal &&
            nuevoregistro.fecharegistro) {
            nuevoregistro.save((err, item) => {
                if (err) return res.status(500).send({
                    status: "W",
                    response: "Error en la consulta"
                });
                if (!item) return res.status(200).send({
                    status: "W",
                    response: "No se guardó registro"
                });
                return res.status(200).send({
                    status: "S",
                    response: item
                });
            })
        } else {
            return res.status(200).send({
                status: "W",
                response: "input no válido"
            });
        }
    },
    consultarregistro: function (req, res) {
        const usuarioid = req.params.usuarioid;
        const placaid = req.params.placaid;
        registro.find({usuario:usuarioid,placa:placaid,guia:""}).exec((err, item) => {
            if (err) return res.status(500).send({
                status: "W",
                response: "Error en la consulta"
            });
            if (item.length == 0) return res.status(200).send({
                status: "W",
                response: "No se encontró registros"
            });
            return res.status(200).send({
                status: "S",
                response: item
            });
        })
    },
    listarregistro:function(req,res){
        const fecha = req.params.fechaid;//AAAA-MM-DD
        registro.find({guia:"",fecharegistro:fecha}).exec((err, item) => {
            if (err) return res.status(500).send({
                status: "W",
                response: "Error en la consulta"
            });
            if (item.length == 0) return res.status(200).send({
                status: "W",
                response: "No se encontró registros"
            });
            return res.status(200).send({
                status: "S",
                response: item
            });
        })
    },
    generarguia: function(req,res){
        const placaid = req.params.placaid;
        const presintoid = req.params.presintoid;
        const fechahora = moment().tz("America/Bogota").format("YYYY-MM-DD HH:mm:ss");
        let fecha = moment().tz("America/Bogota").format("YYYY-MM-DD");
        console.log(fechahora);
        const guiaid = 'G-' + presintoid + '-' + fechahora;
        if(!placaid) return res.status(200).send({type:"W",message:"la placa no puede estar vacía"});
        registro.find({placa:placaid,guia:""}).exec((err,items)=>{
            if(err) return res.status(500).send({type:"W",response:err});
            if(items.length == 0) return res.status(200).send({type:"W",response:"sin registros para generar guía para la placa"});
            registro.update({placa:placaid,guia:""},{$set:{guia:guiaid,fechaguia:fecha}},(error,filas)=>{
                let mensaje = ''; 
                if(error) return res.status(500).send({type:"W",response:error});
                if(filas.length == 0) return res.status(200).send({type:"W",response:"no se creó guía"});
                mensaje = 'Guía ' + guiaid + ' generada';
                return res.status(200).send({type:"S",message:mensaje});
            })
        });
    },
    listarregistroguia: function(req,res){
        const fecha = req.params.fechaid;
        console.log(fecha);
        registro.find({fechaguia:fecha,guia:{$ne:""}}).exec((err, item) => {
            if (err) return res.status(500).send({
                status: "W",
                response: "Error en la consulta"
            });
            if (item.length == 0) return res.status(200).send({
                status: "W",
                response: "No se encontró registros"
            });
            return res.status(200).send({
                status: "S",
                response: item
            });
        })
    },
    listarregistro2: function(req,res){
        const fecha = req.params.fechaid;
        registro.aggregate([
            {
                $match:{fecharegistro:fecha, guia:''}
            }
            ,
            {
                $group:{_id:"$placa",peso:{$sum:"$pesototal"}}
            }
        ]).exec((err,item)=>{
            if (err) return res.status(500).send({
                status: "W",
                response: "Error en la consulta",
                rr:err
            });
            if (item.length == 0) return res.status(200).send({
                status: "W",
                response: "No se encontró registros"
            });
            return res.status(200).send({
                status: "S",
                response: item
            });
        })
    },
    listarregistroplaca: function(req,res){
        const placa = req.params.placaid;
        registro.find({guia:"",placa:placa}).exec((err, item) => {
            if (err) return res.status(500).send({
                status: "W",
                response: "Error en la consulta"
            });
            if (item.length == 0) return res.status(200).send({
                status: "W",
                response: "No se encontró registros"
            });
            return res.status(200).send({
                status: "S",
                response: item
            });
        })
    },
    listarguias: function(req,res){
        const fecha = req.params.fechaid;
        registro.aggregate([
            {
                $match:{fecharegistro:fecha, guia:{$ne:""}}
            }
            ,
            {
                $group:{_id:"$placa",peso:{$sum:"$pesototal"}}
            }
        ]).exec((err,item)=>{
            if (err) return res.status(500).send({
                status: "W",
                response: "Error en la consulta",
                rr:err
            });
            if (item.length == 0) return res.status(200).send({
                status: "W",
                response: "No se encontró registros"
            });
            return res.status(200).send({
                status: "S",
                response: item
            });
        })
    }
}

module.exports = usuarioController; 