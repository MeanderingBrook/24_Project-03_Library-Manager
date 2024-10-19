// Imports required React Modules
import { useState, Form } from "react";

// Imports required App Modules
// import { validateEmail, checkPassword } from "../../utils/helpers";

const initialValues = {
  title: "",
  author: "",
  descr: "",
  genre: "",
  copiesHeld: "",
  copiesAvail: "",
  status: "",
  errorMessage: "",
};

export default function ContentForm() {
  const [values, setValues] = useState(initialValues);

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
    alert(`The entered Title is, ${values.title}, and the entered Author is, ${values.author}.`)
    console.log("index.jsx Line 38", values);

    // const { title, author, desc, genre, copiesHeld, copiesAvail, status } = values;
    const res = await fetch("/contentform", {method: "POST", body: JSON.stringify(values), headers: {"Content-Type": "application/json"}})
    const data = await res.json();
    console.log("index.jsx Line 43", data);

    // Returns Data Element Values to 'initialValues' ('')
    setValues(initialValues);
  };

  return (
    <div>
      <h1>
        Your Title is, {values.title}, by the Author, {values.author}.
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
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
        <input 
          value={values.genre}
          onChange={handleInputChange}
          name="genre"
          label="Genre"
          type="text"
          placeholder="Genre"
        />
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
        <input 
          value={values.status}
          onChange={handleInputChange}
          name="status"
          label="Status"
          type="text"
          placeholder="Status"
        />
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

