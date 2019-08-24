import React, { useContext } from "react";
import styled from "styled-components";
import Card from "../Card";
import { Context } from "../../pages/index";

// Section Styling 
const CardSectionStyles = styled.section`
  min-height: 60vh;
  justify-content: center;
  padding: 13rem 0;
  color: ${props => props.theme.primaryColor};
  .heading {
  }
`;
const Heading = styled.h2`
  border-bottom: 0.5rem solid ${props => props.theme.secondaryColor};
  padding-bottom: 1rem;
  color: ${props => props.theme.primaryColor};
  font-weight: 500;
  display: inline-block;
  margin-left: 50%;
  transform: translateX(-50%);
  text-transform: capitalize;
`;
const CardList = styled.ul`
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

const ConcelSearch = styled.button`
  padding: 1rem 2rem;
  border-radius: 10rem;
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.primaryColor};
  display: block;
  margin-left: 50%;
  transform: translateX(-50%);
  outline:none;
  border:none;

  margin-bottom:3rem;
  
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
