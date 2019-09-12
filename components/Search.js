import React, { useState, useEffect, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { Context } from "../pages/index";
import SearchStyles from "./styles/SearchStyles";
import { linkResolver, hrefResolver } from "../prismic-configuration";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

function handleChange(term) {
  setTerm(term);
}
const Close = styled(MdClose)`
  display: none;
  position: absolute;
  right: 4%;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  color: ${props => props.theme.black};
  width: 3.5rem;
  height: 3.5rem;
  z-index:8000;

  @media (max-width: 57.25em) {
    display: inline-block;
  }
`;
const SearchIcon = styled(FaSearch)`
  display: none;
  position: absolute;
  right: 4%;
  top: 50%;
  transform: translateY(-50%);
  width: 2.2rem;
  height: 2.2rem;
  background: none;
  z-index:8000;
  color: ${props => props.theme.black};
  @media (max-width: 57.25em) {
    display: inline-block;
  }
`;

const MobileSearch = styled.div`
  width: 100vw;
  height: 23vh;
  background-color: ${props => props.theme.primaryColor};
  position: absolute;
  top: 7rem;
  left: 0;
  z-index: 200;
  form {
    display: inline-block;
    position: relative;
    height: 6.6rem;
    width: 60%;
    margin-left: 50%;
    margin-top: 3%;
    transform: translateX(-50%);
    position: relative;
  }
  input {
    color: grey;
    border-radius: 0.2rem;
    background-color: ${props => props.theme.black};
    padding: 1rem;
    width: 100%;
    border: none;
    height: 100%;
    &:focus,
    &:active {
      outline: none;
    }
  }

  .search-icon {
    color: grey;
    position: absolute;
    right: 4%;
    top: 50%;
    transform: translateY(-50%);
    width: 1.6rem;
    background: none;
    &,
    &:focus,
    &:visited {
      outline: none;
      border: none;
    }
  }
`;
const Search = () => {
  const [term, setTerm] = useState("");
  const [isClick, setIsClick] = useState(false);

  const context = useContext(Context);

  // Handlers
  const handleIconClick = () => {
    setIsClick(isClick => !isClick);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    context.getTerm(term);
    setTerm("");
  };

  return (
    <>
      <SearchStyles
        onSubmit={evt => {
          handleSubmit(evt);
        }}
      >
        {/* <label htmlFor=""></label> */}
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
      {!isClick ? (
          <SearchIcon onClick={() => setIsClick(isClick => !isClick)} />
      ) : (
        <>
          <Close onClick={() => setIsClick(isClick => !isClick)} />
          <MobileSearch>
            <form
              onSubmit={evt => {
                handleSubmit(evt);
              }}
            >
              {/* <label htmlFor=""></label> */}
              <input
                onChange={evt => {
                  setTerm(evt.target.value);
                }}
                placeholder="e.g. react"
                type="text"
                value={term}
              />
              <FaSearch className="search-icon" />
            </form>
          </MobileSearch>
        </>
      )}
    </>
  );
};

export default Search;
