import styled from "styled-components";

const ArticleStyles = styled.article`
  width: 35%;
  margin-left: 50%;
  transform:translateX(-50%);
  padding-bottom: 3rem;
  margin-top: 10rem;
  color: ${props => props.theme.white};
  img {
    width: 80%;
    display: block;
    margin-bottom: 9rem;
    border-radius: 1rem;
  }
  span {
    font-size: 1.4rem;
  }
  h1 {
    font-weight: 500;
    color: ${props => props.theme.primaryColor};
    margin-bottom: 3rem;
    font-size: 4rem;
  }
  p {
    color: ${props => props.theme.white};
    max-width:38em;
    line-height:1.6;
    font-size:1.8rem;
  }
  hr {
    width: 100%;
    height: 0.5rem;
    background-color: ${props => props.theme.lightblue};
    border:none;
    margin: 4rem 0;
  }
`;
export default ArticleStyles;
