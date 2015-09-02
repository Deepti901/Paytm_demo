//To send mail to user in case of forgot password
'use strict';
var nodemailer = require("nodemailer");
var querydb = require('../db/query');
var smtpTransport = nodemailer.createTransport("SMTP",{
  service: "Gmail",
  auth: {
      user: "deepti.aggarwal@paytm.com",
      pass: "deepti@901"
        }
});
var rand,mailOptions,host,link,userInfo;
var mailer ={
  sendmail : function(req,res){
  host=req.get('host');
  querydb.fetchPassword(req.query.to,function(err,passwordFetched){
      if(err) {
        console.log("err found!");
        res.render('error',{message:'Invalid username'});  
      }
      else{
  var mailOptions={
    from : "deepti.aggarwal@paytm.com",
    to : req.query.to,
    subject : "Password Retrieval",
    text : "",
    html: "Hello,<br> Your Password is:"+passwordFetched
  };

  console.log(mailOptions);

  smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
      console.log(error);
      res.end("error");
    } else{
      console.log("Message sent: " + response.message);
      //res.render('newPassword')
      res.end("sent");
    }
   });
  }
});
},
};



module.exports=mailer;
