import React from 'react';
import Navbar from '../components/Navbar';
import ClientListPage from './ClientListPage';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ClientDetailsPage from './ClientDetailsPage';
import ClientPortfolioPage from './ClientPortfolioPage';
import ClientOrderListingPage from './ClientOrderListingPage';
import PropertyDetails from './PropertyDetails';

const MainPage = () => (
  <Box>
    {/* <ClientListPage /> */}
    <Router>
      <Routes>
        <Route exact path="/" element={<ClientListPage />} />
        <Route path="/client-details" element={<ClientDetailsPage />} />
        <Route path="/client-portfolio" element={<ClientPortfolioPage />} />
        <Route
          path="/client-order-listing"
          element={<ClientOrderListingPage />}
        />
        <Route path="/property-details" element={<PropertyDetails />} />
      </Routes>
    </Router>
  </Box>
);

export default MainPage;
