// Imports required React Modules
import React, { useState } from 'react';

// Imports required App Modules
import SearchStatus from "../components/Search/SearchStatus"
import SearchTitle from "../components/Search/SearchTitle"
import SearchAuthor from "../components/Search/SearchAuthor"
import SearchGenre from "../components/Search/SearchGenre"

// Defines Functions to return Search-related Components
export default function Search() {
  return (
    <div className="app-container">
      <h2>Search Content Management System (CMS)</h2>
      <SearchStatus />
      <SearchGenre />
      <SearchTitle />
      <SearchAuthor />
    </div>
    
  );
}
