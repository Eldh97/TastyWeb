import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from "./Header";
import Link from "./Link";
import Breadcrumb from "./Breadcrumb";
// require("typeface-nunito-sans")
import Footer from './sections/Footer'
// Global Variables
const theme = {
  primaryColor: "#5AEAB6",
  secondaryColor:"#3687F4",
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
    }
    
    body {
        box-sizing: border-box;
        font-size:1.8rem;
        font-family: Nunito;
        
        background-color: ${theme.lightblack};
    }

`;

const Layout = props => (
  <ThemeProvider theme={theme}>
    <div>
      <Header />
      <Breadcrumb />
      {props.children}
      <Footer/>
      <GlobalStyle />
    </div>
  </ThemeProvider>
);

export default Layout;
