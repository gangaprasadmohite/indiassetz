import React from 'react';
import Navbar from '../components/Navbar';
import { Typography, Box, Button, Grid, TextField } from '@mui/material';
import apartment from '../assets/apartment.png';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';

const ClientPortfolioPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Box
        sx={{
          background: 'white',
          width: '1100px',
          marginRight: '50px',
          marginLeft: '50px',
          borderRadius: '10px',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          marginTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{
            color: '#0A3A67',
            marginLeft: '1.8rem',
            fontSize: '1.33rem',
            font: 'Poppins',
            fontWeight: '500',
            paddingTop: '0.56rem',
          }}
        >
          Karthik's Details
        </Typography>
        <div>
          <Button
            sx={{
              background: '#white',
              marginLeft: '1rem',
              marginRight: '1.5rem',
              color: '#0A3A67',
              border: '1px solid rgba(10, 58, 103, 0.4)',
              padding: '0.6rem 1.1rem',
            }}
          >
            View Orders
          </Button>
        </div>
      </Box>
      <Box
        sx={{
          background: 'white',
          width: '1100px',
          marginRight: '50px',
          marginLeft: '50px',
          borderRadius: '10px',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          marginTop: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginLeft: '1rem',
            width: '100%',
          }}
        >
          <Grid sx={{ width: '75%' }} spacing={2} container>
            <Grid lg={6} item>
              <TextField
                label="Client ID"
                sx={{ width: '100%' }}
                placeholder="-"
              ></TextField>
            </Grid>
            <Grid lg={6} item>
              <TextField
                label="Client Name"
                sx={{ width: '100%' }}
                placeholder="-"
              ></TextField>
            </Grid>
            <Grid lg={6} item>
              <TextField
                label="Subscription Type"
                sx={{ width: '100%' }}
                placeholder="-"
              ></TextField>
            </Grid>
            <Grid lg={6} item>
              <TextField
                label="Contact"
                sx={{ width: '100%' }}
                placeholder="-"
              ></TextField>
            </Grid>
          </Grid>
          <Box
            sx={{
              background: 'rgba(250, 250, 250, 1)',
              width: '23%',
              marginRight: '2rem',
              marginLeft: '1rem',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              paddingBottom: '1rem',
            }}
          >
            <Typography
              sx={{ color: 'rgba(10, 58, 103, 0.6)', marginBottom: '2rem' }}
            >
              Total Properties
            </Typography>
            <Typography
              sx={{
                color: 'black',
                fontSize: '6rem',
                textAlign: 'center',
                lineHeight: '1rem',
              }}
            >
              02
            </Typography>
          </Box>
        </div>
        <Grid
          spacing={2}
          sx={{ marginTop: '1rem', marginRight: '1rem', marginLeft: '0.25rem' }}
          container
        >
          <Grid lg={6} item>
            <TextField
              label="Email"
              sx={{ width: '93%' }}
              placeholder="-"
            ></TextField>
          </Grid>
          <Grid lg={6} item>
            <TextField
              label="PRM"
              sx={{ width: '93%' }}
              placeholder="-"
            ></TextField>
          </Grid>
        </Grid>
      </Box>
      <div
        style={{
          width: '1100px',
          marginRight: '50px',
          marginLeft: '50px',
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '1.25rem',
        }}
      >
        <Button sx={{ background: 'white', color: '#0A3A67' }}>
          View All Properties
        </Button>
      </div>
      {/* card items */}
      <Box
        sx={{
          background: 'white',
          width: '1100px',
          marginRight: '50px',
          marginLeft: '50px',
          borderRadius: '10px',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          marginTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Grid container spacing={2}>
          <Grid item lg={4}>
            <img src={apartment} style={{ width: '100%' }} />
          </Grid>
          <Grid item lg={8}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginRight: '1rem',
                color: '#0A3A67',
              }}
            >
              <Typography
                sx={{
                  color: 'black',
                  paddingTop: '0.25rem',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                }}
              >
                Queen's Apartment
              </Typography>
              <Typography
                sx={{
                  color: 'black',
                  fontSize: '1.10rem',
                  paddingTop: '0.25rem',
                }}
              >
                Residential
              </Typography>
            </div>
            <Typography
              style={{ fontSize: '1rem', color: 'rgba(10, 58, 103, 0.6)' }}
            >
              <span>Address:</span>
              No.5, 2nd Cross Road,
              <br style={{ padding: '3rem' }} /> Nagasandra, Bangalore 560010
            </Typography>
            <div
              style={{
                color: 'rgba(128, 22, 78, 1)',
                display: 'flex',
                width: '30%',
                justifyContent: 'space-between',
                marginTop: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <BedIcon />
                <span style={{ color: 'rgba(10, 58, 103, 1)' }}>4</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <BathtubIcon />
                <span style={{ color: 'rgba(10, 58, 103, 1)' }}>3</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <OpenInFullRoundedIcon />
                <span style={{ color: 'rgba(10, 58, 103, 1)' }}>3450Sqft</span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                width: '95%',
                justifyContent: 'space-between',
                marginTop: '1rem',
                color: 'black',
                marginRight: '3rem',
              }}
            >
              <p>Furnish Type</p>
              <p style={{ fontWeight: 'bold' }}>Furnished</p>
              <p>State</p>
              <p style={{ fontWeight: 'bold' }}>Karnataka</p>
              <p
                style={{
                  fontSize: '2rem',
                  color: '#80164E',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <CurrencyRupeeRoundedIcon /> <span>1.8Cr</span>
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                width: '95%',
                justifyContent: 'space-between',
                marginTop: '1rem',
                color: 'black',
                marginRight: '3rem',
              }}
            >
              <p>Property ID</p>
              <p style={{ fontWeight: 'bold' }}>PR112221</p>
              <p>City</p>
              <p style={{ fontWeight: 'bold' }}>Bangalore</p>
              <p> Valuation</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginRight: '2rem',
              }}
            >
              <Button
                sx={{
                  color: '#0A3A67',
                  background: 'rgba(10, 58, 103, 0.1);',
                  marginTop: '2rem',
                }}
              >
                View details
              </Button>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          background: 'white',
          width: '1100px',
          marginRight: '50px',
          marginLeft: '50px',
          borderRadius: '10px',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          marginTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Grid container spacing={2}>
          <Grid item lg={4}>
            <img src={apartment} style={{ width: '100%' }} />
          </Grid>
          <Grid item lg={8}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginRight: '1rem',
                color: '#0A3A67',
              }}
            >
              <Typography
                sx={{
                  color: 'black',
                  paddingTop: '0.25rem',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                }}
              >
                Queen's Apartment
              </Typography>
              <Typography
                sx={{
                  color: 'black',
                  fontSize: '1.10rem',
                  paddingTop: '0.25rem',
                }}
              >
                Residential
              </Typography>
            </div>
            <Typography
              style={{ fontSize: '1rem', color: 'rgba(10, 58, 103, 0.6)' }}
            >
              <span>Address:</span>
              No.5, 2nd Cross Road,
              <br style={{ padding: '3rem' }} /> Nagasandra, Bangalore 560010
            </Typography>
            <div
              style={{
                color: 'rgba(128, 22, 78, 1)',
                display: 'flex',
                width: '30%',
                justifyContent: 'space-between',
                marginTop: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <BedIcon />
                <span style={{ color: 'rgba(10, 58, 103, 1)' }}>4</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <BathtubIcon />
                <span style={{ color: 'rgba(10, 58, 103, 1)' }}>3</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <OpenInFullRoundedIcon />
                <span style={{ color: 'rgba(10, 58, 103, 1)' }}>3450Sqft</span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                width: '95%',
                justifyContent: 'space-between',
                marginTop: '1rem',
                color: 'black',
                marginRight: '3rem',
              }}
            >
              <p>Furnish Type</p>
              <p style={{ fontWeight: 'bold' }}>Furnished</p>
              <p>State</p>
              <p style={{ fontWeight: 'bold' }}>Karnataka</p>
              <p
                style={{
                  fontSize: '2rem',
                  color: '#80164E',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <CurrencyRupeeRoundedIcon /> <span>1.8Cr</span>
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                width: '95%',
                justifyContent: 'space-between',
                marginTop: '1rem',
                color: 'black',
                marginRight: '3rem',
              }}
            >
              <p>Property ID</p>
              <p style={{ fontWeight: 'bold' }}>PR112221</p>
              <p>City</p>
              <p style={{ fontWeight: 'bold' }}>Bangalore</p>
              <p> Valuation</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginRight: '2rem',
              }}
            >
              <Button
                sx={{
                  color: '#0A3A67',
                  background: 'rgba(10, 58, 103, 0.1);',
                  marginTop: '2rem',
                }}
              >
                View details
              </Button>
            </div>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default ClientPortfolioPage;
