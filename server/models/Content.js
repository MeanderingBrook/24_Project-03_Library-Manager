// Imports required Mongoose Module
const mongoose = require("mongoose");

// Defines MongoDB Schema for Content
const contentSchema = new mongoose.Schema({
  contentType: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  descr: { type: String, required: true },
  genre: { type: String, required: true },
  copiesHeld: { type: Number, required: true },
  copiesAvail: { type: Number, required: false },
  status: { type: String, required: true, default: "Pending" },
  // allowComment: { type: Boolean, default: true },
  dateCreated: { type: Date, default: Date.now },
});

const Content = mongoose.model("Content", contentSchema);

const handleError = (err) => console.error(err);

module.exports = Content;
