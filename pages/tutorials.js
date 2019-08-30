import React, { useContext, useState, useEffect } from "react";
import Prismic from "prismic-javascript";
import { RichText, Date } from "prismic-reactjs";
import { client, linkResolver, hrefResolver } from "../prismic-configuration";
import Layout from "../components/Layout";
import Post from "../components/Post";
import styled from "styled-components";

// Styling
const Prev = styled.button`
  color: ${props => props.theme.secondaryColor};
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  position: relative;
  display: inline-block;
  border: 0.4rem solid ${props => props.theme.secondaryColor};
  padding: 1.4rem 3.3rem;
  background: none;
  margin-right: 2rem;
  &:focus {
    border: 0.4rem solid ${props => props.theme.primaryColor};
    outline: none;
    color: ${props => props.theme.primaryColor};
  }
`;
const Next = styled.button`
  color: ${props => props.theme.secondaryColor};
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  position: relative;
  display: inline-block;
  border: 0.4rem solid ${props => props.theme.secondaryColor};
  background: none;
  padding: 1.4rem 2.3rem;
  &:focus {
    border: 0.4rem solid ${props => props.theme.primaryColor};
    outline: none;
    color: ${props => props.theme.primaryColor};
  }
`;
const BtnContainer = styled.div`
  text-align: center;
`;

const Tutorials = styled.section`
  min-height: 60vh;
  justify-content: center;
  padding: 13rem 0;
  text-align: center;
  color: ${props => props.theme.primaryColor};
`;
const Heading = styled.h2`
  border-bottom: 0.5rem solid ${props => props.theme.secondaryColor};
  padding-bottom: 1rem;
  color: ${props => props.theme.primaryColor};
  font-weight: 500;
  display: inline-block;
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
  padding-bottom: 9rem;
  @media (max-width: 1033px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
`;

// Rendering
const tutorials = ({ initialPosts }) => {
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
      Prismic.Predicates.at("document.type", "post"),
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

tutorials.getInitialProps = async context => {
  try {
    // const post = await client.getByUID("document.type");
    const initialPosts = await client.query(
      Prismic.Predicates.at("document.type", "post"),
      {
        pageSize: 9,
        page: 1
      }
    );
    console.log("⛹", initialPosts);
    return { initialPosts };
  } catch (e) {
    console.log(e);
  }
};

export default tutorials;
