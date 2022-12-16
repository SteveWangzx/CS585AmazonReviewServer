const mongoose = require('mongoose');

const AmazonReviewsSchema = mongoose.Schema({
  productTitle: String,
  productId: {
    type: String,
    required: true
  },
  productCategory: String,
  averageReviewScore: Number,
  helpfulVotes: Number
})

module.exports = mongoose.model('AmazonReviews', AmazonReviewsSchema);