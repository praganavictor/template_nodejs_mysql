const express = require("express");

const usuarioController = require("./controllers/usuario");
const participanteController = require("./controllers/participante");

const upload = require("./config/upload");

const routes = express.Router();

routes.post("/entrar", usuarioController.entrar);
routes.post("/registrar", usuarioController.registrar);
routes.post("/uploadpadrao", upload.padrao.single("file"), usuarioController.uploadpadrao);

routes.get("/participante", participanteController.index);
routes.get("/participante/:id", participanteController.show);
routes.post("/participante", participanteController.store);
routes.put("/participante/:id", participanteController.update);
routes.delete("/participante/:id", participanteController.destroy);

module.exports = routes;
