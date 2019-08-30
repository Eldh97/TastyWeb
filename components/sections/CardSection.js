import React, { useContext } from "react";
import styled from "styled-components";


const CardSection = ({ posts }) => {
  const context = useContext(Context);

  const renderedCards = posts.map(post => {
    return <Card  key={post.id} post={post} />;
  });
  return (
    <CardSectionStyles>
      <ConcelSearch onClick={() => context.concelSearch()}>
        Search X
      </ConcelSearch>
      <Heading>Searching</Heading>
      <CardList>{renderedCards}</CardList>
    </CardSectionStyles>
  );
};

export default CardSection;
