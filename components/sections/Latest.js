import React from "react";
import Post from "../Post";
import styled from "styled-components";

const LatestSectionStyles = styled.section`
  height: 100vh;
  /* background-color: ${props => props.theme.primaryColor}; */
  
`;

const Heading = styled.h2`
  border-bottom: 0.5rem solid ${props => props.theme.secondaryColor};
  padding-bottom: 1rem;
  color: ${props => props.theme.primaryColor};
  font-weight: 400;
  font-style:italic;
  display: inline-block;
  margin-left: 50%;
  transform: translateX(-50%);
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
  & > * {
    /* border: 1px dashed red; */
  }
`;
const Latest = ({posts}) => {
  const renderedPosts = posts.map(post => {
    return <Post key={post.id} post={post} />;
  });
  return (
    <LatestSectionStyles>
      <Heading>Latest Posts</Heading>
      <PostList>{renderedPosts}</PostList>
    </LatestSectionStyles>
  );
};

export default Latest;
