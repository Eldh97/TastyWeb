import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../../layouts/Layout";
import Sidebar from "../../components/Sidebar";

export const Tools = styled.section`
  display: flex;
  height: 100vh;
  padding: 10rem;
  text-align: center;
  color: ${props => props.theme.white};
`;

export const Content = styled.main`
  flex: 1;
  color: ${props => props.theme.white};
  padding: 0 20rem;
  p {
    color: ${props => props.theme.white};
  }
  h1 {
    color: ${props => props.theme.secondaryColor};
  }
`;

const Heading = styled.h2`
  text-align: center;
`;

const tools = () => {
  return (
    <Layout>
      <Tools>
        <Heading>Soon :)</Heading>
        {/* <Sidebar />
        <Content>
          <h1>VS Code Tools</h1>
        </Content> */}
      </Tools>
    </Layout>
  );
};

export default tools;
