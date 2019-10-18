"use strict";

const path = require("path");
const Multer = require("multer"),
  padrao = Multer({
    storage: Multer.diskStorage({
      destination: path.resolve(__dirname, "..", "tmp"),
      filename: function(req, file, cb) {
        cb(null, file.originalname);
      }
    })
  });

module.exports = {
  padrao
};
