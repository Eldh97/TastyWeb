import React, { useContext } from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import { Context } from "../../pages/index";
import CardList from "../lists/CardList";
import Heading from "../../components/Heading";

// Styling
const CardSectionStyles = styled.section`
  min-height: 60vh;
  justify-content: center;
  padding: 13rem 0;
  color: ${props => props.theme.primaryColor};
`;

// Concel Search Button Styling
const ConcelSearch = styled.button`
  padding: 1rem 2rem;
  border-radius: 10rem;
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.primaryColor};
  display: block;
  margin-left: 50%;
  transform: translateX(-50%);
  outline: none;
  border: none;

  margin-bottom: 3rem;
`;

const CardSection = ({ posts }) => {
  const context = useContext(Context);

  const renderedCards = posts.map(post => {
    return <Card key={post.id} post={post} />;
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
