import React from 'react';
import Navbar from '../components/Navbar';
import ClientListPage from './ClientListPage';
import Box from '@mui/material/Box';
import ClientDetailsPage from './ClientDetailsPage';

const MainPage = () => (
  <Box sx>
    {/* <ClientListPage /> */}
    <ClientDetailsPage />
  </Box>
);

export default MainPage;
