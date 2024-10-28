const typeDefs = `

     type Content {
        _id: ID
        title: String
        author: String
        descr: String
        genre: String
        copiesHeld: Int
        copiesAvail: Int
        status: String
     }

     type User {
      _id: ID
      userName: String
      password: String
      content: [Content]!
     }

     type Authorization {
      token: ID!
      user: User
     }

     type Query {
        getAllContent: [Content]  
        getSingle(contentId: ID): [Content]
        getAvailable(contentStatus: String): [Content]
        getByStatus(contentStatus: String): [Content]
        getByGenre(contentGenre: String): [Content]
        getByTitle(contentTitle: String): [Content]
        getByAuthor(contentAuthor: String): [Content]
        getAllUsers: [User]
        getUser(userName: String!): User
     }

     type Mutation {
      newUser(userName: String!, password: String!): Authorization
      login(userName: String!, password: String!): Authorization
     }
`;

module.exports = typeDefs;
