'use strict';
module.exports = (sequelize, DataTypes) => {
  const Participante = sequelize.define('Participante', {
    nomeCompleto: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    rfid: DataTypes.STRING
  }, {});
  Participante.associate = function(models) {
    // associations can be defined here
  };
  return Participante;
};