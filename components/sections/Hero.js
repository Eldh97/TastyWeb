import React from "react"
import styled from "styled-components"

const HeroStyles = styled.section`
  text-align: center;
  margin-top: 10rem;
  color: ${props => props.theme.white};
  height: 30vh;
  .heading-box {
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
`

const Hero = () => {
  return (
    <HeroStyles>
      <div className="heading-box">
        <h1 className="primary-heading">Tasty Wb Development</h1>
        <h2 className="secondary-heading">
          Javascript, React, CSS, Node, Express...
        </h2>
      </div>
    </HeroStyles>
  )
}

export default Hero
