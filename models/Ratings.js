var mongoose = require('mongoose');

var RatingSchema = new mongoose.Schema({
  name: String,
  category: String,
  rating: String,
  comments: String
  //comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

mongoose.model('Rating', RatingSchema);