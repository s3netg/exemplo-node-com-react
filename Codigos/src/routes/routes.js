
const express = require('express');
const routes = express.Router();

const usuarioController = require('../controllers/UsuarioController');



routes.get('/usuarios', usuarioController.get_all);

routes.get('/usuarios/:id', usuarioController.get_By_Id);

routes.post('/usuarios', usuarioController.insert);

routes.put('/usuarios/:id', usuarioController.atualiza);

routes.delete('/usuarios/:id', usuarioController.apagar);

module.exports = routes;