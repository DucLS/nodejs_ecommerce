"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");

const countConnect = () => {
  const numConnection = mongoose.connections.length;

  console.log("Number of connections: ", numConnection);
};

const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    const maxConnection = numCores * 5;

    console.log("Memory usage:", memoryUsage / 1024 / 1024);

    if (numConnection > maxConnection) {
      console.log("Connection overload!");
    }
  }, 5000);
};

module.exports = {
  countConnect,
  checkOverload,
};
