import styled from "styled-components";

const PathList = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 9rem;
  list-style: none;


  @media (max-width: 89em) {
    width: 90%;
    
  }
  @media (max-width: 64em) {
    width: 62%;
    min-height:40vh;
    flex-direction: column;
    justify-content: space-between;    
    align-items: center;
    & > * {
      flex-basis: 30%;
    }
  }
  @media (max-width: 57.25em) {
    & > * {
      flex-basis: 26%;
    }
  }
`;
export default PathList;
