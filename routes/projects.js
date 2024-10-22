const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const Project = require('../models/Project');

const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// Create a project
router.post('/', authMiddleware, async (req, res) => {
  const { title, description, link } = req.body;
  const project = await Project.create({ title, description, link });
  res.status(201).json(project);
});

module.exports = router;
