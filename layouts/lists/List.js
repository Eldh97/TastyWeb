import styled from "styled-components";

const List = styled.ul`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
  margin-top: 10rem;
  list-style-type: none;
  width: 80%;
  margin-left: 50%;
  transform: translateX(-50%);
  text-align: left;

  @media (max-width: 89em) {
    width:90%;
  } 
  @media (max-width: 64em) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap:4rem;

  } 
  @media (max-width: 57.25em) {
    grid-template-columns: repeat(1, .7fr);
    grid-gap:7rem;
    grid-column:1/2;
    justify-content:center;
  } 
  
`;

export default List;