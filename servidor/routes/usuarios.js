//Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

//Crea usuario
//api/usuairos<--- recibe request tipo post
router.post('/',
    usuarioController.crearUsuario

);

module.exports = router;