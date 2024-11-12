// Imports required React Modules
import React, { useState } from 'react';
import { useMutation, gql, useQuery } from '@apollo/client';

// Imports required App Modules
import { GET_AUTHOR } from '../../queries';

// Defines Function to Search Content on the basis of Content 'Status'
export default function AuthorForm() {
  const [contentAuthor, setContentAuthor] = useState('');
  const [author, setAuthor] = useState('')
  const { loading, error, data, refetch } = useQuery(GET_AUTHOR, {variables: { contentAuthor: author }});

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
        <button onClick={clearSearchResults}>Clear Search</button>
      </form>
      <br />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {/* LINK TO CONTENT USING ID !!! */}
      {data?.getByAuthor.map((getByAuthor) => (
        <li key={getByAuthor.id}>
        {getByAuthor.title} - {getByAuthor.author} - {getByAuthor.descr}{" "}
        - {getByAuthor.genre}
        </li>
      ))}
    </div>
  );
}