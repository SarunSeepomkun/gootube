import React, { useState } from "react";

function Searchbar({ onSubmit }) {
  const [searchText, setSearchText] = useState("");

  const onEnter = ((e)=>{
      if(e.key === 'Enter')
      {
        onSubmit(searchText);
      }
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        onKeyPress={onEnter}
      />
      <button onClick={onSubmit} >Get</button>
    </div>
  );
}

export default Searchbar;
