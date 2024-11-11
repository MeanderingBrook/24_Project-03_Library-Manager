// Imports required React Modules
import React, { useState } from 'react';
import { useMutation, gql, useQuery } from '@apollo/client';

// Imports required App Modules
import { GET_GENRE } from '../../queries';

// Defines Function to Search Content on the basis of Content 'Status'
export default function GenreForm() {
  const [contentGenre, setContentGenre] = useState('');
  const [genre, setGenre] = useState('')
  const { loading, error, data, refetch } = useQuery(GET_GENRE, {variables: { contentGenre: genre }});

  const handleSubmit = (event) => {
    event.preventDefault();
    setGenre(contentGenre);
  };

  const clearSearchResults = () => {
  setContentGenre('');
  refetch();
  }

  // console.log("SearchGenre.jsx Line 24", data)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder='Genre' 
          value={contentGenre} 
          onChange={(e) => setContentGenre(e.target.value)} 
        />
        <button type='submit'>Get Content by Genre</button>
        <button onClick={clearSearchResults}>Clear Search</button>
      </form>
      <br />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data?.getByGenre.map((getByGenre) => (
        <li key={getByGenre.id}>
        {getByGenre.title} - {getByGenre.author} - {getByGenre.descr}{" "}
        - {getByGenre.genre}
        </li>
      ))}
    </div>
  );
}