// Import the mySQL connection to the db so that the ORM can manipulate data in the
// database using an object-oriented paradigm 
const connection = require('./connection.js');

// build out the object represenation database query functionality in javascript 
// so that now when you want to work on 
// some data from the db, you can just call a function that will mimic SQL db commands.
// i.e. - you don't have to write out SQL commands now.


// Object for all our SQL statement functions.
const orm = {
    // javascript get everything from a table, put in result
    all(tableInput, cb) {
      const queryString = `SELECT * FROM ${tableInput};`;
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    // javascript mimic to create a table and input some data
    create(table, cols, vals, cb) {
      let queryString = `INSERT INTO ${table}`;
  
      queryString += ' (';
      queryString += cols.toString();
      queryString += ') ';
      queryString += 'VALUES (';
      queryString += printQuestionMarks(vals.length);
      queryString += ') ';
  
      console.log(queryString);
  
      connection.query(queryString, vals, (err, result) => {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    // js mimic of updating a table in the db
    // An example of objColVals would be {name: quarterPounder, devoured: true}
    update(table, objColVals, condition, cb) {
      let queryString = `UPDATE ${table}`;
  
      queryString += ' SET ';
      queryString += objToSql(objColVals);
      queryString += ' WHERE ';
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    // js mimic of a sql query to delete an item from a table
    delete(table, condition, cb) {
      let queryString = `DELETE FROM ${table}`;
      queryString += ' WHERE ';
      queryString += condition;
  
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
};




// Exporting the ORM object to use in the model file: burgerController.js
// Note: in burgerController.js - is where we use express to navigate our routing
module.exports = orm;

