import React, { useState, useEffect, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { Context } from "../pages/index";
import SearchStyles from "./styles/SearchStyles";
import { linkResolver, hrefResolver } from "../prismic-configuration";

function handleChange(term) {
  setTerm(term);
}

const Search = ({ stars }) => {
  const [term, setTerm] = useState("");

  const context = useContext(Context);

  // Handlers

  const handleSubmit = evt => {
    evt.preventDefault();
    context.getTerm(term);
    setTerm("");
  };

  return (
    <SearchStyles
      onSubmit={evt => {
        handleSubmit(evt);
      }}
    >
      <input
        onChange={evt => {
          setTerm(evt.target.value);
        }}
        placeholder="e.g. react"
        type="text"
        value={term}
      />
        <FaSearch className="search-icon" />
    </SearchStyles>
  );
};

export default Search;
