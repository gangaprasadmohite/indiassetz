import React from 'react';
import Sidebar from '../components/Sidebar';
import MainPage from './MainPage';

const Layout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <MainPage />
    </div>
  );
};

export default Layout;
