import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeaderStyles from "./styles/HeaderStyles";
import Search from "./Search";
import Logo from "./Logo";
import Nav from "./Nav";

const mobileSearch = styled.form`
  position: absolute;
  top:0;
  left:0;
  height:100%;
  
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
    @media(max-width: 57.25em) {
      /* display:none; */
    }

  }

`
const Header = (props) => {
  return (
    <HeaderStyles>
      {props.isSearch && (
        <>
        input
        
        </>
      )}
      <Logo />
      <Nav />
      <Search />
    </HeaderStyles>
  );
};

export default Header;
