const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

const MongoURI = process.env.MONGODB_URI;

main().catch((err) => console.log(err));

async function main() {
  mongoose.connect(MongoURI);
}

app.get("/", (_req, res) => {
  res.send("hello");
});

module.exports = app;
