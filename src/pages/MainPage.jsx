import React from 'react';
import Navbar from '../components/Navbar';
import ClientListPage from './ClientListPage';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Routes, Route } from 'react-dom';
import ClientDetailsPage from './ClientDetailsPage';
import ClientPortfolioPage from './ClientPortfolioPage';
import ClientOrderListingPage from './ClientOrderListingPage';
import PropertyDetails from './PropertyDetails';

const MainPage = () => (
  <Box>
    {/* <ClientListPage /> */}
    {/* <ClientDetailsPage /> */}
    {/* <ClientPortfolioPage /> */}
    {/* <ClientOrderListingPage /> */}
    <PropertyDetails />
  </Box>
);

export default MainPage;
