import React, { useContext } from "react";
import styled from "styled-components";
import Link from "./link";
import {Context} from '../pages/index'
const LogoStyles = styled.a`
  display: inline-block;
  color: ${props => props.theme.white};
  font-size: 2.5rem;
  text-decoration: none;
  font-weight: 500;
  color: ${props => props.theme.black};
`;
function Logo() {
  const context = useContext(Context);

  return (
    <Link passHref href="/">
      <LogoStyles onClick={() => context.concelSearch()}>TastyWeb</LogoStyles>
    </Link>
  );
}

export default Logo;
