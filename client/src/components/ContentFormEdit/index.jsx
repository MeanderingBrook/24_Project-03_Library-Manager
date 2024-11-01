// Imports required React Modules
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Defines Content Edit Form functionality, edit of existing Content Record
export default function ContentFormEdit() {
  const [editValues, setEditValues] = useState({});
  const { contentId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const contentEdit = async() => {
      try {
        const res = await fetch("/cms/"+contentId);
        const data = await res.json()
        setEditValues(data);
        // console.log("index.jsx Line 17", data)
        // console.log("index.jsx Line 18", setEditValues)
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
    
    // IS THERE A RESPONSE HERE ??? !!!
    // const response = await res.json();
    navigate("/")
  }

  return (
    <div>
      {/* <h1>
        New content Title is, {editValues.title}, by the Author, {editValues.author}.
      </h1> */}
      <form className="form" onSubmit={handleFormSubmit}>
        <input 
          value={editValues.title} 
          onChange={handleInputChange}
          name="title" 
          label="Title"
          type="text" 
          placeholder="Title" 
        />
        <input 
          value={editValues.author}
          onChange={handleInputChange}
          name="author"
          label="Author"
          type="text"
          placeholder="Author"
        />
        <input 
          value={editValues.descr}
          onChange={handleInputChange}
          name="descr"
          label="Description"
          type="text"
          placeholder="Description"
        />
        <input 
          value={editValues.genre}
          onChange={handleInputChange}
          name="genre"
          label="Genre"
          type="text"
          placeholder="Genre"
        />
        <input 
          value={editValues.copiesHeld}
          onChange={handleInputChange}
          name="copiesHeld"
          label="Copies Held"
          type="text"
          placeholder="Copies Held"
        />
        <input 
          value={editValues.copiesAvail}
          onChange={handleInputChange}
          name="copiesAvail"
          label="Copies Available"
          type="text"
          placeholder="Copies Available"
        />
        <input 
          value={editValues.status}
          onChange={handleInputChange}
          name="status"
          label="Status"
          type="text"
          placeholder="Status"
        />
        <button type="submit">Submit Edits</button>
        <button onClick={handleFormDelete}>Delete Record</button>
      </form>
      {editValues.errorMessage && (
        <div>
          <p>{editValues.errorMessage}</p>
        </div>
      )}
    </div>
  );
}