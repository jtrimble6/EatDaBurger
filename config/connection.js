var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "burgers_db"
  });
  
  // connect to the mysql server and sql database
  connection.connect(function(err) {
    if (err) {
        console.log("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId);
    
  });

  module.exports = connection;