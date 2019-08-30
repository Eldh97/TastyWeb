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
`;

export default PostList;