import React from "react";
import styled from "styled-components";
const FormStyles = styled.div`
  background-color: ${props => props.theme.lightblue};
  text-align: center;
  padding: 3rem;
  color: ${props => props.theme.white};
  h2 {
    font-weight: 400;
  }
  form {
    margin-top: 1rem;

    width: 100%;
    display: inline-block;
    input {
      height: 3rem;
      width: 70%;
      border: none;
      padding-left:1rem;
      &,
      &:visited,
      &:focus {
        outline: none;
      }
    }
    button {
      height: 3rem;
      width: 30%;
      border: none;
      background-color: ${props => props.theme.primaryColor};
      font-weight: 500;
    }
  }
`;
const Form = () => {
  return (
    <FormStyles>
      <h2>Update yourself with latest news</h2>
      <form action="/email/" method="post" >
        <input type="email" placeholder="myEmail@gmail.com"/>
        <button type="submit">SUBSCRIBE</button>
      </form>
    </FormStyles>
  );
};

export default Form;
