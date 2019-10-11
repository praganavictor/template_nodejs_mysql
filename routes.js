const express = require("express");

const usuarioController = require("./controllers/usuario");

const routes = express.Router();

routes.post("/login", usuarioController.login);
routes.post("/register", usuarioController.register);

module.exports = routes;
