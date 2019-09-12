import styled from "styled-components"

const NavStyles = styled.nav`
  display:none;
  /* display: inline-block; */
  width: 46%;
  margin-left: 4rem;
  color: ${props => props.theme.white};
  ul {
    list-style: none;
    display: inline-flex;
    height: 100%;
    width: 75%;
    display: inline-flex;
    align-items: center;
    /* background: grey; */

    li {
      position: relative;
      margin-right: 2rem;
    }
    li a {
      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -0.3rem;
        width: 0rem;
        border-bottom: 0.2rem solid ${props => props.theme.secondaryColor};
        transition: all 0.2s ease-in-out;
      }

      &:hover {
        &::before {
          width: 100%;
        }
      }
    }
    a {
      color: inherit;
      text-decoration: none;
    }
  }
`
export default NavStyles
