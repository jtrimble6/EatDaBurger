var connection = require('./connection.js');

function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
  

var orm = {

    selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);

        });
    },

    insertOne: function(burger_name, devoured) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) ";

            queryString += "VALUES (";
            queryString += "'"
            queryString += burger_name;
            queryString += "'"
            queryString += ", ";
            queryString += devoured.toString();
            queryString += ") ";

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    moveOne: function(table, objColVals, condition, cb) {
        
        var queryString = 'UPDATE ' + table;
            queryString += ' SET ';
            queryString += objToSql(objColVals);
            queryString += ' WHERE ';
            queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
            console.log(result);
            
        });
    },

}

module.exports = orm;