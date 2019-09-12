import React, { useContext } from "react";
import styled from "styled-components";
import Link from "./link";
import { Context } from "../pages/index";

const LogoStyles = styled.a`
  /* display: inline-block; */
  display:none;
  font-size: 2.5rem;
  text-decoration: none;
  font-weight: 500;
  color: ${props => props.theme.white};
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
