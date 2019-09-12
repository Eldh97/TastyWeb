import Link from "next/link";
import styled from "styled-components";
import React from "react";
const StyledLink = styled(Link)`
  &,
  &:visited,
  &:focus {
    text-decoration: none;
  }
  
  color: red;
`;
export default StyledLink;
