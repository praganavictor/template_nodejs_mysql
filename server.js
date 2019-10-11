require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const port = process.env.PORT || 5000;

const app = express();

var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), { flags: "a" });

app.use(morgan("combined", { stream: accessLogStream }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => console.log(`Escutando a porta ${port}`));
