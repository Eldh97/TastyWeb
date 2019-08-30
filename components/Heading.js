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
export default Heading;