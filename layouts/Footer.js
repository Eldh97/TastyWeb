import React from "react";
import styled from "styled-components";
const FooterStyles = styled.footer`
  display: flex;
  width: 100%;
  height: 16rem;
  text-align: center;
  background-color: ${props => props.theme.primaryColor};
  color:  ${props => props.theme.black};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 2rem;
`;
const Footer = () => {
  return (
    <FooterStyles class="footer">
      <article class="footer__copyright">© 2019 Abdulrahman Alotaibi</article>
    </FooterStyles>
  );
};

export default Footer;
