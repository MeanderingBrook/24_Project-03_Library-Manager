// Imports required React Modules
import { useState, Form } from "react";

// Imports required App Modules
// import { validateEmail, checkPassword } from "../../utils/helpers";

const initialValues = {
  contentType: "",
  title: "",
  author: "",
  descr: "",
  contentGenre: "",
  postContent: "",
  url: "",
  copiesHeld: "",
  copiesAvail: "",
  contentStatus: "",
  errorMessage: "",
};

export default function ContentFormNew() {
  const [values, setValues] = useState(initialValues);
  const [showPost, setShowPost] = useState(true);

  // Enumerates Content Type options for Drop-Down Menu
  const contentType = [
    { value: 'Book', label: 'Book' },
    { value: 'Periodical', label: 'Periodical' },
    { value: 'News Article', label: 'News Article' },
    { value: 'Essay', label: 'Essay' },
    { value: 'Post', label: 'Post' },
  ];

  const contentGenre = [
    { value: 'Literary Fiction', label: 'Literary Fiction' },
    { value: 'Historical Fiction', label: 'Historical Fiction' },
    { value: 'Romance Fiction', label: 'Romance Fiction' },
    { value: 'Science Fiction', label: 'Science Fiction' },
    { value: 'Nonfiction: Current Events', label: 'Nonfiction: Current Events' },
    { value: 'Nonfiction: History', label: 'Nonfiction: History' },
    { value: 'Nonfiction: Science', label: 'Nonfiction: Science' },
    { value: 'Commentary', label: 'Commentary' },
    { value: 'Humor', label: 'Humor' },
    { value: 'Uncategorized', label: 'Uncategorized' },
  ]

  const contentStatus = [
    { value: 'Pending', label: 'Pending' },
    { value: 'Approved', label: 'Approved' },
    { value: 'Available', label: 'Available' },
    { value: 'Unavailable', label: 'Unavailable' },
  ]

  // const togglePostField = () => {
  //   setShowPost(!showPost);
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!values.title || !values.author) {
      values.errorMessage('Title and Author are required.');
      return;
    }

    alert(
      `
      Successfully saved new Content with the Title,
          ${values.title}, 
      and Author, 
          ${values.author}.
      `)
    // console.log("index.jsx Line 38", values);

    // const { title, author, descr, genre, copiesHeld, copiesAvail, status } = values;
    const res = await fetch("/contentform", {method: "POST", body: JSON.stringify(values), headers: {"Content-Type": "application/json"}})
    const data = await res.json();
    // console.log("index.jsx Line 43", data);

    // Returns Data Element Values to 'initialValues' ('')
    setValues(initialValues);
  };

  return (
    <div className="newForm">
      { values.title.length < 5 ? (
                ""
               ) : <h2 style={{ color: '#3D5A80' }}>Your Content Title is,<span style={{ color: '#38AECC' }}> {values.title}</span></h2> }

      { values.author.length < 5 ? (
                ""
               ) : <h2 style={{ color: '#3D5A80' }}>by the Author,<span style={{ color: '#38AECC' }}> {values.author}</span></h2> }

      {/* <h1>
        Your content Title is,<span style={{ color: 'blue' }}> {values.title}</span>, by the Author,<span style={{ color: 'blue' }}> {values.author}</span>.
      </h1> */}
      <form className="form" onSubmit={handleFormSubmit}>
        <label>
          {/* Content Type */}
          <select
            className="selectField"
            value={values.contentType}
            onChange={handleInputChange}
            name="contentType"
            label="Content Type"
          >
            <option value="">
              Select a Type
            </option>
              {contentType.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
        </label>
        <br/>
        <input 
          className="textField"
          value={values.title} 
          onChange={handleInputChange}
          name="title" 
          label="Title"
          type="textarea" 
          placeholder="Title" 
        />
        <input 
          className="textField"
          value={values.author}
          onChange={handleInputChange}
          name="author"
          label="Author"
          type="textarea"
          placeholder="Author"
        />
        <input 
          className="textField"
          value={values.descr}
          onChange={handleInputChange}
          name="descr"
          label="Description"
          type="textarea"
          placeholder="Description"
        />
        { values.contentType === "Post" ? <br/> : "" }
        { values.contentType === "Post" ? 
          <input 
            className="textField" 
            value={values.postContent} 
            onChange={handleInputChange} 
            name="postContent" 
            label="Post Content" 
            type="textarea" 
            placeholder="Your Post Content"
          ></input> : "" }
        { values.contentType === "News Article" ? <br/> : "" }

        { values.contentType === "News Article" || values.contentType === "Essay" || values.contentType === "Post" ? 
          <input 
            className="textField" 
            value={values.url} 
            onChange={handleInputChange} 
            name="url" label="URL" 
            type="textarea" 
            placeholder="URL of the Online Resource"></input> : "" }

        <br/>
        <label>
          {/* Genre */}
          <select
            className="selectField"
            value={values.contentGenre}
            onChange={handleInputChange}
            name="genre"
            label="genre"
          >
            <option value="">
              Select a Genre
            </option>
              {contentGenre.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
        </label>        
        <input 
          className="textField"
          value={values.copiesHeld}
          onChange={handleInputChange}
          name="copiesHeld"
          label="Copies Held"
          type="textarea"
          placeholder="Copies Held"
        />
        <input 
          className="textField"
          value={values.copiesAvail}
          onChange={handleInputChange}
          name="copiesAvail"
          label="Copies Available"
          type="textarea"
          placeholder="Copies Available"
        />
        <label>
          {/* Status */}
          <select
            className="selectField"
            value={values.contentStatus}
            onChange={handleInputChange}
            name="status"
            label="status"
          >
            <option value="">
              Select a Status
            </option>
              {contentStatus.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
        </label>      
        <br/>  
        <button type="submit">Submit Content</button>
      </form>
      {values.errorMessage && (
        <div>
          <p>{values.errorMessage}</p>
        </div>
      )}
    </div>
  );
}

