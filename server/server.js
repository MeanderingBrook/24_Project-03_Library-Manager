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
    "server.js Line 51: Unable to connect to MongoDB Instance:"
  )
);
db.once("open", () => {
  console.log("server.js Line 42: Connection established to MongoDB Instance");
});

// FIX THIS !!!
// GET Request of MongoDB Content Data
// Note: GET Request to Root ("/cms") rather than sub-Route ("/")
// Referenced by Dashboard.js to populate Dashboard with MongoDB Data
app.get("/cms", async (req, res) => {
  try {
    const data = await Content.find({});
    // console.log("server.js Line 79", data);

    res.json(data);
  } catch (err) {
    // console.log("server.js Line 83: CMS Data Return Failed.");
    res.json({ message: "server.js Line 84: CMS Data Return Failed." });
  }
});

// POST Request to MongoDB Content Data
app.post("/contentform", async (req, res) => {
  // console.log("server.js Line 90", req.body);
  // Deconstructs the Incoming New Content POST Request Body
  let {
    title,
    author,
    contentType,
    descr,
    genre,
    copiesHeld,
    copiesAvail,
    status,
  } = req.body;

  try {
    const newContent = await Content.create({
      title,
      author,
      contentType,
      descr,
      genre,
      copiesHeld,
      copiesAvail,
      status,
    });
    // console.log("server.js Line 105", newContent);
    res.json(newContent);
  } catch (err) {
    console.log("server.js Line 108, newContent POST Request failed.");
    res.json(err);
  }
});

// PUT Request to MongodDB Content Data
app.put("/contentedit/:contentId", async (req, res) => {
  let {
    title,
    author,
    contentType,
    descr,
    genre,
    copiesHeld,
    copiesAvail,
    status,
  } = req.body;

  try {
    const updatedContent = await Content.findByIdAndUpdate(
      req.params.contentId,
      {
        title,
        author,
        contentType,
        descr,
        genre,
        copiesHeld,
        copiesAvail,
        status,
      }
    );
    res.json(updatedContent);
  } catch (err) {
    res.json(err);
  }
});

// NEW FRIDAY !!!
// DELETE Request to MongodDB Content Data
app.delete("/contentedit/:contentId", async (req, res) => {
  let {
    title,
    author,
    contentType,
    descr,
    genre,
    copiesHeld,
    copiesAvail,
    status,
  } = req.body;

  try {
    const deletedContent = await Content.findByIdAndDelete(
      req.params.contentId,
      {
        title,
        author,
        contentType,
        descr,
        genre,
        copiesHeld,
        copiesAvail,
        status,
      }
    );
    // IS THIS REQUIRED ??? !!! SEEMED TO BE BASED ON ERROR
    const data = await res.json();
    return data;
  } catch (err) {
    res.json(err);
  }
});

// DONT THINK THIS IS NEEDED !!!
app.get("/cms/:contentId", async (req, res) => {
  const { contentId } = req.params;

  try {
    const existingContent = await Content.findById(contentId);
    res.json(existingContent);
  } catch (err) {
    res.json(err);
  }

  console.log(
    "Server index.js Line 176, CMS Post (http://localhost:3000/cms/:id) Route Sucessfully Returned"
  );
  // res.json(contentPost);
});

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
