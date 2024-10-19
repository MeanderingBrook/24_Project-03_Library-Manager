// Module 24 - Project 3: Library Manager Application
// React App (Frontend) Definition

// Initialize Client from /client
// Note: Initializes /client/src/index.js
// App is passed to index.js (See, root.render(), in that file)
// React Scripts: npm run start

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
} from "@apollo/client";

// Imports required App Modules
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Nav from "./components/Nav";

// GET Request using Axios
const apiCall = () => {
  // Requests Response from Express Server (/server/index.js) as call to app.get("/")
  axios.get("http://localhost:8080").then((data) => {
    // Data will log to Frontend (Browser) Console
    console.log("App.js Line 33", data);
  });
};

// GraphQL URI references Proxy (package.json), adding '/graphql' Endpoint
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client} className="app-container">
      <div>
        <h2>HTML Rendered on all Pages (App.js)</h2>
      </div>

      <Nav />
      {/* Outlet invokes front-end Routes (defined in index.js) through React-Router-Dom Library */}
      <Outlet />
    </ApolloProvider>
  );
}
