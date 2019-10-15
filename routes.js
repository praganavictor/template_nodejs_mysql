const express = require("express");

const usuarioController = require("./controllers/usuario");

const routes = express.Router();

routes.post("/login", usuarioController.login);
routes.post("/registrar", usuarioController.registrar);

module.exports = routes;
