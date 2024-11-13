// Imports required React Modules
import React, { useState } from 'react';
import { useMutation, gql, useQuery } from '@apollo/client';

// Imports required App Modules
import { NEW_USER } from '../queries';
// import Auth from '../pages/api/auth';
import Auth from '../utils/authorize';

// Defines Function to Search Content on the basis of Content 'Status'
export default function CreateAccount() {

  const [newUser, { error }] = useMutation(NEW_USER);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
  try {
    const { data } = await newUser({
      variables: { userName, password },
    })
    Auth.login(data.newUser.token)
  } catch (err) {
    console.error(err)
  }

    // const res = await fetch("/api/auth", {
    //   method: "POST", 
    //   body: JSON.stringify({ userName, password }), 
    //   headers: {"Content-Type": "application/json"}
    // })
    // const data = await res.json();
    // console.log("Login.jsx Line 23", data);

    // if (data.message === 'success') {
    //   localStorage.setItem('jwt-token, data.token')
    //   setUserName('')
    //   setPassword('')
    // } else {
    //   alert(data.message)
    // }
  };

  return (
    <div>
      <h1>Create Account</h1>
      <br />

      <form onSubmit={handleSubmit}>
        <input
          className="textField"
          value={userName}
          type='textarea'
          placeholder='User Name'
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        
        <input
          className="textField"
          value={password}
          type='password'
          placeholder='User Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}