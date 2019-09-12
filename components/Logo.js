import React, { useContext } from "react";
import styled from "styled-components";
import Link from "./Link";
import { Context } from "../pages/index";

const LogoStyles = styled.a`
  display: inline-block;
  font-size: 2.5rem;
  text-decoration: none;
  font-weight: 500;
  color: ${props => props.theme.white};
  @media (max-width: 57.25em) {
    display: none;
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

export default Logo;
