

var conf = require('./connection');

var query={

fetchPassword : function(email,cb)
{
// query to fetch password of user
var q = 'SELECT password from users where email = ?';
console.log('query==',q);

conf.query(q,[email], function(err, rows) {
	if(rows.length==0){
		console.log('The solution is: '+' email does not exist');
		cb(null,'email does not exist'); 
	}
  else if (!err && rows[0].password) {
    console.log('The solution is: ', rows);
    cb(null,rows[0].password); }
  else  {
    console.log('Error while performing Query.');
     cb(err,null); 
      }
    
});
}


};

module.exports = query;


