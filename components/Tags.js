import React from "react";
import styled from "styled-components";

const TagsStyles = styled.ul`
  display: flex;
  
  align-self:end;
  grid-row:3/-1;
  grid-column:1/-1;
  li {
    list-style-type: none;
    background-color: ${props => props.theme.black};
    color: ${props => props.theme.white};
    margin-right:1rem;
    padding: .1rem .3rem;
    border-radius:.5rem;
    font-size: 1.4rem;
  }
`;
const Tags = () => (
    <TagsStyles>
        <li>Vue</li>
        <li>Javascript</li>
        <li>AJAX</li>
    </TagsStyles>
)
  
;

export default Tags;
