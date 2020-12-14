import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {

  //state for search term
  const [term, setTerm] = useState("");

  //function to set the term to the value of input tag
  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  //function to pass the term to the onFormSubmit prop
  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
