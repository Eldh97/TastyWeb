import React, { useState, useEffect, useContext } from "react";
import { IoMdMenu } from "react-icons/io";
import styled from "styled-components";
import Link from "./Link";
import { MdClose } from "react-icons/md";
import { Context } from "../pages/index";

const LogoStyles = styled.a`
  display: none;
  font-size: 2.5rem;
  text-decoration: none;
  font-weight: 500;
  color: ${props => props.theme.white};
  margin-left: 50%;
  transform: translateX(-50%);
  @media (max-width: 57.25em) {
    display: inline-block;
    color: ${props => props.theme.black};
  }
`;

function Logo() {
  // Consuming Context
  const context = useContext(Context);

  // Handlers
  const toHomePage = () => {
    if (context != undefined) {
      context.concelSearch();
    }
  };

  return (
    <Link passHref href="/">
      <LogoStyles onClick={() => toHomePage()}>TastyWeb</LogoStyles>
    </Link>
  );
}
const Nav = styled.nav`
  display: none;
  /* height:100rem;
  width:10rem; */
  position: relative;
  z-index: 100;

  @media (max-width: 57.25em) {
    display: inline-block;
    flex: 1;
    display: flex;

    align-items: center;
    color: ${props => props.theme.black};
  }
`;
const Menu = styled.div`
  display: block;
  position: fixed;
  top: 7rem;
  left: 0;
  background-color: ${props => props.theme.primaryColor};
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  z-index: -10;
`;
const List = styled.ul`
  list-style: none;
  margin-top: 3rem;
  margin-left: 50%;
  transform: translateX(-50%);
  text-align: center;
  li {
    margin-bottom: 2rem;
  }
  a {
    text-decoration: none;
    &:link,
    &:visited {
      display: inline-block;
      font-size: 3rem;
      font-weight: 300;
      padding: 1rem 2rem;
      color: ${props => props.theme.black};
      text-decoration: none;
      text-transform: uppercase;
      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        #fee466 50%
      );
      background-size: 220%;
      transition: all 0.4s;

      span {
        margin-right: 1.5rem;
        display: inline-block;
      }
    }

    &:hover,
    &:active {
      background-position: 100%;
      color: $color-primary;
      transform: translateX(1rem);
    }
  }
`;
const Icon = styled(IoMdMenu)`
  color: ${props => props.theme.white};
  width: 3rem;
  height: 3rem;
  @media (max-width: 57.25em) {
    color: ${props => props.theme.black};
  }
`;
const Close = styled(MdClose)`
  color: ${props => props.theme.white};
  width: 3rem;
  height: 3rem;
  @media (max-width: 57.25em) {
    color: ${props => props.theme.black};
  }
`;

const NavMobile = () => {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {};
  return (
    <Nav onClick={() => setIsClick(isClick => !isClick)}>
      {isClick ? (
        <>
          <Close />
          <Menu>
            <List>
              <li>
                <Link href="/tutorials/">
                  <a>Tutorials</a>
                </Link>
              </li>
              <li>
                <Link href="/tools/">
                  <a>Tools</a>
                </Link>
              </li>
            </List>
          </Menu>
          <Logo />
        </>
      ) : (
        <>
          <Icon />
          <Logo />
        </>
      )}
    </Nav>
  );
};

export default NavMobile;
