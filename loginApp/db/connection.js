'use strict';

var mysql      = require('mysql');
// Credentials of databse
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'paytm@197',
  database : 'users'
});


// Connection to database
conn.connect(function(err){
if(!err) {
    console.log("Database is connected ... \n\n");  
} else {
    console.log("Error connecting database ... \n\n");  
}
});




module.exports = conn;