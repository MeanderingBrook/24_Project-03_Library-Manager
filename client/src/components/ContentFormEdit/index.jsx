// Imports required React Modules
import { useState, useEffect, Form } from "react";

// const initialValues = {
//   title: "",
//   author: "",
//   descr: "",
//   genre: "",
//   copiesHeld: "",
//   copiesAvail: "",
//   status: "",
//   errorMessage: "",
// };

export default function ContentFormEdit({ contentId }) {
  const [editValues, setEditValues] = useState(null);

  useEffect(() => {
    const contentEdit = async() => {
      try {
        const res = await fetch("/contentedit/:contentId");
        setEditValues(res.data);
        console.log("index.jsx Line 23", setEditValues)
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

    // if (!editValues.title || !editValues.author) {
    //   editValues.errorMessage('Title and Author are required.');
    //   return;
    // }

    alert(
      `
      Successfully saved new Content with the Title,
          ${editValues.title}, 
      and Author, 
          ${editValues.author}.
      `)
    
      // console.log("index.jsx Line 38", editValues);

    // const { title, author, descr, genre, copiesHeld, copiesAvail, status } = editValues;
    const res = await fetch("/contentedit/:contentId", {method: "PUT", body: JSON.stringify(editValues), headers: {"Content-Type": "application/json"}})
    const data = await res.json();
    console.log("index.jsx Line 62", data);

    // NOT NEEDED
    // Returns Data Element Values to 'initialValues' ('')
    // setEditValues(initialValues);
  };

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
        <button type="submit">Submit</button>
      </form>
      {editValues.errorMessage && (
        <div>
          <p>{editValues.errorMessage}</p>
        </div>
      )}
    </div>
  );
}