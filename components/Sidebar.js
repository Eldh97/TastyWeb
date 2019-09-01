import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Router from "next/router";
import Link from "next/link";
import {
  DiVisualstudio,
  DiTerminal,
  DiGithubBadge,
  DiChrome
} from "react-icons/di";
import { FaTwitter } from "react-icons/fa";

const SidebarStyles = styled.nav`
  flex-basis: 25%;
  height: 100%;
  padding: 4rem 5rem;
  border: 1rem solid ${props => props.theme.secondaryColor};
  border-radius: 2rem;
  overflow: auto;
  color: ${props => props.theme.primaryColor};

  div {
    margin-bottom: 8rem;
    text-align: center;
  }

  img {
    height: 100%;
    border-radius: 50rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li {
    margin-bottom: 5rem;
    cursor: pointer;

    .icon {
      font-size: 2.8rem;
      margin-right: 1rem;
    }
  }

  a {
    font-weight: 400;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: row;
    align-items: center;

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
