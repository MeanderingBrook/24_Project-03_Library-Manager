const typeDefs = `

     type Content {
        _id: ID
        title: String
        author: String
        descr: String
        genre: String
        copiesHeld: Number
        copiesAvail: Number
        status: String
        dateCreated: Date
     }

     type Query {
        allContent: [Content]  
        getSingle(contentId: ID): Content
     }

   //   type Mutation {
     
   //   }
`;

module.exports = typeDefs;
