var express = require('express');
var router = express.Router();
var request= require('request');
var mongoose = require('mongoose');
var CityModel = require('../models/cities');

var cityList=[];

/* GET home page wich is the login page */
router.get('/', function(req, res, next) {
  req.session.user = null;
  res.render('login');
});

router.get('/cities', function(req, res, next) {
  if (!req.session.user) {
    res.redirect('/');
  } else {
    CityModel.find(function (err, cities) {
      res.render('index', {cityList: cities, user: req.session.user});
    });
  }
});

router.post('/add-city', function(req, res, next){
  //We send a request to the API with the name of the city from the frontend and then save the response in our database
  request('http://api.openweathermap.org/data/2.5/weather?q='+req.body.name+'&appid=fc07f13e149c30c7f3bc9c87c606a95f&units=metric&lang=fr', function(error, response, body) {
    body = JSON.parse(body);
    if(body.cod!='404'){
      var newCity = new CityModel ({
        name : body.name,
        desc: body.weather[0].description,
        img: 'http://openweathermap.org/img/w/'+body.weather[0].icon+'.png',
        temp_min: Math.round(body.main.temp_min),
        temp_max: Math.round(body.main.temp_max),
        longitude: body.coord.lon,
        latitude: body.coord.lat
      });

      newCity.save(function (error, user) {
        console.log(error)
        CityModel.find(function (err, cities) {
          res.render('index', {cityList: cities, user: req.session.user});
        })
      });
    } else {
      CityModel.find(function (err, cities) {
        res.render('index', {cityList: cities, user: req.session.user});
      });    }
  });
});

router.get('/delete-city', function(req, res, next){
  CityModel.deleteOne({ _id: req.query.id},function(error) {
    console.log(error);
    CityModel.find(function (err, cities) {
      res.render('index', {cityList: cities, user: req.session.user});
    })
  });
});

module.exports = router;
