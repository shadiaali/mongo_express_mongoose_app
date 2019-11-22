var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Artist = require('../models/Artist.js');

/* GET home page. */
router.get('/', function(req, res, next) {
//query the artists collection in the db
//in mysql: SELECT * FROM artists basically
//in laravel: $results = Artist::all();
Artist.find(function(err, artists){
//if there's an error give it to us
if(err) return next(err); 
//render out the arrays to check if db is connected
//res.json(artists); 


  //render always goes at the bottom
res.render('index', { title: 'Main Artist List', artists:artists});
}); //end of find query
}); //end of route

//in laravel, you would use {id}
router.get('/artists/:id', function (req, res, next) {
  
  Artist.findOne({'_id':req.params.id}, function (err, artist) {
    //if there's an error give it to us
    if (err) return next(err);
//res.json(artist);
    res.render('details', {
      title: 'Artist Details',
      artist: artist
    });

  }); //end of find query
}); //end of route



module.exports = router;
