// Imports required React Modules
import React, { useState } from 'react';
import { useMutation, gql, useQuery } from '@apollo/client';

// Imports required App Modules
import { GET_TITLE } from '../../queries';

// Defines Function to Search Content on the basis of Content 'Status'
export default function TitleForm() {
  const [contentTitle, setcontentTitle] = useState('');
  const [title, setTitle] = useState('')
  const { loading, error, data, refetch } = useQuery(GET_TITLE, {variables: { contentTitle: title }});

  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle(contentTitle);
  };

  const clearSearchResults = () => {
  setcontentTitle('');
  refetch();
  }

  // console.log("SearchTitle.jsx Line 24", data)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder='Title' 
          value={contentTitle} 
          onChange={(e) => setcontentTitle(e.target.value)} 
        />
        <button type='submit'>Get Content by Title</button>
        <button onClick={clearSearchResults}>Clear Search</button>
      </form>
      <br />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data?.getByTitle.map((getByTitle) => (
        <li key={getByTitle.id}>
        {getByTitle.title} - {getByTitle.author} - {getByTitle.descr}{" "}
        - {getByTitle.genre}
        </li>
      ))}
    </div>
  );
}