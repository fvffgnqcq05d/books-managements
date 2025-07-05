import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import MySider from './layout/MySider';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NoticePage from './pages/NoticePage';
import Class1English from './components/class1/Class1English';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
        margin: 0,
        padding: 0
      }}>
      <MySider />
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notice" element={<NoticePage />} />
            <Route path="/class-1/english" element={<Class1English />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;