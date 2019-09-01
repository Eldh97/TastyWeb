import React from "react";
import Layout from "../../layouts/Layout";
import styled from "styled-components";
import Sidebar from "../../components/Sidebar";
import { Content, Tools } from "./index";
const vscode = () => {
  return (
    <Layout>
      <Tools>
        <Sidebar />
        <Content>
          <h1>VS Code Tools</h1>
          <p>Hi</p>
        </Content>
      </Tools>
    </Layout>
  );
};

export default vscode;
