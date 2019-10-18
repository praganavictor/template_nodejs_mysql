const express = require("express");

const usuarioController = require("./controllers/usuario");

const routes = express.Router();

routes.post("/entrar", usuarioController.entrar);
routes.post("/registrar", usuarioController.registrar);

module.exports = routes;
