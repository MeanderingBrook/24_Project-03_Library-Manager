// Render User Accounts
// User Name: Sample User
// Password: password

// Local User Accounts
// User-01
// password-01

// User-02
// password-02

// User-03
// password-03

// User-04
// password-04

// User-05
// password-05

// Imports required React Modules
import React, { useState } from 'react';
import { useMutation, gql, useQuery } from '@apollo/client';

// Imports required App Modules
import { LOGIN } from '../queries';
import AuthService from '../utils/authorize'

// Defines Function to Search Content on the basis of Content 'Status'
export default function Login() {

  const [existingUser, { error }] = useMutation(LOGIN);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await existingUser({
      // const { data } = await login({
        variables: { userName, password },
      })
      // console.log("Login.jsx Line 28", existingUser);
      // console.log("Login.jsx Line 29", login);
      console.log(data.login)
      // localStorage.setItem("userId", data.login.user._id)
      AuthService.login(data.login.token)

    } catch (err) {
      console.error(err)
      alert("User could not be authenticated.")
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
      <h1>Login</h1>
      <br />

      {/* {AuthService.loggedIn() ? <p>You Are Logged In.</p>: <p>Log In.</p>} */}
 
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
        {/* <button onClick={AuthService.logout}>Log Out</button> */}
      </form>
    </div>
  )
}