const { Content } = require("../models");

const resolvers = {
  Query: {
    allContent: async () => {
      // We are making request to our DATABSE and sending the DATA back to the FRONTEND
      let data = await Content.find({});
      return data;
    },
    //  getSingle: async (parent, args, context) => {
    getSingle: async (parent, { contentId }, context) => {
      //  let data = await Content.findById(args.contentId)
      let data = await Content.findById(contentId);
      return data;
    },
  },

  // Mutation: {},
};

module.exports = resolvers;
