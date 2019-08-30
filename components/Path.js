import React from "react";
import PathStyles from "./styles/PathStyles";
import { DiReact, DiJavascript1 } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import Link from "./Link";


const renderedIcon = path => {
  if (path === "javascript") {
    return <DiJavascript1 className="icon icon--javascript" />;
  } else if (path === "react") {
    return <DiReact className="icon icon--react" />;
  }
  return <FaVuejs className="icon icon--vue" />;
};
const Path = props => {
  return (
    <Link passHref href="/">
      <PathStyles>
        <span className="icon-container">{renderedIcon(props.path)}</span>
        <span className="item-heading">{props.path}</span>
      </PathStyles>
    </Link>
  );
};

export default Path;
