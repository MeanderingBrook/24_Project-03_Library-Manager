// // Imports required React Modules
// import React, { useState } from 'react';
// import axios from 'axios';

// const SearchComponent = ({ searchInput, onSearch }) => {
//   const [input, setInput] = useState(searchInput);

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/cms/search?q=${input}`);
//       console.log(response.data); // Handle results as needed
//     } catch (error) {
//       console.error('Search error:', error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => {
//           handleInputChange(e);
//           onSearch(e.target.value); // Updates parent state
//         }}
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchComponent;