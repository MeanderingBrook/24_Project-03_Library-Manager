// Imports required React Modules
import React, { useState } from 'react';
import { useMutation, gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

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
        <br />
        <button onClick={clearSearchResults}>Clear Search Results</button>
      </form>
      <br />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data?.getByGenre.map((getByGenre) => (
        <div key={getByGenre._id}>
          <Link to={`/contentedit/${getByGenre._id}`}>Title: {getByGenre.title}</Link>
          {/* <li key={getByGenre.id}> */}
          <li>
            {getByGenre.author} - {getByGenre.descr}{" "}
            - {getByGenre.genre}
          </li>
          <br />
        </div>
      ))}
    </div>
  );
}