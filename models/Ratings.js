var mongoose = require('mongoose');

var RatingSchema = new mongoose.Schema({
  name: String,
  category: String,
  rating: String,
  comments: String
  //comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

RatingSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};

mongoose.model('Rating', RatingSchema);