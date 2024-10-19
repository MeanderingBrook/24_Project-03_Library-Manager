// connect.js

// Establishes connection to local MongoDB Instance
// mongoose.connect("mongodb://127.0.0.1:27017/libraryDB", {
//   userNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// app.js

// app.get("/", (req, res) => {
//   res.send(
//     "app.js Line 122: Library Manager App Express Server (Backend) has responded to Root (/) Request."
//   );
// });

// Imports required Application Modules
// import "./loadEnvironment.mjs";

// let contentList = [
//   {
//     id: "1",
//     title: "Post 1",
//     status: "Pending",
//     allowComment: true,
//     descr: "First Post",
//   },
//   {
//     id: "2",
//     title: "Post 2",
//     status: "Pending",
//     allowComment: true,
//     descr: "Second Post",
//   },
//   {
//     id: "3",
//     title: "Post 3",
//     status: "Pending",
//     allowComment: false,
//     descr: "Third Post",
//   },
//   {
//     id: "4",
//     title: "Post 4",
//     status: "Approved",
//     allowComment: false,
//     descr: "Fourth Post",
//   },
// ];

// // GET Request returns in-file 'contentList' Data
// app.get("/cms", (req, res) => {
//   console.log(
//     "Server index.js Line 64, CMS (http://localhost:3000/cms) Route Sucessfully Returned"
//   );
//   res.json(contentList);
// });
