var express = require('express');
var router = express.Router();
var shortt = require('./users');
var mongoose = require('mongoose');

router.get('/', function(req, res, next) {
  shortt.find()
  .then(function(shortUrls){
    res.render('index', {shortUrls})
  })
});

router.get('/:shortUrl', function(req, res){
  shortt.findOne({short  : req.params.shortUrl})
  .then(function(save){
    res.redirect(save.full)})
  })


router.post('/short', function(req, res){
  shortt.create({
    full : req.body.fullurl
  })
  .then(function(s){
    res.redirect('/');
  })
})

module.exports = router;
