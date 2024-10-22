const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const Review = require('../models/Review');

const router = express.Router();

// Get all reviews
router.get('/', async (req, res) => {
  const reviews = await Review.find().populate('author', 'username');
  res.json(reviews);
});

// Create a review
router.post('/', authMiddleware, async (req, res) => {
  const { rating, comment } = req.body;
  const review = await Review.create({ rating, comment, author: req.user._id });
  res.status(201).json(review);
});

module.exports = router;
