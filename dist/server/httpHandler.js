exports.main = function (req, res) {
    var path = req.url;
    res.write("Hello World, you requested " + path);
    res.end();
    next();
};
//# sourceMappingURL=httpHandler.js.map