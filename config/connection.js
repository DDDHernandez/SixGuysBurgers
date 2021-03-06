//Require MYSQL
var mysql = require("mysql");
var connection;
//Require dotenv for our password
require("dotenv").config();

  
  //Create connection to database
  if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: process.env.MYSQL_PASSWORD,
      database: 'burgers_db'
    })
  }

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//Export the connection
module.exports = connection;
