import React from "react";
import BreadStyles from "./styles/BreadStyles";
import Link from "next/link";
const Breadcrumb = () => {
  return (
    <BreadStyles>
      <Link href="/">
        <a>React</a>
      </Link>
      <Link href="/">
        <a>Vue</a>
      </Link>
      <Link href="/">
        <a>Javascript</a>
      </Link>
      <Link href="/">
        <a>CSS</a>
      </Link>
      <Link href="/">
        <a>Node</a>
      </Link>
      <Link href="/">
        <a>Express</a>
      </Link>
      <Link href="/">
        <a>MongoDB</a>
      </Link>
    </BreadStyles>
  );
};

export default Breadcrumb;
