import styled from "styled-components";
const HeaderStyles = styled.header`
  padding: 0 3.5rem;
  display: flex;
  height: 7rem;
  align-items: center;
  justify-content:space-between;
  position: relative;
  z-index: 12;
  width:100%;
  @media (max-width: 57.25em) {
    position: fixed;
    top:0;
    left:0;
    background-color: ${props => props.theme.primaryColor};

  }
`;
export default HeaderStyles;
