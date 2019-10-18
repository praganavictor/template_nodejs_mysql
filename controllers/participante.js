const { Participante } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const participantes = await Participante.findAll({});
      return res.status(200).json({ participantes });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  async show(req, res) {
    try {
      const participante = await Participante.findOne({ where: { id: req.params.id } });

      if (participante) {
        return res.status(200).json({ participante });
      }
      return res.status(404).send("Participante não encontrado");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  async store(req, res) {
    try {
      const participante = await Participante.create(req.body);

      return res.status(201).json({ participante });
    } catch (error) {
      return res.status(409).send({ error: "Participante já cadastrado" });
    }
  },

  async update(req, res) {
    try {
      const [participante] = await Participante.update(req.body, {
        where: { id: req.params.id }
      });
      if (participante) {
        const participanteAtt = await Participante.findOne({ where: { id: req.params.id } });
        return res.status(200).json({ post: participanteAtt });
      }
      throw new Error("Erro ao atualizar participante");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  async destroy(req, res) {
    try {
      const deleted = await Participante.destroy({
        where: { id: req.params.id }
      });
      if (deleted) {
        return res.status(204).send("Removido com sucesso");
      }

      throw new Error("Erro ao deletar participante");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
};
