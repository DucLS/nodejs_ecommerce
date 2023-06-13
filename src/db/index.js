"use strict";

const mongoose = require("mongoose");

class Database {
  constructor() {}

  connect(type = "mongodb") {
    mongoose
      .connect("mongodb://mongo:27017", {
        dbName: process.env.MONGO_DB,
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASSWORD,
      })
      .then((_) => console.log("Connect success"))
      .catch(console.error);
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const db = Database.getInstance();

module.exports = db;
