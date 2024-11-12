// Imports required React Modules
import React, { useState } from 'react';
import { useMutation, gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

// Imports required App Modules
import { GET_AUTHOR } from '../../queries';

// Defines Function to Search Content on the basis of Content 'Status'
export default function AuthorForm() {
  const [contentAuthor, setContentAuthor] = useState('');
  const [author, setAuthor] = useState('')
  const { loading, error, data, refetch } = useQuery(GET_AUTHOR, {variables: { contentAuthor: author }});
  
  const results = data?.getByAuthor;
  console.log("Author Data: ", results);

  const handleSubmit = (event) => {
    event.preventDefault();
    setAuthor(contentAuthor);
  };

  const clearSearchResults = () => {
  setContentAuthor('');
  refetch();
  }

  // console.log("SearchAuthor.jsx Line 24", data)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder='Author' 
          value={contentAuthor} 
          onChange={(e) => setContentAuthor(e.target.value)} 
        />
        <button type='submit'>Get Content by Author</button>
        <br />
        <button onClick={clearSearchResults}>Clear Search Results</button>
      </form>
      <br />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {data?.getByAuthor.map((getByAuthor) => (
        <div key={getByAuthor._id}>
          <Link to={`/contentedit/${getByAuthor._id}`}>Title: {getByAuthor.title}</Link>
          <li>
          {/* {getByAuthor.title} - {getByAuthor.author} - {getByAuthor.descr}{" "} */}
          {getByAuthor.author} - {getByAuthor.descr}{" "}
          - {getByAuthor.genre}
          </li>
          <br />
        </div>
      ))}
    </div>
  );
}