// To check whether user exist or not

var query = require('../db/query');

var user = {
	checkUser: function(email, password,cb) {;
    query.fetchPassword(email,function(err,passwordFetched){
        if(err) {
          //alert('wrong email id');
          console.log("err found!");
          cb(err,null);  
        }

      	else{
          if(password==passwordFetched)
    	       cb(null,true)
          else
    	       cb(null,false)
          }

  	});
        
	}
};
module.exports = user;