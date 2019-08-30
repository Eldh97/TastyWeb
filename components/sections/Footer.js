import React from "react";
import Link from "../Link";
import styled from "styled-components";
import Logo from "../Logo";
import Form from "../Form";
const FooterStyles = styled.footer`
  min-height: 20vh;
  padding: 10rem 0 5rem 0;
  & > * {
    flex-basis: 50%;
  }
  ul {
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme.white};
    width: 80%;
    margin-left: 50%;
    transform: translateX(-50%);
    align-items:center;
    li {
      list-style-type: none;
    }
  }
`;
const Footer = () => {
  return (
    <FooterStyles>
      <ul>
        <li>
          <div>
            <Logo />
            <p>TastyWeb is a learning platform for web development</p>
          </div>
        </li>
        <li>
          <div>
            <Form />
          </div>
        </li>
      </ul>
    </FooterStyles>
  );
};

export default Footer;
