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
router.post('/',  async (req, res) => {
  const { title, des, img, liveLink, githubLink} = req.body;
  const project = await Project.create({ title, des, img, liveLink, githubLink });
  res.status(201).json(project);
});
// delete a project
router.delete('/',  async (req, res) => {
  const { _id } = req.body;
  const result = await Project.findByIdAndDelete(_id);
  console.log({result})
  res.status(201).json(result);
});

module.exports = router;
