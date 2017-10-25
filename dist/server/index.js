var express = require("express");
var handler = require("./httpHandler.js");
var server = express();
server.use("/client", express.static("./site-load"));
server.use("/old", handler.main);
server.listen(3000);
console.log("http://localhost:3000");
//# sourceMappingURL=index.js.map