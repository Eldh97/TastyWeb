import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeaderStyles from "./styles/HeaderStyles";
import Search from "./Search";
import Logo from "./Logo";
import Nav from "./Nav";
import NavMobile from "./NavMobile";


const Header = props => {
  return (
    <HeaderStyles>
      {props.isSearch && <></>}
      <NavMobile/>
      <Logo />
      <Nav />
      <Search />
    </HeaderStyles>
  );
};

export default Header;
