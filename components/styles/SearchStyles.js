import styled from "styled-components";

const SearchStyles = styled.form`
  display: inline-block;
  margin-left: auto;
  position: relative;
  height: 3.6rem;
  width: 16%;

  input {
    color: grey;
    border-radius: 0.2rem;
    background-color: ${props => props.theme.black};
    padding: 1rem;
    width: 100%;
    border: none;
    height: 100%;
    &:focus,
    &:active {
      outline: none;
    }
    @media(max-width: 57.25em) {
      display:none;
    }

  }
 
  .search-icon {
    color: grey;
    position: absolute;
    right: 4%;
    top: 50%;
    transform: translateY(-50%);
    width: 1.6rem;
    background:none;
    &,
    &:focus,
    &:visited {
      outline:none;
      border: none;
    
  }
  @media(max-width: 57.25em) {
      height:2.3rem;
      width:2.3rem;
    }
  }
`;
export default SearchStyles;
