// Module 24 - Project 3: Library Manager Application
// React App (Frontend) Definition

// Initialize Client from /client
// Note: Initializes /client/src/index.js
// App is passed to index.js (See, root.render(), in that file)
// React Scripts: npm run start

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
// Note: Outlet serves as placeholder for Child Routes allowing for nested Routes
import React, { useEffect, useState } from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import axios from "axios";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  useQuery,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Imports required App Modules
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Nav from "./components/Nav";
import ContentData from "./components/ContentData";
import ContentAvailable from "./components/ContentAvailable";
import AuthService from "./utils/authorize";

// GET Request using Axios
const apiCall = () => {
  // Requests Response from Express Server (/server/index.js) as call to app.get("/")
  axios.get("http://localhost:8080").then((data) => {
    // Data will log to Frontend (Browser) Console
    console.log("App.js Line 33", data);
  });
};

// GraphQL URI references Proxy (package.json), adding '/graphql' Endpoint
// const client = new ApolloClient({
//   uri: "/graphql",
//   cache: new InMemoryCache(),
// });

const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client} className="app-container">
      <div>
        {/* <h2>HTML Rendered on all Pages (App.js)</h2> */}
        <h2>Personal Content Management Systems (CMS)</h2>
      </div>

      <Nav />

      {AuthService.loggedIn() ? (
        <div>
          <p>You are logged in as, {AuthService.getUserName()}</p>
          {/* <p>Your password is, {AuthService.getUserPassword()}</p> */}
          <button onClick={AuthService.logout}>Log Out</button>
        </div>
      ) : (
        <p>
          <Link to="/login">Log In</Link>
        </p>
      )}

      {/* Outlet invokes front-end Routes (defined in index.js) through React-Router-Dom Library */}
      <Outlet />
      <div>
        <h2>GraphQL Query: All Content Data</h2>
        <ContentData />
      </div>
      <div>
        <h2>GraphQL: Available Content Data</h2>
        <ContentAvailable />
      </div>
    </ApolloProvider>
  );
}
