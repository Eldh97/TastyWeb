import styled from "styled-components";

const SearchStyles = styled.form`
  margin-right:2rem;

  display: inline-block;
  margin-left: auto;
  position: relative;
  height: 3.6rem;
  width: 16%;
  z-index: 3;
  @media (max-width: 57.25em) {
    display: none;
  }
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
  }

  .search-icon {
    color: grey;
    position: absolute;
    right: 4%;
    top: 50%;
    transform: translateY(-50%);
    width: 1.6rem;
    background: none;
    &,
    &:focus,
    &:visited {
      outline: none;
      border: none;
    }

  }
`;
export default SearchStyles;
