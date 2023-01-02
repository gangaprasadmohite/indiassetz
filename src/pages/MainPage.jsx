import React from 'react';
import Navbar from '../components/Navbar';
import ClientListPage from './ClientListPage';
import Box from '@mui/material/Box';
import ClientDetailsPage from './ClientDetailsPage';
import ClientPortfolioPage from './ClientPortfolioPage';
import ClientOrderListingPage from './ClientOrderListingPage';

const MainPage = () => (
  <Box sx>
    {/* <ClientListPage /> */}
    {/* <ClientDetailsPage /> */}
    {/* <ClientPortfolioPage /> */}
    <ClientOrderListingPage />
  </Box>
);

export default MainPage;
