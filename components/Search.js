import React, { useState, useEffect, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { Context } from "../pages/index";
import SearchStyles from "./styles/SearchStyles";
import { linkResolver, hrefResolver } from "../prismic-configuration";

function handleChange(term) {
  setTerm(term);
}

const Search = ({ stars}) => {
  const context = useContext(Context);

  // Create a consumer for fetching data
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
