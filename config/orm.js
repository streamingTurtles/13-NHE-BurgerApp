// Import the mySQL connection to the db so that the ORM can manipulate data in the
// database using an object-oriented paradigm 
const connection = require('./connection.js');

// build out database query functionality in javascript so that now when you want to work on 
// some data from the db, you can just call a function that will mimic SQL db commands.
// i.e. - you don't have to write out SQL commands now.





// Exporting the ORM object to use in the model file: burgerController.js
// Note: in burgerController.js - is where we use express to navigate our routing
modules.export = orm;

