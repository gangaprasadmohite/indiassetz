import React from 'react';
import Sidebar from '../components/Sidebar';
import MainPage from './MainPage';

const Layout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar style={{ width: '240px', borderRadius: '100px' }} />
      <MainPage style={{ width: '1100px' }} />
    </div>
  );
};

export default Layout;
