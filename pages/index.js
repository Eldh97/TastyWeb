import React, { useState, createContext, useEffect } from "react";
import styled from "styled-components";
import Router from "next/router";
import Prismic from "prismic-javascript";
import { RichText, Date } from "prismic-reactjs";
import { client, linkResolver, hrefResolver } from "../prismic-configuration";
import Breadcrumb from "../components/Breadcrumb";
import Search from "../components/Search";
import Layout from "../layouts/Layout";
import Hero from "../layouts/sections/HeroSection";
import PathSection from "../layouts/sections/PathSection";
import Latest from "../layouts/sections/LatestSection";
import PostSection from "../layouts/sections/PostSection";
import CardSection from "../layouts/sections/CardSection";

const paths = {
  javascript: "javascript",
  react: "react",
  vue: "vue"
};

// Create a context
export const Context = createContext();

const BlogHome = ({ home, latest, tags }) => {
  const [posts, setPosts] = useState(["vue"]);
  const [isSearch, setIsSearch] = useState(false);

  return (
    <Context.Provider
      value={{
        getTerm: async term => {
          const letters = /^[A-Za-z]+$/;
          
          if (term.match(letters)) {
            const data = await client.query([
              Prismic.Predicates.fulltext("document", term)
            ]);
            setPosts({ ...data });
            if (term) setIsSearch(true);
          }
        },
        concelSearch: () => {
          setIsSearch(false);
        },
        startSearch: () => setIsSearch(true)
      }}
    >
      {(isSearch && (
        <Layout isSearch ={isSearch}>
          <CardSection posts={posts.results} />
        </Layout>
      )) || (
        <Layout>
          <Hero />
          <Latest posts={latest.results} />
          <PathSection />
          <PostSection heading="javascript" posts={tags.javascript.results} />
          <PostSection heading="react" posts={tags.react.results} />
          <PostSection heading="vue" posts={tags.vue.results} />
        </Layout>
      )}
    </Context.Provider>
  );
};

BlogHome.getInitialProps = async context => {
  try {
    const home = await client.getSingle("blog_home");

    const latest = await client.query(
      Prismic.Predicates.at("document.type", "post")
    );

    const javascript = await client.query(
      Prismic.Predicates.at("document.tags", ["javascript"])
    );

    const react = await client.query(
      Prismic.Predicates.at("document.tags", ["react"])
    );

    const vue = await client.query(
      Prismic.Predicates.at("document.tags", ["vue"])
    );
    const tags = {
      javascript,
      react,
      vue
    };
    return { home, latest, tags };
  } catch (e) {
    console.error(e);
  }
};

export default BlogHome;
