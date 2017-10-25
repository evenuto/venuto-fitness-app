const express = require("express");
const handler = require("./httpHandler.js");
const workoutController = require("./workoutController");

const server = express();

server.use("/client", express.static("./site-load"));
server.use("/old", handler.main);
server.use("/workout", workoutController.router);

server.listen(3000);

console.log("http://localhost:3000");