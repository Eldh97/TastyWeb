import styled from "styled-components"
import Link from "../Link"
const PathStyles = styled.a`
  flex-basis: 30%;

  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${props => props.theme.white};
  height: 9rem;
  /*As a container*/
  display: flex;
  align-items: center;
  text-align: center;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  &,
  &:visited,
  &:focus {
    text-decoration: none;
    color: ${props => props.theme.black};
  }

  &:hover {
    box-shadow: 0.2rem 0.3rem 2rem ${props => props.theme.shadow};
    transform: translateY(-0.8rem);
  }

  .icon-container {
    background-color: ${props => props.theme.black};
    height: 100%;
    flex-basis: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon {
    display: inline-block;
    width: 4rem;
    height: 10rem;
    &--javascript {
      color: ${props => props.theme.jsColor};
    }
    &--react {
      color: ${props => props.theme.reactColor};
    }
    &--vue {
      color: ${props => props.theme.vueColor};
    }
  }
  .item-heading {
    font-weight: bold;
    text-align: center;
    flex: 1;
    &::first-letter{
      text-transform:uppercase;
    }
  }
`
export default PathStyles
