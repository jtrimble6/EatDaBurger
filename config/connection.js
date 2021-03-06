var mysql = require('mysql');
var connection;
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "root",
//     database: "burgers_db"
//   });

  if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'burgers_db'
    });
  };

  
  // connect to the mysql server and sql database
  connection.connect(function(err) {
    if (err) {
        console.log("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId);
    
  });

  module.exports = connection;