import React from "react";
import styled from "styled-components";
import Path from "../Path";
const PathSectionStyles = styled.section`
  height: 70vh;
  width: 100%;
  background-color: ${props => props.theme.lightblue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  color: ${props => props.theme.white};
  .section__heading {
    font-weight: 500;
    font-size: 3.4rem;
    font-style: italic;
  }
`;

const PathList = styled.div`
  margin-top: 9rem;
  width: 80%;
  display: block;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PathSection = () => {
  return (
    <PathSectionStyles>
      <h3 className="section__heading">What you want to learn ?</h3>
      <PathList>
        <Path path="javascript" />
        <Path path="react" />
        <Path path="vue" />
      </PathList>
    </PathSectionStyles>
  );
};

export default PathSection;
