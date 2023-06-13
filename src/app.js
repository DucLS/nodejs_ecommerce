const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
const db = require("./db/index");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

db.connect();

app.get("/", (_, res) => {
  res.json({
    msg: "Hello world",
  });
});

module.exports = app;
