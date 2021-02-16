const express = require("express");
const router = express.Router();

// Import the model burger.js to its object methods to interact with the database
const burger = require('../models/burger.js');


router.get('/', function(req, res) {
    res.json({"message": "Streaming Turtles"});
    res.render('index');
});






// Build out the routes



module.exports = router;









