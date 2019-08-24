import React from "react";
import styled from "styled-components";
import Link from "next/link";
const ReadStyles = styled.a`
  padding: 1.3rem 2.5rem;
  display:inline-block;
  border-radius: 50rem;
  color: ${props => props.theme.lightblue};
  outline: none;
  border: none;
  background-color: ${props => props.theme.white};
  cursor: pointer;
`;
const Read = () => {
  return (
    <Link href="/">
      <ReadStyles>Read More</ReadStyles>
    </Link>
  );
};

export default Read;
