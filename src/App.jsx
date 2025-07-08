import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import MySider from './layout/MySider';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NoticePage from './pages/NoticePage';
import Class1English from './components/class1/Class1English';
import Class1Hindi from './components/class1/Class1Hindi';
import Class1Math from './components/class1/Class1Math';
import Class2English from './components/class2/Class2English';
import Class2Math from './components/class2/Class2Math';
import Class2Hindi from './components/class2/Class2Hindi';
import Class3Hindi from './components/class3/Class3Hindi';
import Class3Math from './components/class3/Class3Math';
import Class3English from './components/class3/Class3English';
import Class4English from './components/Class4/Class4English';
import Class4Math from './components/Class4/Class4Math';
import Class4Hindi from './components/Class4/Class4Hindi';
import Class5English from './components/Class5/Class5English';
import Class5Math from './components/Class5/Class5Math';
import Class5Hindi from './components/Class5/Class5Hindi';
import Class6English from './components/Class6/Class6English';
import Class6Math from './components/Class6/Class6Math';
import Class6Hindi from './components/Class6/Class6Hindi';
import Class6Socialscience from './components/Class6/Class6Socialscience';
import Class6Science from './components/Class6/Class6Science';
import Class6Sanskrit from './components/Class6/Class6Sanskrit';
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
            <Route path="/class-1/math" element={<Class1Math />} />
            <Route path="/class-1/hindi" element={<Class1Hindi />} />
            <Route path="/class-2/hindi" element={<Class2Hindi />} />
            <Route path="/class-2/math" element={<Class2Math />} />
            <Route path="/class-2/english" element={<Class2English />} />
            <Route path="/class-3/english" element={<Class3English />} />
            <Route path="/class-3/math" element={<Class3Math />} />
            <Route path="/class-3/hindi" element={<Class3Hindi />} />
            <Route path="/class-4/english" element={<Class4English />} />
            <Route path="/class-4/math" element={<Class4Math />} />
            <Route path="/class-4/hindi" element={<Class4Hindi />} />
            <Route path="/class-5/english" element={<Class5English />} />
            <Route path="/class-5/math" element={<Class5Math />} />
            <Route path="/class-5/hindi" element={<Class5Hindi />} />
            <Route path="/class-6/english" element={<Class6English />} />
            <Route path="/class-6/math" element={<Class6Math />} />
            <Route path="/class-6/hindi" element={<Class6Hindi />} />
            <Route path="/class-6/science" element={<Class6Science />} />
            <Route path="/class-6/sanskrit" element={<Class6Sanskrit />} />
            <Route path="/class-6/socialscience" element={<Class6Socialscience />} />




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