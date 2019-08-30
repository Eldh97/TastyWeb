import React from "react";
import { client, linkResolver, hrefResolver } from "../prismic-configuration";
import styled, { css } from "styled-components";
import { DiReact, DiJavascript1 } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import PostStyles from "./styles/PostStyles";
import Tags from "./Tags";
import Link from "next/link";



const Post = ({ post }) => {
  return (
    <Link
      href={hrefResolver(post)}
      as={linkResolver(post)}
      key={post.uid}
      passHref
      prefetch
    >
      <PostStyles heading={post.tags[0]}>
        <div />
        <div className="heading">
          <h2>{post.uid.replace(new RegExp("\\-", "g"), " ")}</h2>
        </div>
      </PostStyles>
    </Link>
  );
};

export default Post;
