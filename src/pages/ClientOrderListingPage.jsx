import React from 'react';
import Navbar from '../components/Navbar';
import {
  Typography,
  Box,
  Grid,
  TextField,
  InputAdornment,
} from '@mui/material';
import avatar from '../assets/avatar.jpg';
import prop from '../assets/prop.png';
import PhoneEnabledRoundedIcon from '@mui/icons-material/PhoneEnabledRounded';

const ClientOrderListingPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Box
        sx={{
          background: 'white',
          width: '1100px',
          height: '78px',
          marginRight: '50px',
          marginLeft: '50px',
          borderRadius: '10px',
          marginTop: '1.5rem',
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
          Karthik's Orders
        </Typography>
        <Typography
          sx={{
            color: 'rgba(10, 58, 103, 0.6);',
            marginLeft: '1.8rem',
            fontSize: '1rem',
            fontWeight: '400',
            font: 'Poppins',
            paddingTop: '0.15rem',
          }}
        >
          Total 1214 "All" Records
        </Typography>
      </Box>
      {/* Card component */}
      <Grid
        container
        spacing={2}
        sx={{
          background: 'white',
          width: '1100px',
          marginRight: '50px',
          marginLeft: '50px',
          borderRadius: '10px',
          marginTop: '1.5rem',
          color: 'black',
          display: 'flex',
        }}
      >
        <Grid lg={2}>
          <img
            src={avatar}
            style={{ width: '80%', margin: '1rem', borderRadius: '10px' }}
          />
        </Grid>
        <Grid container item lg={10} sx={{ marginTop: '0.01rem' }} spacing={2}>
          <Grid lg={4}>
            <TextField
              label="Name"
              sx={{ width: '90%' }}
              placeholder="Karthik J"
              defaultValue={'Karthik J'}
            ></TextField>{' '}
          </Grid>
          <Grid lg={4}>
            <TextField
              label="Client ID"
              sx={{ width: '90%' }}
              placeholder="QWER-123"
            ></TextField>{' '}
          </Grid>
          <Grid lg={4}>
            <TextField
              label="Subscription Type"
              sx={{ width: '90%' }}
              placeholder="Gold"
            ></TextField>{' '}
          </Grid>

          <Grid lg={4}>
            <TextField
              label="Email ID"
              sx={{ width: '90%' }}
              placeholder="xyz@gmail.com"
            ></TextField>{' '}
          </Grid>
          <Grid lg={4}>
            <TextField
              label="Contact"
              sx={{ width: '90%' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <PhoneEnabledRoundedIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="+91-9999999999"
            ></TextField>{' '}
          </Grid>
          <Grid lg={4}>
            <TextField
              label="Lead from"
              sx={{ width: '90%' }}
              placeholder="Website"
            ></TextField>{' '}
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{
          background: 'white',
          width: '1100px',
          marginRight: '50px',
          marginLeft: '50px',
          borderRadius: '10px',
          marginTop: '1.5rem',
          color: 'black',
          display: 'flex',
        }}
      >
        <Grid lg={3}>
          <img
            src={prop}
            style={{ width: '80%', margin: '1rem', borderRadius: '10px' }}
          />
        </Grid>
        <Grid container item lg={9} sx={{ marginTop: '0.01rem' }} spacing={2}>
          <Grid lg={4}>
            <TextField
              label="Property Name"
              sx={{ width: '90%' }}
              placeholder="Summer House"
              defaultValue={'Karthik J'}
            ></TextField>{' '}
          </Grid>
          <Grid lg={4}>
            <TextField
              label="Order ID"
              sx={{ width: '90%' }}
              placeholder="QWER-123"
            ></TextField>{' '}
          </Grid>
          <Grid lg={4}>
            <TextField
              label="Subscription Type"
              sx={{ width: '90%' }}
              placeholder="Gold"
            ></TextField>{' '}
          </Grid>

          <Grid lg={4}>
            <TextField
              label="Order Status"
              sx={{ width: '90%' }}
              placeholder="xyz@gmail.com"
            ></TextField>{' '}
          </Grid>
          <Grid lg={4}>
            <TextField
              label="Contact"
              sx={{ width: '90%' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <PhoneEnabledRoundedIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="+91-9999999999"
            ></TextField>{' '}
          </Grid>
          <Grid lg={4}>
            <TextField
              label="Lead from"
              sx={{ width: '90%' }}
              placeholder="Website"
            ></TextField>{' '}
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{
          background: 'white',
          width: '1100px',
          marginRight: '50px',
          marginLeft: '50px',
          borderRadius: '10px',
          marginTop: '1.5rem',
          color: 'black',
          display: 'flex',
        }}
      >
        <Grid lg={3}>
          <img
            src={prop}
            style={{ width: '80%', margin: '1rem', borderRadius: '10px' }}
          />
        </Grid>
        <Grid container item lg={9} sx={{ marginTop: '0.01rem' }} spacing={2}>
          <Grid lg={4}>
            <TextField
              label="Property Name"
              sx={{ width: '90%' }}
              placeholder="Summer House"
              defaultValue={'Karthik J'}
            ></TextField>{' '}
          </Grid>
          <Grid lg={4}>
            <TextField
              label="Order ID"
              sx={{ width: '90%' }}
              placeholder="QWER-123"
            ></TextField>{' '}
          </Grid>
          <Grid lg={4}>
            <TextField
              label="Subscription Type"
              sx={{ width: '90%' }}
              placeholder="Gold"
            ></TextField>{' '}
          </Grid>

          <Grid lg={4}>
            <TextField
              label="Order Status"
              sx={{ width: '90%' }}
              placeholder="xyz@gmail.com"
            ></TextField>{' '}
          </Grid>
          <Grid lg={4}>
            <TextField
              label="Contact"
              sx={{ width: '90%' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <PhoneEnabledRoundedIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="+91-9999999999"
            ></TextField>{' '}
          </Grid>
          <Grid lg={4}>
            <TextField
              label="Lead from"
              sx={{ width: '90%' }}
              placeholder="Website"
            ></TextField>{' '}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ClientOrderListingPage;
