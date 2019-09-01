import React, { useState, useEffect } from "react";
import { RichText, Date } from "prismic-reactjs";
import { client } from "../prismic-configuration";
import Link from "next/link";
import Article from "../components/Article";
import Layout from "../layouts/Layout";
import Progress from "../components/Progress";

const Post = props => {
  return (
    <Layout>
      <Progress />
      <Article data={props.post.data} />
    </Layout>
  );
};

Post.getInitialProps = async context => {
  const { uid } = context.query;
  const post = await client.getByUID("post", uid);

  return { post };
};

export default Post;
