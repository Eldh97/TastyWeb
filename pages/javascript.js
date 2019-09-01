import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Prismic from "prismic-javascript";
import { RichText, Date } from "prismic-reactjs";
import { client, linkResolver, hrefResolver } from "../prismic-configuration";
import Layout from "../layouts/Layout";
import Post from "../components/Post";
import PostList from "../layouts/lists/PostList";
import Heading from "../components/Heading";
import { Next, Prev, BtnContainer } from "../components/Pagination";

const Tutorials = styled.section`
  min-height: 60vh;
  justify-content: center;
  padding: 13rem 0;
  text-align: left;
  color: ${props => props.theme.primaryColor};
`;

// Rendering
const javascriptPage = ({ initialPosts }) => {
  const [pagination, setPagination] = useState(0);
  const [posts, setPosts] = useState([...initialPosts.results]);
  const [isSearch, setIsSearch] = useState(false);

  const handleNext = () => {
    const newPagination = pagination + 9 + 1;

    if (posts.length !== 0) {
      fetchData(newPagination);
    }
  };
  const handlePrev = async () => {
    const newPagination = pagination - 9 - 1;
    if (newPagination >= 0) {
      fetchData(newPagination);
    }
  };
  const fetchData = async newPagination => {
    const letters = /^[A-Za-z]+$/;
    const data = await client.query(
      Prismic.Predicates.at("document.tags", ["react"]),
      {
        pageSize: 9,
        page: newPagination
      }
    );
    setPagination(newPagination);
    setPosts(data.results);
    console.log("⛽", data);
  };

  const renderedPosts = posts.map(post => {
    return <Post key={post.id} post={post} />;
  });
  return (
    <Layout>
      <Tutorials>
        <Heading>All the Things</Heading>
        <PostList>{renderedPosts}</PostList>
        <BtnContainer>
          {pagination > 1 ? (
            <Prev
              onClick={() => {
                handlePrev();
              }}
            >
              Prev
            </Prev>
          ) : (
            ""
          )}
          {posts.length !== 0 ? (
            <Next
              onClick={() => {
                handleNext();
              }}
            >
              Next
            </Next>
          ) : (
            ""
          )}
        </BtnContainer>
      </Tutorials>
    </Layout>
  );
};

javascriptPage.getInitialProps = async context => {
  try {
    // const post = await client.getByUID("document.type");
    const initialPosts = await client.query(
      Prismic.Predicates.at("document.tags", ["javascript"])
    );
    console.log("⛹", initialPosts);
    return { initialPosts };
  } catch (e) {
    console.log(e);
  }
};

export default javascriptPage;
