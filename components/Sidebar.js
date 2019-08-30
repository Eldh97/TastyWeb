import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import {
  DiVisualstudio,
  DiTerminal,
  DiGithubBadge,
  DiChrome
} from "react-icons/di";
import { FaTwitter } from "react-icons/fa";

const SidebarStyles = styled.nav`
  /* background-color: ${props => props.theme.black}; */
  height: 100%;
  flex-basis: 25%;
  padding: 4rem 5rem;
  /* border-right: .4rem solid ${props => props.theme.primaryColor}; */
  color:${props => props.theme.primaryColor};
  overflow:auto;
  border-radius:2rem;
    border: 1rem solid ${props => props.theme.secondaryColor};
  div {
      text-align:center;
      margin-bottom:8rem;
  }
  img {
      border-radius:50rem;
      border-radius:50rem;
      height: 100%;      
    
  }
  ul {
    list-style: none;
    display:flex;
    flex-direction:column;
    /* height:100%; */
    /* border:1px solid green; */
    
  }
  li {
       
       margin-bottom:5rem;
    cursor: pointer;
    .icon {
        font-size:2.8rem;
        margin-right:1rem;
    }
    }

  a {
    color:inherit;
    text-decoration: none;
    font-weight:400;
    display:flex;
    flex-direction:row;
    /* justify-content:space-between; */
    align-items:center;
  }
  
`;

const Sidebar = ({ getTool }) => {
  return (
    <SidebarStyles>
      <ul>
        <li
          onClick={() =>
            Router.push("/tools/vscode", "vscode", { shallow: true })
          }
        >
          <a>
            <DiVisualstudio className="icon" />
            <span>VS Code</span>
          </a>
        </li>
        <li
          onClick={() =>
            Router.push("/tools/terminal", "terminal", { shallow: true })
          }
        >
          <a>
            <DiTerminal className="icon" />
            <span>Terminal Setup</span>
          </a>
        </li>
        <li
          onClick={() =>
            Router.push("/tools/github", "github", { shallow: true })
          }
        >
          <a>
            <DiGithubBadge className="icon" />
            <span>Github</span>
          </a>
        </li>
        <li
          onClick={() =>
            Router.push("/tools/chrome", "chrome", { shallow: true })
          }
        >
          <a>
            <DiChrome className="icon" />
            Chrome Extensions
          </a>
        </li>
        <li
          onClick={() =>
            Router.push("/tools/twitter", "twitter", { shallow: true })
          }
        >
          <a>
            <FaTwitter className="icon" />
            <span>Twitter</span>
          </a>
        </li>
      </ul>
    </SidebarStyles>
  );
};

export default Sidebar;
