'use strict';
var express = require('express');
var router = express.Router();

var querydb = require('../db/query');
var user=require('../model/user')
var nodemail=require('../model/nodemail')
var sess;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome user' });
});

router.post('/home',function(req,res){
    	
    if (!req.body.email || !req.body.password) 
      res.render('error',{message:'Username/password field cannot be left empty'});
    else {
    	user.checkUser(req.body.email, req.body.password,function(err, ok){
    	if(err)
    			res.render('error',{message:'Error in validating user:'+err})
    	else if(!ok)
    		res.render('error',{message:'Invalid username/password'});
    	else {
        sess=req.session;
        sess.email=req.body.email;
        console.log("session email id:"+sess.email)
    	 res.render('welcome',{message:'Welcome '+req.body.email})
      }
    });
  }
});

router.get('/logout',function(req,res){
  req.session.destroy(function(err){
    if(err){
      console.log(err);
    }
    else
      res.redirect('/');
  });

});

router.post('/forgot',function(req, res, next) {
  res.render('forgot');
});

router.get('/nodemail',nodemail.sendmail);

module.exports = router;
