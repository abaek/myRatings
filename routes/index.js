var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');
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



router.post('/posts', function(req, res, next) {
  var post = new Post(req.body);

  post.save(function(err, post){
    if(err){ return next(err); }

    res.json(post);
  });
});

router.get('/posts/:post', function(req, res) {
  res.json(req.post);
});

router.param('post', function(req, res, next, id) {
  var query = Post.findById(id);

  query.exec(function (err, post){
    if (err) { return next(err); }
    if (!post) { return next(new Error("can't find post")); }

    req.post = post;
    return next();
  });
});

router.put('/posts/:post/upvote', function(req, res, next) {
  req.post.upvote(function(err, post){
    if (err) { return next(err); }

    res.json(post);
  });
});






