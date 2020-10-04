import React, { useState } from "react";
import './Searchbar.css';

function Searchbar({ onSubmit }) {
  const [searchText, setSearchText] = useState("");

  const onEnter = ((e)=>{
      if(e.key === 'Enter')
      {
        onSubmit(searchText);
      }
  });

  return (
    <div className="container-searchbar">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        onKeyPress={onEnter} className="search-input"
      />
      <button onClick={onSubmit} className="search-btn">Search</button>
    </div>
  );
}

export default Searchbar;
