import React from "react";
import HeaderStyles from "./styles/HeaderStyles";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import Breadcrumb from "./Breadcrumb";
import Search from "./Search";
import Logo from "./Logo";
import Nav from './Nav'

const Header = () => {
  return (
    <HeaderStyles>
      <Logo  />
      <Nav />
      <Search/>
    </HeaderStyles>
  );
};

export default Header;
