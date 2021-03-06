const bcrypt = require("bcryptjs");
const path = require("path");
const fs = require("fs");

const { Usuario } = require("../models");

module.exports = {
  async entrar(req, res) {
    const { nomedeusuario, senha } = req.body;

    if (!nomedeusuario || !senha) {
      return res.status(400).send("Preencha o nome de usuario e a senha");
    }

    try {
      const usuario = await Usuario.findOne({ where: { nomedeusuario } });

      if (!(await bcrypt.compare(senha, usuario.senha)))
        return res.status(400).send({ error: "Verifique o nome de usuario e a senha." });

      return res.status(200).json({ usuario });
    } catch (err) {
      return res.status(400).send({ error: "Falha ao realizar ao entrar " + err });
    }
  },

  async registrar(req, res) {
    const { nomedeusuario, senha } = req.body;

    const hash = bcrypt.hashSync(senha, 10);

    try {
      let usuario = await Usuario.findOne({ where: { nomedeusuario } });

      if (!usuario) {
        usuario = await Usuario.create(Object.assign(req.body, { senha: hash }));
      }

      return res.status(200).json({ usuario });
    } catch (err) {
      return res.status(400).send({ error: "Falha no registro, " + err });
    }
  },

  async uploadpadrao(req, res) {
    try {
      const file = fs.readFileSync(
        path.resolve(__dirname, "..", "tmp", `${req.file.originalname}`)
      );

      return res.status(200).json({ file });
    } catch (err) {
      return res.status(400).send({ error: "Falha no upload , " + err });
    }
  }
};
