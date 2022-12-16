const express = require('express')

const router = express.Router();

const AmazonReviews = require('../Database/AmazonReviews')

/**
 * API: Get all the data
 * Method: GET
 * path: /reviews
 */
router.get('/', async (req, res) => {
  const { pageSize, current, productCategory, averageReviewScore } = req.query;
  console.log(pageSize + ' ' + current + ' ' + productCategory);
  const currentScore = averageReviewScore == 'undefined' ? 0 : averageReviewScore;

  try {
    console.log('Requesting to /reviews GET: get all data from db')
    var datas;
    var count;
    if (productCategory !== 'undefined') {
      console.log('product')
      datas = await AmazonReviews.find({ productCategory: productCategory }).limit(pageSize).skip((current - 1) * pageSize).exec();
      count = await AmazonReviews.count({ productCategory: productCategory });
    } else {
      datas = await AmazonReviews.find().where('averageReviewScore').gte(currentScore).lte(5).limit(pageSize).skip((current - 1) * pageSize);
      count = await AmazonReviews.countDocuments()
    }
    res.status(200).json({
      datas,
      total: Math.ceil(count / pageSize)
    });
  } catch (err) {
    res.status(404).json({ message: err });
  }
})

/**
 * API: find data by product ID
 * Method: GET
 * path: /reviews/{productID}
 */
router.get('/:productId', async (req, res) => {
  console.log(`Requesting to /reviews/${req.params.productId} GET: find data by product ID`)
  const data = await AmazonReviews.findOne({productId: req.params.productId});
  res.json(data);

})


/**
 * API: Add new data
 * Method: POST
 * path: /reviews
 */
router.post('/', (req, res) => {
  console.log('Requesting to /reviews POST: Add new data to the db')

  const data = new AmazonReviews({
    productTitle: req.body.productTitle,
    productId: req.body.productId,
    productCategory: req.body.productCategory,
    averageReviewScore: req.body.averageReviewScore
  });

  data.save()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json({ message: err })
    })
})

module.exports = router;