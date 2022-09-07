const usuarioControllers = require('../controllers/usuario');

const express = require('express');
const usuarioController = require('../controllers/usuario');
const { route } = require('../app');

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
//registro
router.post('/agregarregistro', usuarioControllers.agregarregistro);
router.get('/consultarregistro/:usuarioid/:placaid', usuarioControllers.consultarregistro);
router.get('/listarregistro/:fechaid', usuarioControllers.listarregistro);
//guia
router.get('/generarguia/:placaid/:presintoid', usuarioControllers.generarguia);
router.get('/listarregistroguia/:guiaid', usuarioControllers.listarregistroguia);
//Pruebas
router.get('/listarregistro2/:fechaid', usuarioController.listarregistro2);
router.get('/listarregistroplaca/:placaid', usuarioController.listarregistroplaca);
router.get('/listarguias/:fechaid', usuarioController.listarguias);
module.exports = router; 