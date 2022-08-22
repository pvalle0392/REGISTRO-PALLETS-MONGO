const usuario = require('../models/usuario');
const acopio = require('../models/acopio');
const lugarproceso = require('../models/lugarproceso');
const formato = require('../models/formato');
const modulo = require('../models/modulo');
const variedad = require('../models/variedad');
const tratamiento = require('../models/tratamiento');
const { connectDB } = require('../database');

connectDB();


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
    consultaracopio: function (req, res) {
        acopio.find().exec((err, item) => {
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
    consultarlugarproceso: function (req, res) {
        lugarproceso.find().exec((err, item) => {
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
    consultarformato: function (req, res) {
        formato.find().exec((err, item) => {
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
    consultarmodulo: function (req, res) {
        modulo.find().exec((err, item) => {
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
    consultarvariedad: function (req, res) {
        variedad.find().exec((err, item) => {
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
    //tratamiento
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
    consultartratamiento: function (req, res) {
        tratamiento.find().exec((err, item) => {
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
    }
}

module.exports = usuarioController;