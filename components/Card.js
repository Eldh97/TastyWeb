import React from "react";
import styled from "styled-components";
import { IoIosTime } from "react-icons/io";
import { client, linkResolver, hrefResolver } from "../prismic-configuration";
import Link from "next/link";
import CardStyles from "./styles/CardStyle";
import Read from "./Read";

const StyledDate = styled(IoIosTime)`
  color: ${props => props.theme.white};

  margin-right: 0.6rem;
`;

const Card = ({ post }) => {
  // Regular Expression for removing the -
  const reg = new RegExp("\\-", "g");

  return (
    <Link
      href={hrefResolver(post)}
      as={linkResolver(post)}
      key={post.uid}
      passHref
      prefetch
    >
      <CardStyles>
        <div>
          <StyledDate />
          <span>19 Aug, 2019</span>
        </div>
        <h2>{post.uid.replace(reg, " ")}</h2>
      </CardStyles>
    </Link>
  );
};

export default Card;
