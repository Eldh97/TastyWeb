import styled from "styled-components";
export const Next = styled.button`
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

export const Prev = styled(Next)`
  margin-right: 2rem;
`;

export const BtnContainer = styled.div`
  margin-top: 6rem;
  text-align: center;
`;
