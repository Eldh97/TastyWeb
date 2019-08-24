import React, { useState, useEffect, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { Context } from "../pages/index";
import SearchStyles from "./styles/SearchStyles";
import { linkResolver, hrefResolver } from "../prismic-configuration";

function handleChange(term) {
  setTerm(term);
}

const Search = ({ stars }) => {
  // Create a consumer for fetching data
  const context = useContext(Context);
  const [term, setTerm] = useState("");
  useEffect(() => {
    // context.toggleSearch();
  }, []);
  return (
    <SearchStyles
      onSubmit={evt => {
        evt.preventDefault();
        context.getTerm(term);
        setTerm(" ");
      }}
    >
      <input
        onChange={evt => {
          setTerm(evt.target.value);
        }}
        placeholder="e.g. react"
        type="text"
        value ={term}

      />
      <FaSearch className="search-icon" />
    </SearchStyles>
  );
};

export default Search;
