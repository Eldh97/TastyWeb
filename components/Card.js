import React from "react";
import CardStyles from "./styles/CardStyle";
import Link from "next/link";
import Read from "./Read";
import { IoMdPricetag, IoIosTime } from "react-icons/io";
import styled from "styled-components";
import { client, linkResolver, hrefResolver } from "../prismic-configuration";
// import { IoIosArrowRoundForward } from "react-icons/io";
const StyledTag = styled(IoMdPricetag)`
  color: #f34f97;
  width: 4rem;
  height: 4rem;
  margin-right: 2rem;
`;
const StyledDate = styled(IoIosTime)`
  color: ${props => props.theme.white};

  margin-right: 0.6rem;
`;

const Card = ({ post }) => {

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
        <h2>{post.uid.replace(new RegExp("\\-", "g"), " ")}</h2>
      </CardStyles>
    </Link>
  );
};

export default Card;
