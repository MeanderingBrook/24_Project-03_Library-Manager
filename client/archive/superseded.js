// App.js

// function App() {
//   const [message, setMessage] = useState("");
//   useEffect(() => {
//     fetch("http://localhost:8080/")
//       .then((res) => res.text())
//       .then((data) => setMessage(data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <p>
//           <button onClick={apiCall}>Execute API Call</button>
//         </p>
//         <p>{message}</p>
//       </header>
//     </div>
//   );
// }

// const [showPosts, setShowPosts] = useState(false);
// const [posts, setPosts] = useState([]);
// const [newContent, setNewContent] = useState({
//   title: "",
//   author: "",
//   descr: "",
//   genre: "",
//   copiesHeld: "",
//   copiesAvail: "",
//   status: "",
//   allowComment: true,
//   dateCreated: "",
// });
// const [editContent, setEditContent] = useState(null);

// useEffect(() => {
//   axios
//     .get("/cms") // Points to, http://localhost:8080/cms through package.json-defined Proxy
//     .then((response) => setPosts(response.data))
//     .catch((error) => console.error("Error Fetching Content: ", error));
// }, []);

// const handleDashboardClick = () => {
//   setShowPosts(false);
//   setPosts([]);
// };

// const handlePostsClick = () => {
//   axios
//     .get("http://localhost:8080/cms")
//     .then((response) => {
//       setPosts(response.data);
//       setShowPosts(true);
//     })
//     .catch((error) => console.error("Error Fetching Posts: ", error));
// };

// const handleApprove = (id) => {
//   axios
//     .post("/cms/approve/${id}")
//     .then((response) => {
//       console.log(response.data);
//       setPosts((prevPosts) =>
//         prevPosts.map((post) =>
//           post.id === id ? { ...post, status: "Approved" } : post
//         )
//       );
//     })
//     .catch((error) => console.log("Error in Approving Post: ", error));
// };

// const handleEdit = (post) => {
//   setEditContent(post);
// };

// Old Nav Bar
// {
//   /* <nav>
//   <ul>
//     <li>
//       <Link to={`/`}>Home</Link>
//     </li>
//     <li>
//       <Link to={`contentform`}>Content Form</Link>
//     </li>
//     <li>
//       <Link to={`calendar`}>Calendar</Link>
//     </li>
//   </ul>
// </nav> */
// }

// // // // //

// Reference:
// https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/

// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     fetch("/api")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>{!data ? "Loading..." : data}</p>
//       </header>
//     </div>
//   );
// }

// export default App;

// index.js

// const sampleHeading = <h1>Sample React Element</h1>;

// const sampleTable = (
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Jane</td>
//     </tr>
//   </table>
// );

// const sampleParagraphs = (
//   <>
//     <p>Statement No. 01</p>
//     <p>Statement No. 02</p>
//   </>
// );

// const x = 1;
// const sampleTernary = (
//   <h1>{x < 10 ? "Sample React Ternary" : "No React Ternary"}</h1>
// );

// function SampleReactComponent(props) {
//   return <h3>Sample React Component {props.text}</h3>;
// }

// function NestedReactComponent() {
//   return (
//     <>
//       <h3>Nested React Component</h3>
//       <SampleReactComponent text="with Prop(ertie)s" />
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
//   // sampleHeading
//   // sampleTable
//   // sampleParagraphs
//   // sampleTernary
//   // <SampleReactComponent text="with Prop(ertie)s" />
//   // <NestedReactComponent />
// );

// server.js
/*
    const title = title;
    const author = author;
    const descr = descr;
    const genre = genre;
    const copiesHeld = copiesHeld;
    const copiesAvail = copiesAvail;
    const status = status;
    */
// console.log("server.js Line 70", req.body);

// ContentForm/index.jsx
// Old HTML

// export default function ContentForm() {
//   // Defines Content Form data fields
//   // Sets Content Form data field initial values to empty string
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [descr, setDescr] = useState('');
//   const [genre, setGenre] = useState('');
//   const [copiesHeld, setCopiesHeld] = useState('');
//   const [copiesAvail, setCopiesAvail] = useState('');
//   const [status, setStatus] = useState('');
//   // const [dateCreated, setDateCreated] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleFormInput = (e) => {
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     if (inputType === 'title') {
//       setTitle(inputValue);
//     } else if (inputType === 'author') {
//       setAuthor(inputValue);
//     } else if (inputType === 'descr') {
//       setDescr(inputValue);
//     } else if (inputType === 'genre') {
//       setGenre(inputValue);
//     } else if (inputType === 'copiesHeld') {
//       setCopiesHeld(inputValue);
//     } else if (inputType === 'copiesAvail') {
//       setCopiesAvail(inputValue);
//     } else if (inputType === 'status') {
//       setStatus(inputValue);
//     }
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     if (!title || !author) {
//       setErrorMessage('Title and Author are required.');
//       return;
//     }
//     alert(`The entered Title is, ${title}, and the entered Author is, ${author}.`)

//     const res = await fetch("/contentform", {method: "POST", body: JSON.stringify({title, author, descr, genre, copiesHeld, copiesAvail, status}), headers: {"Content-Type": "application/json"}})
//     const data = await res.json();
//     console.log("index.jsx Line 53", data);

//     setTitle('');
//     setAuthor('');
//     setDescr('');
//     setGenre('');
//     setCopiesHeld('');
//     setCopiesAvail('');
//     setStatus('');
//   };

//   return (
//     <div>
//       <h1>
//         Your Title is, {title}, by the Author, {author}.
//       </h1>
//       <form className="form" onSubmit={handleFormSubmit}>
//         <input
//           value={title}
//           name="title"
//           onChange={handleFormInput}
//           type="text"
//           placeholder="Title"
//         />
//         <input
//           value={author}
//           name="author"
//           onChange={handleFormInput}
//           type="text"
//           placeholder="Author"
//         />
//         <input
//           value={descr}
//           name="descr"
//           onChange={handleFormInput}
//           type="text"
//           placeholder="Description"
//         />
//         <input
//           value={genre}
//           name="genre"
//           onChange={handleFormInput}
//           type="text"
//           placeholder="Genre"
//         />
//         <input
//           value={copiesHeld}
//           name="copiesHeld"
//           onChange={handleFormInput}
//           type="text"
//           placeholder="Copies Held"
//         />
//         <input
//           value={copiesAvail}
//           name="copiesAvail"
//           onChange={handleFormInput}
//           type="text"
//           placeholder="Copies Available"
//         />
//         <input
//           value={status}
//           name="status"
//           onChange={handleFormInput}
//           type="text"
//           placeholder="Status"
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {errorMessage && (
//         <div>
//           <p>{errorMessage}</p>
//         </div>
//       )}
//     </div>
//   );

// Search.jsx

// SAMPLE CODE -- USED
// import React, { useState } from 'react';
// import { useMutation, gql } from '@apollo/client';

// const GET_USER = gql`
//   query GetUser($id: ID!) {
//     user(id: $id) {
//       id
//       name
//       email
//     }
//   }
// `;

// function UserForm() {
//   const [userId, setUserId] = useState('');
//   const [getUser, { loading, error, data }] = useMutation(GET_USER);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     getUser({ variables: { id: userId } });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="User ID"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//         />
//         <button type="submit">Get User</button>
//       </form>

//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//       {data && (
//         <div>
//           <p>ID: {data.user.id}</p>
//           <p>Name: {data.user.name}</p>
//           <p>Email: {data.user.email}</p>
//         </div>
//       )}
//     </div>
//   );
// }
// export default UserForm;

// MIKE'S CODE
// import SearchComponent from '../components/SearchComponent';

// const ParentComponent = () => {
//   const [searchInput, setSearchInput] = useState('');

//   const handleSearch = (input) => {
//     setSearchInput(input);
//   };

//   return (
//     <div>
//       <SearchComponent searchInput={searchInput} onSearch={handleSearch} />
//     </div>
//   );
// };

// export default ParentComponent;

// SAMPLE CODE
// import { useQuery, gql } from '@apollo/client';

// const GET_USER = gql`
//   query GetUser($id: ID!) {
//     user(id: $id) {
//       id
//       name
//       email
//     }
//   }
// `;

// const UserComponent = ({ userId }) => {
//   const { loading, error, data } = useQuery(GET_USER, {
//     variables: { id: userId }
//   });

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       <h1>{data.user.name}</h1>
//       <p>{data.user.email}</p>
//     </div>
//   );
// };

// MOVED TO SEARCHSTATUS.JSX

// Imports required App Modules
// import { GET_STATUS } from '../../queries';

// export default function StatusForm() {
//   const [contentStatus, setContentStatus] = useState('');
//   const [ status, setStatus ] = useState('')
//   const { loading, error, data } = useQuery(GET_STATUS, {variables: { contentStatus: status }});

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setStatus(contentStatus);
//   };

//   console.log("Search.jsx Line 19",data)

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type='text'
//           placeholder='Status'
//           value={contentStatus}
//           onChange={(e) => setContentStatus(e.target.value)}
//         />
//         <button type='submit'>Get Content</button>
//       </form>

//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//       {data?.getStatus.map((getStatus) => (
//         <li key={getStatus.id}>
//         {getStatus.title} - {getStatus.author} - {getStatus.descr}{" "}
//         - {getStatus.genre}
//         </li>
//       ))}
//     </div>
//   );
// }

// Nav.jsx
// export default function Nav() {
//   return (
//     <NavBar
//       links={[
//         <Link key={1} to={`/`}>
//           Home
//         </Link>,
//         <Link key={2} to={`contentform`}>
//           Content Form
//         </Link>,
//         <Link key={3} to={`calendar`}>
//           Calendar
//         </Link>
//       ]}
//     />
//   );
// }

// // //
// Content.js

// Content.find({})
//   .exec()
//   .then((library) => {
//     if (library.length === 0) {
//       Content.insertMany([
//         {
//           id: "1",
//           title: "Content 1: MongoDB",
//           author: "Abe Abel",
//           descr: "Description 1: MongoDB",
//           genre: "Miscellaneous",
//           copiesHeld: 1,
//           copiesAvail: 1,
//           status: "Pending",
//           allowComment: true,
//         },
//         {
//           id: "2",
//           title: "Content 2: MongoDB",
//           author: "Bob Bobble",
//           descr: "Description 2: MongoDB",
//           genre: "Miscellaneous",
//           copiesHeld: 2,
//           copiesAvail: 2,
//           status: "Pending",
//           allowComment: true,
//         },
//         {
//           id: "3",
//           title: "Content 3: MongoDB",
//           author: "Carl Carlson",
//           descr: "Description 3: MongoDB",
//           genre: "Miscellaneous",
//           copiesHeld: 3,
//           copiesAvail: 3,
//           status: "Pending",
//           allowComment: false,
//         },
//         {
//           id: "4",
//           title: "Content 4: MongoDB",
//           author: "David Davidson",
//           descr: "Description 4: MongoDB",
//           genre: "Miscellaneous",
//           copiesHeld: 4,
//           copiesAvail: 4,
//           status: "Approved",
//           allowComment: false,
//         },
//         {
//           id: "5",
//           title: "Content 5: MongoDB",
//           author: "Erik Elphiba",
//           descr: "Description 5: MongoDB",
//           genre: "Miscellaneous",
//           copiesHeld: 5,
//           copiesAvail: 5,
//           status: "Approved",
//           allowComment: false,
//         },
//       ]);
//     }
//   });
// // //

// server.js
//   app.use(
//     "/graphql",
//     expressMiddleware(server, {
//       context: authMiddleware,
//     })
//     // expressMiddleware(server, {
//     // context: async ({ req, res }) => ({
//     //   req: request,
//     //   res: express.response,
//     //   }),
//     // })
//     // cors(),
//     // express.urlencoded({ extended: false }),
//     // express.json(),
//   );
// // // //

// server.js
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
// // // // //

// index.js
// Primary index.js on Client
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
