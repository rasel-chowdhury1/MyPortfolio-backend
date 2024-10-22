const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const Blog = require('../models/Blog');

const router = express.Router();

// Get all blogs
router.get('/', async (req, res) => {
  const blogs = await Blog.find().populate('author', 'username');
  res.json(blogs);
});

// Create a blog
router.post('/', authMiddleware, async (req, res) => {
  const { title, content } = req.body;
  const blog = await Blog.create({ title, content, author: req.user._id });
  res.status(201).json(blog);
});

module.exports = router;
