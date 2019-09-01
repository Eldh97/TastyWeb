import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeaderStyles from "./styles/HeaderStyles";
import Search from "./Search";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <HeaderStyles>
      <Logo />
      <Nav />
      <Search />
    </HeaderStyles>
  );
};

export default Header;
