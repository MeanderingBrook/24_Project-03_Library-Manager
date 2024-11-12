// Imports required React Modules
import React, { useState } from 'react';
import { useMutation, gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

// Imports required App Modules
import { GET_STATUS } from '../../queries';

// Defines Function to Search Content on the basis of Content 'Status'
export default function StatusForm() {
  const [contentStatus, setContentStatus] = useState('');
  const [status, setStatus] = useState('')
  const { loading, error, data, refetch } = useQuery(GET_STATUS, {variables: { contentStatus: status }});

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus(contentStatus);
  };

  const clearSearchResults = () => {
    setContentStatus('');
    refetch();
  }

  // console.log("SearchStatus.jsx Line 24", data)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder='Status' 
          value={contentStatus} 
          onChange={(e) => setContentStatus(e.target.value)} 
        />
        <button type='submit'>Get Content by Status</button>
        <br />
        <button onClick={clearSearchResults}>Clear Search Results</button>
      </form>
      <br />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data?.getByStatus.map((getByStatus) => (
        <div key={getByStatus._id}>
          <Link to={`/contentedit/${getByStatus._id}`}>Title: {getByStatus.title}</Link>
          {/* <li key={getByStatus.id}> */}
          <li>
            {getByStatus.author} - {getByStatus.descr}{" "}
            - {getByStatus.genre}
          </li>
          <br />
        </div>
      ))}
    </div>
  );
}