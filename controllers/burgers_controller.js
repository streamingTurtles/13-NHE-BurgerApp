const express = require("express");
const router = express.Router();

// Import the model burger.js to its object methods to interact with the database
const burger = require('../models/burger.js');

// Testing code to the front End - working!
// router.get('/', function(req, res) {
//     res.json({"message": "Streaming Turtles"});
//     res.render('index');
// });

// Build out the routes

router.get('/', (req, res) => {
    burger.selectAll((data) => {
      const hbsObject = {
        cats: data,
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });





module.exports = router;









