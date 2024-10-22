const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  des: { type: String, required: true },
  img: { type: String, required: true },
  liveLink: { type: String, required: true },
  githubLink: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
