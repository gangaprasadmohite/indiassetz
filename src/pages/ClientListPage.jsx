import React from 'react';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import { DataGrid } from '@mui/x-data-grid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ClientListPage = () => {
  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      headerClassName: 'blueish-color',
      width: 200,
    },
    {
      field: 'type',
      headerClassName: 'blueish-color',
      headerName: 'Type',
      width: 100,
    },
    {
      field: 'email',
      headerName: 'Email',
      headerClassName: 'blueish-color',
      width: 150,
    },
    {
      field: 'valuation',
      headerName: 'Valuation',
      headerClassName: 'blueish-color',
      width: 110,
    },
    {
      field: 'contact',
      headerName: 'Contact',
      headerClassName: 'blueish-color',
      width: 200,
    },
    {
      field: 'branch',
      headerName: 'Branch',
      headerClassName: 'blueish-color',
      width: 150,
    },
    {
      field: 'prm',
      headerName: 'PRM',
      headerClassName: 'blueish-color',
      width: 140,
    },
  ];
  const rows = [
    {
      id: 1,
      name: 1,
      type: 'Snow',
      email: 'Jon',
      valuation: 35,
      contact: '91-8888888888',
      branch: 'Bangalore',
      prm: 'Nandini',
    },
    {
      id: 2,
      name: 1,
      type: 'Snow',
      email: 'Jon',
      valuation: 35,
      contact: '91-8888888888',
      branch: 'Bangalore',
      prm: '',
    },
    {
      id: 3,
      name: 1,
      type: 'Snow',
      email: 'Jon',
      valuation: 35,
      contact: '91-8888888888',
      branch: 'Bangalore',
      prm: '',
    },
    {
      id: 4,
      name: 1,
      type: 'Snow',
      email: 'Jon',
      valuation: 35,
      contact: '91-8888888888',
      branch: 'Bangalore',
      prm: '',
    },
    {
      id: 5,
      name: 1,
      type: 'Snow',
      email: 'Jon',
      valuation: 35,
      contact: '91-8888888888',
      branch: 'Bangalore',
      prm: '',
    },
    {
      id: 6,
      name: 1,
      type: 'Snow',
      email: 'Jon',
      valuation: 35,
      contact: '91-8888888888',
      branch: 'Bangalore',
      prm: '',
    },
    {
      id: 7,
      name: 1,
      type: 'Snow',
      email: 'Jon',
      valuation: 35,
      contact: '91-8888888888',
      branch: 'Bangalore',
      prm: '',
    },

    {
      id: 8,
      name: 1,
      type: 'Snow',
      email: 'Jon',
      valuation: 35,
      contact: '91-8888888888',
      branch: 'Bangalore',
      prm: '',
    },
    {
      id: 9,
      name: 1,
      type: 'Snow',
      email: 'Jon',
      valuation: 35,
      contact: '91-8888888888',
      branch: 'Bangalore',
      prm: '',
    },
    {
      id: 10,
      name: 1,
      type: 'Snow',
      email: 'Jon',
      valuation: 35,
      contact: '91-8888888888',
      branch: 'Bangalore',
      prm: '',
    },
    {
      id: 11,
      name: 1,
      type: 'Snow',
      email: 'Jon',
      valuation: 35,
      contact: '91-8888888888',
      branch: 'Bangalore',
      prm: '',
    },
  ];

  return (
    <React.Fragment>
      <Navbar />
      {console.log(rows)}
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
          Clients
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
      <Grid
        container
        sx={{
          width: '1100px',
          fontSize: '1rem',
          marginRight: '50px',
          marginLeft: '50px',
          marginTop: '2.8rem',
          background: 'white',
          color: '#0A3A67',
          borderRadius: '10px',
        }}
      >
        <Grid
          item
          lg={2.4}
          sm={4}
          sx={{
            textAlign: 'center',
            marginTop: '0.48rem',
            height: '3rem',
            alignItems: 'center',
            marginBottom: '0.48rem',
            paddingTop: '0.66rem',
          }}
        >
          All
        </Grid>
        <Grid
          item
          lg={2.4}
          sm={4}
          sx={{
            textAlign: 'center',
            marginTop: '0.48rem',
            marginBottom: '0.48rem',
            background: '#0A3A67',
            color: 'white',
            borderRadius: '10px',
            paddingTop: '0.66rem',
          }}
        >
          Sell
        </Grid>
        <Grid
          item
          lg={2.4}
          sm={4}
          sx={{
            textAlign: 'center',
            marginTop: '0.48rem',
            height: '3rem',
            alignItems: 'center',
            marginBottom: '0.48rem',
            paddingTop: '0.66rem',
          }}
        >
          Buy
        </Grid>
        <Grid
          item
          lg={2.4}
          sm={4}
          sx={{
            textAlign: 'center',
            marginTop: '0.48rem',
            height: '3rem',
            alignItems: 'center',
            marginBottom: '0.48rem',
            paddingTop: '0.66rem',
          }}
        >
          Rent
        </Grid>
        <Grid
          item
          lg={2.4}
          sm={4}
          sx={{
            textAlign: 'center',
            marginTop: '0.48rem',
            height: '3rem',
            alignItems: 'center',
            marginBottom: '0.48rem',
            paddingTop: '0.66rem',
          }}
        >
          Lease
        </Grid>
      </Grid>
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
          <FilterListRoundedIcon />
          Filter
        </Button>
      </div>
      <Box
        sx={{
          width: '1100px',
          '& .blueish-color': {
            backgroundColor: '#0A3A67',
          },
          flexGrow: '1',
          marginRight: '50px',
          marginLeft: '50px',
          marginTop: '1.25rem',
          borderRadius: '20px',
          height: '100%',
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={50}
          height={100}
          rowsPerPageOptions={[5]}
          sx={{ borderRadius: '20px' }}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </React.Fragment>
  );
};

export default ClientListPage;
