import React from 'react';
import { styled } from 'styled-components';
import Header from '../components/Header';

const PageLayout = ({ children }: any) => {
  return (
    <Layout>
      <Header></Header>
      {children}
    </Layout>
  );
};

export default PageLayout;

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;
