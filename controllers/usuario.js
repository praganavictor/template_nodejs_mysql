const bcrypt = require("bcryptjs");

const { Usuario } = require("../models");

module.exports = {
  async login(req, res) {
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
      return res.status(400).send({ error: "Falha ao realizar o login " + err });
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
  }
};
