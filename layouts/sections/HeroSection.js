import React from "react";
import styled from "styled-components";
import { TiFlash } from "react-icons/ti";

const HeroStyles = styled.section`
  min-height: 30vh;
  margin-top: 10rem;
  text-align: center;
  color: ${props => props.theme.white};

  div {
    text-align: center;
    h1 {
      font-weight: 400;
      font-size: 4.4rem;
      line-height: 2;
    }

    h2 {
      font-weight: 400;
      font-size: 2.1rem;
    }
  }
`;

const FlashIcon = styled(TiFlash)`
  color: ${props => props.theme.secondaryColor};
  display: inline-block;
  margin-left: 1rem;
  transform: translateY(20%);
  width: 3rem;
  height: 3rem;
`;
const HeroSection = () => {
  return (
    <HeroStyles>
      <div>
        <h1>Tasty Web Development</h1>
        <h2>
          <span>Javascript, React, CSS, Node, Express</span>
          <span>
            <FlashIcon />
          </span>
        </h2>
      </div>
    </HeroStyles>
  );
};

export default HeroSection;
