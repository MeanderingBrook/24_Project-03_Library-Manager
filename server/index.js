// Express Server (Backend)
// Initialize from /server: node index.js

// Imports required Node.js Modules
const express = require("express");
const cors = require("cors");

// Defines Library Manager App as Express-driven
const app = express();

// console.log(app);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Library Manager App Server has responded.");
});

app.listen(8080, () => {
  console.log("Library Manager App server is listing on Port 8080.");
});
