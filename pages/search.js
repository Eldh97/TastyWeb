import React, { createContext, useContext, useState, useEffect } from "react";
import Prismic from "prismic-javascript";
import { RichText, Date } from "prismic-reactjs";
import { client, linkResolver, hrefResolver } from "../prismic-configuration";
import { Context } from "./index";

const SearchPage = () => {
  const context = useContext(Context);

  return <div>search page</div>;
};

SearchPage.getInitialProps = async context => {
  return {};
};

export default SearchPage;
