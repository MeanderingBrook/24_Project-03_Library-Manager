// Imports required Node.js Modules
const { signToken, AuthenticationError } = require("../utils/authorize");

// Imports required App Modules
const { Content, User } = require("../models");

const resolvers = {
  Query: {
    getAllContent: async () => {
      // Request to MongoDB, returning Data to React
      let data = await Content.find({});
      // console.log("resolvers.js Line 8", typeof data);
      return data;
    },

    getSingle: async (parent, { contentId }, context) => {
      let data = await Content.findById(contentId);
      return data;
    },

    getAvailable: async (parent, { status }, context) => {
      let data = await Content.find({ status: "Available" });
      // console.log("resolvers.js Line 20, getAvailable invoked");
      // console.log("resolvers.js Line 21", typeof data);
      return data;
    },

    getByStatus: async (parent, { contentStatus }, context) => {
      let data = await Content.find({ status: contentStatus });
      // console.log("resolvers.js Line 27", data);
      // console.log("resolvers.js Line 29", contentStatus);
      return data;
    },

    getByGenre: async (parent, { contentGenre }, context) => {
      let data = await Content.find({ genre: contentGenre });
      // console.log("resolvers.js Line 47", data);
      // console.log("resolvers.js Line 48", contentGenre);
      return data;
    },

    getByTitle: async (parent, { contentTitle }, context) => {
      let data = await Content.find({ title: contentTitle });
      // console.log("resolvers.js Line 33", data);
      // console.log("resolvers.js Line 34", contentTitle);
      return data;
    },

    getByAuthor: async (parent, { contentAuthor }, context) => {
      let data = await Content.find({ author: contentAuthor });
      console.log("resolvers.js Line 40", data);
      // console.log("resolvers.js Line 41", contentAuthor);
      return data;
    },

    getAllUsers: async () => {
      let data = await User.find().populate("content");
      return data;
    },

    getUser: async (parent, { userName }) => {
      let data = await User.findOne({ userName }).populate("content");
      return data;
    },
  },

  Mutation: {
    newUser: async (parent, { userName, password }) => {
      const newUser = await User.create({ userName, password });

      const token = signToken(newUser);
      return { token, newUser };
    },

    login: async (parent, { userName, password }) => {
      // Identifies Existing User through User Name search
      const existingUser = await User.findOne({ userName });

      // Throws Authentication Error if Existing User is not found with entered User Name
      if (!existingUser) {
        throw AuthenticationError;
      }

      // Executes Validate Password Method (User.js)
      const validPassword = await existingUser.validatePassword(password);

      // Throws Authentication Error if Password is incorrect
      if (!validPassword) {
        throw AuthenticationError;
      }

      // Logs In Existing User if User Name and Password are both correct
      const token = signToken(existingUser);
      console.log(existingUser);

      // Returns Authorization Object of 'token' and User credentials
      return { token, existingUser };
    },
  },
};

module.exports = resolvers;
