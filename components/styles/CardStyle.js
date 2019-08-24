import styled from "styled-components";
const CardStyles = styled.a`
  box-shadow: 1.2rem 1.2rem ${props => props.theme.primaryColor};
  padding:6rem;
  background-color: #1d1d1d;
  text-align:left;
  text-decoration:none;
  div {
    color: ${props => props.theme.white};
    display : flex;
    width: 50%;
    align-items:center;
    
    font-size:1.6rem;
  }
  h2 {
    /* text-align:left; */
    font-weight: 600;
    color: ${props => props.theme.white};
    padding-top:2rem;
    font-size: 2.8rem;
    width:100%;
    display:inline-block;
  }
  
`;
export default CardStyles;
