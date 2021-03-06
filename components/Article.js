import React from "react";
import ArticleStyles from "./styles/ArticleStyles";
import { RichText, Date } from "prismic-reactjs";
import { client } from "../prismic-configuration";
import Share from "../components/Share";

const Article = ({ data }) => {
  return (
    <ArticleStyles>
      <span>{data.date}</span>
      <h1> {RichText.render(data.title)}</h1>
      <p>{RichText.render(data.post_body)}</p>
      <hr />
      <Share />
    </ArticleStyles>
  );
};

export default Article;
