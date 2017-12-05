const express = require("express");
const handler = require("./httpHandler.js");
const workoutController = require("./workoutController");
const bodyParser = require("body-parser");

const port = 8081;
const server = express();

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
server.use("/client", express.static("./site-load"));
server.use("/old", handler.main);
server.use("/workout", workoutController.router);

//console.log(process.env);
server.listen(port);

console.log(`http://localhost:${port}`);