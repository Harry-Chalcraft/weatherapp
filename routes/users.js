var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var UserModel = require('../models/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/sign-in', function(req, res, next) {
  UserModel.findOne({ email: req.body.email, password: req.body.password }, function (err, user) {
    if(user){
      req.session.user = user;
      res.redirect('/cities');
    } else {
      res.redirect('/')
    }
  })
});

router.post('/sign-up', function(req, res, next) {
  var newUser = new UserModel ({
    username : req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  newUser.save(function (error, user) {
    console.log(error)
    req.session.user = user;
    res.redirect('/cities');
  });
});

router.get('/logout', function(req, res, next) {
  req.session.user = null;
  res.redirect('/');
});

module.exports = router;
