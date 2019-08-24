import styled from "styled-components";
const HeaderStyles = styled.header`
  background-color: ${props => props.theme.primaryColor};
  padding: 0 3.5rem;
  display: flex;
  height: 7rem;
  align-items: center;
`;
export default HeaderStyles;
