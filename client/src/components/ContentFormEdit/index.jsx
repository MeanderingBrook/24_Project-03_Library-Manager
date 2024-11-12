// Imports required React Modules
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Defines Content Edit Form functionality, edit of existing Content Record
export default function ContentFormEdit() {
  const [editValues, setEditValues] = useState({});
  const { contentId } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    const contentEdit = async() => {
      try {
        const res = await fetch("/cms/"+contentId);
        const data = await res.json()
        setEditValues(data);
        // console.log("index.jsx Line 46", data)
        // console.log("index.jsx Line 47", setEditValues)
      } catch (error) {
        console.error(error);
      }
    };

    contentEdit();
  }, [contentId])

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setEditValues({
      ...editValues,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!editValues.title || !editValues.author) {
      editValues.errorMessage('Title and Author are required.');
      return;
    }
    
    // console.log("index.jsx Line 44", editValues);

    const res = await fetch("/contentedit/"+contentId, {method: "PUT", body: JSON.stringify(editValues), headers: {"Content-Type": "application/json"}})
    
    alert(
    `
    Successfully edited Content with the updated Title,
        ${editValues.title}, 
    and Author, 
        ${editValues.author}.
    `)

    const data = await res.json();
    // console.log("index.jsx Line 57", data);
    navigate("/")
  };

  const handleFormDelete = async (e) => {
    e.preventDefault();

    const res = await fetch("/contentedit/"+contentId, {method: "DELETE", body: JSON.stringify(editValues), headers: {"Content-Type": "application/json"}})
    
    alert(
    `
    Successfully deleted Content with the Title,
        ${editValues.title}, 
    and Author, 
        ${editValues.author}.
    `)
    
    navigate("/")
  }

  return (
    <div className="editForm">
      {/* <h1>
        New content Title is, {editValues.title}, by the Author, {editValues.author}.
      </h1> */}
      <form className="form" onSubmit={handleFormSubmit}>
        <select
          className="selectField"
          value={editValues.contentType}
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
        <br/>
        <input 
          className="textField"
          value={editValues.title} 
          onChange={handleInputChange}
          name="title" 
          label="Title"
          type="textarea" 
          placeholder="Title" 
        />
        <br/>
        <input 
          className="textField"
          value={editValues.author}
          onChange={handleInputChange}
          name="author"
          label="Author"
          type="textarea"
          placeholder="Author"
        />
        <br/>
        <input 
          className="textField"
          value={editValues.descr}
          onChange={handleInputChange}
          name="descr"
          label="Description"
          type="textarea"
          placeholder="Description"
        />
        <br/>
        {/* <input 
          value={editValues.genre}
          onChange={handleInputChange}
          name="genre"
          label="Genre"
          type="text"
          placeholder="Genre"
        /> */}
        <select
          className="selectField"
          value={editValues.genre}
          onChange={handleInputChange}
          name="contentGenre"
          label="Content Genre"
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
        <br/>
        <input 
          className="textField"
          value={editValues.postContent}
          onChange={handleInputChange}
          name="postContent"
          label="Post Content"
          type="textarea"
          placeholder="Post Content"
        />
        <br/>
        <input 
          className="textField"
          value={editValues.url}
          onChange={handleInputChange}
          name="url"
          label="Resource URL"
          type="textarea"
          placeholder="Resource URL"
        />
        <br/>
        <input 
          className="textField"
          value={editValues.copiesHeld}
          onChange={handleInputChange}
          name="copiesHeld"
          label="Copies Held"
          type="textarea"
          placeholder="Copies Held"
        />
        <br/>
        <input 
          className="textField"
          value={editValues.copiesAvail}
          onChange={handleInputChange}
          name="copiesAvail"
          label="Copies Available"
          type="textarea"
          placeholder="Copies Available"
        />
        <br/>
        {/* <input 
          value={editValues.status}
          onChange={handleInputChange}
          name="status"
          label="Status"
          type="text"
          placeholder="Status"
        /> */}
        <select
          className="selectField"
          value={editValues.status}
          onChange={handleInputChange}
          // name="contentStatus"
          name="contentStatus"
          // label="Content Status"
          label="Content Status"
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

        <br/>  
        <button className="submitButton" type="submit">&nbsp;Submit Edits&nbsp;</button>
        
        <br/>  
        <button className="deleteButton" onClick={handleFormDelete}>Delete Record</button>
      </form>
      {editValues.errorMessage && (
        <div>
          <p>{editValues.errorMessage}</p>
        </div>
      )}
    </div>
  );
}