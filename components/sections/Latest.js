import React from "react";
import Post from "../Post";
import styled from "styled-components";

const LatestSectionStyles = styled.section`
  height: 100vh;
  /* background-color: ${props => props.theme.primaryColor}; */
  
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
