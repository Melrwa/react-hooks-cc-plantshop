import React from "react";

// Search component allows users to search for plants by name
function Search({ onSearchChange }) {
  return (
    <div className="searchbar">
      {/* Label for the search input field */}
      <label htmlFor="search">Search Plants:</label>

      {/* Input field where users type to search for plants */}
      <input
        type="text" 
        id="search" 
        placeholder="Type a name to search..." 
        // When the user types in the input field, it triggers the onSearchChange function passed as a prop
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
