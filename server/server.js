// Module 24 - Project 3: Library Manager Application
// Express Server (Backend) Definition

// Initialize Server from /server
// Node: npm start
// Dev: npm run dev

// Imports required Node.js Modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// Imports MongoDB Connection from Configuration file (./config/connect.js)
const db = require("./config/connect");

// Imports Apollo Server Middleware
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

// Imports GraphQL Schema
const { typeDefs, resolvers } = require("./schemas/index.js");

// Import Authentication Middleware, JSON Web Token (JWT)
const { authMiddleware } = require("./utils/authorize.js");

// Executes Express Function to Create Application Object (app) using Express Framework
const app = express();

// Defines Global App Variables
// React utlizes Port 3000 by default, Port 8080 selected for Express instead
// Local Host: http://localhost:8080
const PORT = process.env.PORT || 8080;

// Imports MongoDB Model
const { Content } = require("./models");

// Body-Parser Express Middleware converts Form input for storage as JavaScript Object accessible through req.body
app.use(bodyParser.json());

// CORS (Cross-Origin Resource Sharing) allows Express Backend (Port 8080) responses to React app (Port 3000)
app.use(cors());

app.use(express.static(path.resolve(__dirname, "/client/build")));

// Establishes connection to local MongoDB Instance through Configuration file (./config/connect.js)
db.on(
  "error",
  console.error.bind(
    console,
    "server.js Line 39: Unable to connect to MongoDB Instance:"
  )
);
db.once("open", () => {
  console.log("server.js Line 42: Connection established to MongoDB Instance");
});

// // GET Request of MongoDB Library Data
// // Note: GET Request to Root ("/") rather than sub-Route ("/cms")
// app.get("/", async (req, res) => {
//   try {
//     const libraryData = await Content.find({});
//     // console.log("server.js Line 50: Content Data:", libraryData);

//     res.json(libraryData);
//   } catch (err) {
//     console.log(err);
//     res.json(err);
//   }
// });

// FIX THIS !!!
// GET Request of MongoDB Content Data
// Referenced by Dashboard.js to populate Dashboard with MongoDB Data
app.get("/cms", async (req, res) => {
  try {
    const data = await Content.find({});
    // console.log("server.js Line 88", data);

    res.json(data);
  } catch (err) {
    console.log("server.js Line 97: CMS Data Return Failed.");
    res.json({ message: "server.js Line 98: CMS Data Return Failed." });
  }
});

// POST Request to MongoDB Content Data
app.post("/contentform", async (req, res) => {
  // console.log("server.js Line 61", req.body);
  // Deconstructs the Incoming New Content POST Request Body
  let { title, author, descr, genre, copiesHeld, copiesAvail, status } =
    req.body;

  try {
    const newContent = await Content.create({
      title,
      author,
      descr,
      genre,
      copiesHeld,
      copiesAvail,
      status,
    });
    // console.log("server.js Line 87", newContent);
    res.json(newContent);
  } catch (err) {
    console.log("server.js Line 90, newContent POST Request failed.");
    res.json(err);
  }
});

// app.get("/cms/:id", (req, res) => {
//   const { id } = req.params;

//   console.log(
//     "Server index.js Line 74, CMS Post (http://localhost:3000/cms/:id) Route Sucessfully Returned"
//   );
//   res.json(contentPost);
// });

// app.post("/cms/approve/:id", (req, res) => {
//   const { id } = req.params;
//   const content = contentList.find((item) => item.id === id);

//   if (content) {
//     content.status = "Approved";
//     // Move Approved Content to end of List
//     contentList = contentList.filter((item) => item.id !== id);
//     contentList.push(content);

//     res.json({
//       message: "Content Approved.",
//     });
//   } else {
//     res.status(404).json({
//       error: "Content Not Found.",
//     });
//   }
// });

// app.put("/cms/edit/:id", (req, res) => {
//   const { id } = req.params;
//   const updatedContent = req.body;
//   const index = contentList.findIndex((item) => item.id === id);

//   if (index !== -1) {
//     contentList[index] = {
//       ...contentList[index],
//       ...updatedContent,
//     };
//   } else {
//     res.status(404).json({
//       error: "Content Not Found.",
//     });
//   }
// });

// app.post("/cms", (req, res) => {
//   const newContent = req.body;
//   newContent.status = "Pending";
//   contentList.push(newContent);

//   res.json({
//     message: "Content Successfully Added.",
//   });
// });

// app.get("/api", (req, res) => {
//   res.send(
//     "index.js Line 27: Library Manager App Server has responded to API (/api) Request."
//   );
// });

// Defines Apollo Server to respond to GraphQL Queries
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// GraphQL Entry Point through Apollo Server
const startApolloServer = async () => {
  await server.start();

  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: authMiddleware,
    })
    // expressMiddleware(server, {
    // context: async ({ req, res }) => ({
    //   req: request,
    //   res: express.response,
    //   }),
    // })
    // cors(),
    // express.urlencoded({ extended: false }),
    // express.json(),
  );
};

// Starts Apollo Server
startApolloServer();

app.listen(PORT, () => {
  console.log(
    `server.js Line 161: Library Manager App Express Server (Backend) is listing on Port ${PORT}.`
  );
  console.log(
    `server.js Line 206: GraphQL is available at http://localhost:${PORT}/graphql`
  );
});
