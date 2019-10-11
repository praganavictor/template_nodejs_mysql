"use strict";
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      nomedeusuario: DataTypes.STRING,
      senha: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {}
  );
  Usuario.associate = function(models) {
    // associations can be defined here
  };
  return Usuario;
};
