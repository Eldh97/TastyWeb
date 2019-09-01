import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../../layouts/Layout";
import Sidebar from "../../components/Sidebar";
import {Content, Tools} from './index'

function twitter() {
  return (
    <Layout>
      <Tools>
        <Sidebar />
        <Content>
          <h1>VS Code Tools</h1>
        </Content>
      </Tools>
    </Layout>
  );
}

export default twitter;
