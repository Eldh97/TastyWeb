import React from "react";
import Link from "./Link";
import NavStyles from "./styles/NavStyles";
const Nav = () => (
  <NavStyles>
    <ul>
      <li>
        <Link href="/tutorials/">
          <a>Tutorials</a>
        </Link>
      </li>
      <li>
        <Link href="/tools/">
          <a>Tools</a>
        </Link>
      </li>
    </ul>
  </NavStyles>
);
export default Nav;
