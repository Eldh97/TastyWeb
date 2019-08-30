import React from "react";
import styled from "styled-components";
import Path from "../../components/Path";

const PathSectionStyles = styled.section`
  position: relative;
  width: 80%;
  height: 50vh;
  margin-left: 50%;
  margin-top: 10rem;
  transform: translateX(-50%);
  margin-bottom: 10rem;
  
  border-radius: 1rem;
  color: ${props => props.theme.white};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-weight: 500;
    font-size: 3.4rem;
    font-style: italic;
  }
`;

const PathSection = () => {
  return (
    <PathSectionStyles>
      <h3>What you want to learn ?</h3>
      <PathList>
        <Path path="javascript" />
        <Path path="react" />
        <Path path="vue" />
      </PathList>
    </PathSectionStyles>
  );
};

export default PathSection;
