var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Rating = mongoose.model('Rating');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


//HTTP CALLS:
//Add new rating
router.post('/ratings', function(req, res, next) {
  var rating = new Rating(req.body);

  rating.save(function(err, rating){
    if(err){ return next(err); }

    return res.json(rating);
  });
});


//Load all ratings for a product name
router.get('/ratings/:name', function(req, res) {
  return res.json(req.result);
});

router.param('name', function(req, res, next, name) {
    var query = Rating.find({'name': name});

    query.exec(function (err, result){
      if (err) { return next(err); }
      if (!result) { return next(new Error("can't find post")); }

      req.result = result;
      return next();
    });
});






