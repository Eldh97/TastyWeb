import React from "react";
import styled, { keyframes, css } from "styled-components";
import Post from "../Post";
import { getColor } from "../../utils/iconConfig";
import Link from "next/link";
import { MdRotateLeft } from "react-icons/md";



// What a FUCKING LONG NAME!!
const PostSectionStyles = styled.section`
  min-height: 60vh;
  justify-content: center;
  padding: 13rem 0;
  text-align: center;
  color: ${props => props.theme.primaryColor};
 
`;
const Heading = styled.h2`
  border-bottom: 0.5rem solid  ${props => props.theme.secondaryColor};
  padding-bottom: 1rem;
  color: ${props => props.theme.primaryColor};
  font-weight: 500;
  display: inline-block;
  /* margin-left: 50%;
  transform: translateX(-50%); */
  text-transform: capitalize;
`;
const PostList = styled.ul`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
  margin-top: 10rem;
  list-style-type: none;
  width: 80%;
  margin-left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }

`;
const Read = styled.a`
  color:  ${props => props.theme.secondaryColor};
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  position: relative;
  display: inline-block;
  border: 0.4rem solid  ${props => props.theme.secondaryColor};
;
  /* background-color: ${props => props.theme.secondaryColor}; */
  align-items: center;

  padding: 1.2rem 3rem;
  &:hover {
  }

  & > * {
    flex-basis: 48%;
    /* border:1px solid red; */
  }

`;

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
