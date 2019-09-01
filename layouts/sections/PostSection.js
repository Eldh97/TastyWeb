import React from "react";
import styled, { keyframes, css } from "styled-components";
import { MdRotateLeft } from "react-icons/md";
import Link from "next/link";
import Post from "../../components/Post";
import {PostHeading} from "../../components/Heading";
import PostList from "../lists/PostList";
import { getColor } from "../../utils/iconConfig";

const IconStyles = styled(MdRotateLeft)`
  font-size: 2.5rem;
`;

const Read = styled.a`
  display: inline-block;
  position: relative;
  margin-left: 50%;
  transform: translateX(-50%);
  border: 0.4rem solid  ${props => props.theme.secondaryColor};
  cursor: pointer;
  text-transform: capitalize;
  text-align: center;
  text-decoration: none;
  color:  ${props => props.theme.secondaryColor};
  margin-top:8rem;
  align-items: center;
  padding: 1.2rem 3rem;
  
  &:hover {
  }

  & > * {
    flex-basis: 48%;
  }

`;

const PostSectionStyles = styled.section`
  margin-top: 20rem;
  min-height: 60vh;
  justify-content: center;
  padding: 13rem 0;
  /* text-align: center; */
  color: ${props => props.theme.primaryColor};
`;
const PostSection = ({ heading, posts }) => {
  const renderedPosts = posts.map(post => {
    return <Post key={post.id} post={post} heading={heading} />;
  });
  return (
    <PostSectionStyles>
      <PostHeading heading={heading}>{heading}</PostHeading>
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
