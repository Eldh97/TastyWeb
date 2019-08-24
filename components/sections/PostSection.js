import React from "react"
import styled from "styled-components"
import Post from "../Post"
import { getColor } from "../../utils/iconConfig";

// What a FUCKING LONG NAME!!
const PostSectionStyles = styled.section`
  min-height: 60vh;
  justify-content: center;
  padding: 13rem 0;
  color: ${props => props.theme.primaryColor};
  .heading {
  }
`
const Heading = styled.h2`
  border-bottom: 0.5rem solid ${props => getColor(props.heading)};
  padding-bottom: 1rem;
  color: ${props => getColor(props.heading)};
  font-weight: 500;
  display: inline-block;
  margin-left: 50%;
  transform: translateX(-50%);
  text-transform:capitalize;
`
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
  & >  * {
    /* border: 1px dashed red; */

  }

`
const PostSection = ({heading, posts}) => {
  const renderedPosts = posts.map(post => {
    return <Post key={post.id} post={post} heading={heading}/>
  })
  return (
    <PostSectionStyles>
      <Heading heading ={heading}>{heading}</Heading>
      <PostList>
      {renderedPosts}

      </PostList>
    </PostSectionStyles>
  )
}

export default PostSection
