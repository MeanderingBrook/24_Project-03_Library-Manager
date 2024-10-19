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
