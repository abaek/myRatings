var mongoose = require('mongoose');

var RatingSchema = new mongoose.Schema({
  title: String,
  category: String,
  comment: String,
  upvotes: {type: Number, default: 0},
  //comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

RatingSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};

mongoose.model('Rating', RatingSchema);