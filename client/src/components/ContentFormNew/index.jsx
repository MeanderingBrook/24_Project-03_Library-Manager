// Imports required React Modules
import { useState, Form } from "react";

// Imports required App Modules
// import { validateEmail, checkPassword } from "../../utils/helpers";

const initialValues = {
  contentType: "",
  title: "",
  author: "",
  descr: "",
  // genre: "",
  contentGenre: "",
  copiesHeld: "",
  copiesAvail: "",
  // status: "",
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

  // Toggle should be replaced by If Then for Post contentType !!!
  const togglePostField = () => {
    setShowPost(!showPost);
  };

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
    // alert(`The entered Title is, ${values.title}, and the entered Author is, ${values.author}.`)
    alert(
      `
      Successfully saved new Content with the Title,
          ${values.title}, 
      and Author, 
          ${values.author}.
      `)
    console.log("index.jsx Line 38", values);

    // const { title, author, descr, genre, copiesHeld, copiesAvail, status } = values;
    const res = await fetch("/contentform", {method: "POST", body: JSON.stringify(values), headers: {"Content-Type": "application/json"}})
    const data = await res.json();
    console.log("index.jsx Line 43", data);

    // Returns Data Element Values to 'initialValues' ('')
    setValues(initialValues);
  };

  return (
    <div className="newForm">
      {/* HIDE HEADER UNTIL CONTENT IS POPULATED !!! */}
      <h1>
        Your content Title is,<span style={{ color: 'blue' }}> {values.title}</span>, by the Author,<span style={{ color: 'blue' }}> {values.author}</span>.
      </h1>
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
        <input 
          value={values.title} 
          onChange={handleInputChange}
          name="title" 
          label="Title"
          type="text" 
          placeholder="Title" 
        />
        <input 
          value={values.author}
          onChange={handleInputChange}
          name="author"
          label="Author"
          type="text"
          placeholder="Author"
        />
        <input 
          value={values.descr}
          onChange={handleInputChange}
          name="descr"
          label="Description"
          type="text"
          placeholder="Description"
        />
        {/* !!! Hidden Post Field */}
        {/* {
          showPost && (
            <input type="text" placeholder="Your Post" />
          )
        } */}
        {/* <input 
          value={values.genre}
          onChange={handleInputChange}
          name="genre"
          label="Genre"
          type="text"
          placeholder="Genre"
        /> */}
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
          value={values.copiesHeld}
          onChange={handleInputChange}
          name="copiesHeld"
          label="Copies Held"
          type="text"
          placeholder="Copies Held"
        />
        <input 
          value={values.copiesAvail}
          onChange={handleInputChange}
          name="copiesAvail"
          label="Copies Available"
          type="text"
          placeholder="Copies Available"
        />
        {/* <input 
          value={values.status}
          onChange={handleInputChange}
          name="status"
          label="Status"
          type="text"
          placeholder="Status"
        /> */}
        <label>
          {/* Status */}
          <select
            className="selectField"
            value={values.contentStatus}
            onChange={handleInputChange}
            // name="contentStatus"
            name="status"
            // label="Content Status"
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
        <button type="submit">Submit</button>
      </form>
      {values.errorMessage && (
        <div>
          <p>{values.errorMessage}</p>
        </div>
      )}
    </div>
  );
}

