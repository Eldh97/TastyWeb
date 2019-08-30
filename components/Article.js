import React from "react";
import ArticleStyles from "./styles/ArticleStyles";
import { RichText, Date } from "prismic-reactjs";
import { client } from "../prismic-configuration";
import Share from "../components/Share";

const Article = ({ data }) => {
  return (
    <ArticleStyles>
      {/* <img
        src="https://images.unsplash.com/photo-1561883088-039e53143d73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt=""
      /> */}
      <span>{data.date}</span>
      <h1> {RichText.render(data.title)}</h1>
      <p>{RichText.render(data.post_body)}</p>
      <hr />
      <Share />
    </ArticleStyles>
  );
};

export default Article;
