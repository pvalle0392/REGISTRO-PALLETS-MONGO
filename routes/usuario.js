const usuarioControllers = require('../controllers/usuario');

const express = require('express');
const usuarioController = require('../controllers/usuario');

const router = express.Router();

//usuario
router.post('/agregarusuario', usuarioControllers.agregarusuario);
router.get('/consultarusuario/:id', usuarioControllers.consultarusuario);
//acopio
router.post('/agregaracopio', usuarioControllers.agregaracopio);
router.get('/consultaracopio', usuarioControllers.consultaracopio)
//lugar de proceso
router.post('/agregarlugarproceso', usuarioControllers.agregarlugarproceso);
router.get('/consultarlugarproceso', usuarioControllers.consultarlugarproceso);
//formato
router.post('/agregarformato', usuarioControllers.agregarformato);
router.get('/consultarformato', usuarioControllers.consultarformato);
//modulo
router.post('/agregarmodulo', usuarioControllers.agregarmodulo);
router.get('/consultarmodulo', usuarioControllers.consultarmodulo);
//variedad
router.post('/agregarvariedad', usuarioControllers.agregarvariedad);
router.get('/consultarvariedad', usuarioControllers.consultarvariedad);
//tratamiento
router.post('/agregartratamiento', usuarioControllers.agregartratamiento);
router.get('/consultartratamiento', usuarioControllers.consultartratamiento);
module.exports = router;