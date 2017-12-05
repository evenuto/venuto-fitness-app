const express = require("express");
const workout = require("./workoutObject");

const router = express.Router();

router
    .get("/choices", (req, res) => res.send(workout.choices))
    //workout.choices gets the array from workoutObject

module.exports.router = router;
