const express = require("express");
const workout = require("./workoutObject");

const router = express.Router();

router
    .get("/choices", (req, res) => res.send(session.choices))

module.exports.router = router;