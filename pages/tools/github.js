import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../../layouts/Layout";
import Sidebar from "../../components/Sidebar";
import {Content, Tools} from './index'

const github = () => {
  return (
    <Layout>
      <Tools>
        <Sidebar />
        <Content>
          <h1>VS Code Tools</h1>
          <p>github...</p>
        </Content>
      </Tools>
    </Layout>
  );
};

export default github;
