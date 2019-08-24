import React from "react";
import { IoLogoTwitter, IoIosLink } from "react-icons/io";
import styled from "styled-components";
import Link from "next/link";
const ShareStyles = styled.article`
  width: 10rem;
  span {
    color: ${props => props.theme.white};
    display: block;
    margin-bottom: 0.7rem;
    font-size: 1.8rem;
    font-weight: 400;
    font-style: italic;
  }
  div {
    width: 44%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > * {
      color: ${props => props.theme.primaryColor};
      flex-basis: 40%;
    }
  }
`;

const Share = () => {
  return (
    <ShareStyles>
      <span>Share</span>
      <div>
        <Link href="/">
          <a><IoLogoTwitter /></a>
        </Link>
        <Link href="/">
          <a><IoIosLink /></a>
        </Link>
      </div>
    </ShareStyles>
  );
};

export default Share;
