import React from "react";
import styled from "styled-components";
const FooterStyles = styled.footer`
  display: flex;
  width: 100%;
  height: 16rem;
  text-align: center;
  color:  ${props => props.theme.black};
  background-color: ${props => props.theme.primaryColor};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 2rem;
`;
const Footer = () => {
  return (
    <FooterStyles >
      <article >© 2019 Abdulrahman Alotaibi</article>
    </FooterStyles>
  );
};

export default Footer;
