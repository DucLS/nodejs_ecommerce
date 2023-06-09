const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

app.get("/", (req, res) => {
  res.json({
    msg: "Hello world",
  });
});

module.exports = app;
