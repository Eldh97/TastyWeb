import React, { createContext, useContext, useState, useEffect } from "react";
import Prismic from "prismic-javascript";
import { RichText, Date } from "prismic-reactjs";
import { client, linkResolver, hrefResolver } from "../prismic-configuration";
import { Context } from "./index";



const SearchPage = () => {
  const context = useContext(Context);
  // const [posts, setPosts] = useState([]);
  console.log("⛳", context);

  return <div>search page</div>;
};

SearchPage.getInitialProps = async context => {
  // const term = useContext(SearchContext).getTerm();

  return {};
};

export default SearchPage;
