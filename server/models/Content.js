// Imports required Mongoose Module
const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
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

Content.find({})
  .exec()
  .then((library) => {
    if (library.length === 0) {
      Content.insertMany([
        {
          id: "1",
          title: "Content 1: MongoDB",
          author: "Abe Abel",
          descr: "Description 1: MongoDB",
          genre: "Miscellaneous",
          copiesHeld: 1,
          copiesAvail: 1,
          status: "Pending",
          allowComment: true,
        },
        {
          id: "2",
          title: "Content 2: MongoDB",
          author: "Bob Bobble",
          descr: "Description 2: MongoDB",
          genre: "Miscellaneous",
          copiesHeld: 2,
          copiesAvail: 2,
          status: "Pending",
          allowComment: true,
        },
        {
          id: "3",
          title: "Content 3: MongoDB",
          author: "Carl Carlson",
          descr: "Description 3: MongoDB",
          genre: "Miscellaneous",
          copiesHeld: 3,
          copiesAvail: 3,
          status: "Pending",
          allowComment: false,
        },
        {
          id: "4",
          title: "Content 4: MongoDB",
          author: "David Davidson",
          descr: "Description 4: MongoDB",
          genre: "Miscellaneous",
          copiesHeld: 4,
          copiesAvail: 4,
          status: "Approved",
          allowComment: false,
        },
        {
          id: "5",
          title: "Content 5: MongoDB",
          author: "Erik Elphiba",
          descr: "Description 5: MongoDB",
          genre: "Miscellaneous",
          copiesHeld: 5,
          copiesAvail: 5,
          status: "Approved",
          allowComment: false,
        },
      ]);
    }
  });

module.exports = Content;
