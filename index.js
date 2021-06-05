require('dotenv').config()

const express = require("express");
const server = express();
const { PORT = 4000 } = process.env;

const apiRouter = require("./apiRouter.js");
const client = require('./db/client.js');

server.use(express.json());

server.use(express.static("public"));

server.use("/api", apiRouter);

client.connect();

server.listen(PORT, () => {
  console.log("server listening on port", PORT);
});
