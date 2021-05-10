const express = require("express");
const server = express();
const { PORT = 3000 } = process.env;

const apiRouter = require("./apiRouter.js");

server.use(express.static("public"));

server.use("/api", apiRouter);

server.listen(PORT, () => {
  console.log("server listening on port", PORT);
});
