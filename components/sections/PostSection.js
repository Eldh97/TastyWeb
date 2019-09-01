import React from "react";
import styled, { keyframes, css } from "styled-components";
import Post from "../Post";
import { getColor } from "../../utils/iconConfig";
import Link from "next/link";
import { MdRotateLeft } from "react-icons/md";



// // What a FUCKING LONG NAME!!

// const Heading = styled.h2`
//   border-bottom: 0.5rem solid  ${props => props.theme.secondaryColor};
//   padding-bottom: 1rem;
//   color: ${props => props.theme.primaryColor};
//   font-weight: 500;
//   display: inline-block;
//   /* margin-left: 50%;
//   transform: translateX(-50%); */
//   text-transform: capitalize;
// `;



const IconStyles = styled(MdRotateLeft)`
  font-size: 2.5rem;
`;
const PostSection = ({ heading, posts }) => {
  const renderedPosts = posts.map(post => {
    return <Post key={post.id} post={post} heading={heading} />;
  });
  return (
    <PostSectionStyles>
      <Heading heading={heading}>{heading}</Heading>
      <PostList>{renderedPosts}</PostList>
      <Link href="/">
        <Read>
          <span>Read More</span>
        </Read>
      </Link>
    </PostSectionStyles>
  );
};

export default PostSection;
