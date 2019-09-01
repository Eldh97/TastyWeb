import React from "react";
import styled from "styled-components";
import Post from "../../components/Post";
import Heading from "../../components/Heading";
import PostList from "../lists/PostList";

const LatestSectionStyles = styled.section`
  min-height: 100vh;
`;

const LatestSection = ({posts}) => {
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

export default LatestSection;
