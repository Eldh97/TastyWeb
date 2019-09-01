import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from "../components/Header";
import Link from "../components/Link";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "./Footer";

// Global Variables
const theme = {
  primaryColor: "#ff7fb0",
  secondaryColor: "#FEE466",
  bodyColor: "#282C35",
  black: "#1d1d1d",
  lightblack: "#2d2d2d",
  lightblue: "#3687F4",
  white: "#fff",
  reactColor: "#61DAFB",
  vueColor: "#41B883",
  jsColor: "#F7DF1E",
  shadow: "rgba(0,0,0,0.2)",
  grey: "#333333"
};

const GlobalStyle = createGlobalStyle`


    *,
    *::after,
    *::before {
        margin:0;
        padding:0;
        box-sizing:inherit;
    }
    html {
        font-size: 62.5%;

      @media  (max-width: 57.25em) {
        font-size:50.25%;
      } 
      @media (max-width: 45em) {
        font-size:56.25%;
      }
      @media  (max-width:31.57em) {
        font-size: 48%;
      } 
      @media (max-width: 23.56em) {
        font-size: 38%;
      } 

    }
    
    body {
        box-sizing: border-box;
        font-size:1.8rem;
        font-family: Nunito;
        
        background-color: ${theme.bodyColor};
    }

`;

const Layout = props => {
  return (
    <ThemeProvider theme={theme}>
      
      <div>
        <Header isSearch={props.isSearch} />
        {/* <Breadcrumb /> */}
        {props.children}
        {/* <Footer /> */}
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
