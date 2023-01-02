import React from 'react';
import Navbar from '../components/Navbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import image from '../assets/4.jpg';
import progress from '../assets/progress.png';
import AddIcon from '@mui/icons-material/Add';
import { TextField } from '@mui/material';

const ClientDetailsPage = () => {
  function createData1(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const tableOneRows = [
    createData1(
      'Stairway to heaven',
      'Residential',
      'N2, 2nd Cross Road, Residency Road, Bangalore',
      '2.2Cr'
    ),
    createData1(
      'Guns and roses',
      'Residential',
      'N2, 2nd Cross Road, Residency Road, Bangalore',
      '2.2Cr'
    ),
  ];
  function createData2(name, calories, fat, carbs, protein, carbo) {
    return { name, calories, fat, carbs, protein, carbo };
  }

  const tableTwoRows = [
    createData2('QW12345@', 'Karthik J', 11223311, 'Buy', '14-10-2022 10:30'),
    createData2('QW12345@', 'Karthik J', 11223311, 'Buy', '14-10-2022 10:30'),
  ];
  return (
    <React.Fragment>
      <Navbar name="property" />
      <div>
        <Box
          sx={{
            background: 'white',
            width: '1100px',
            // height: '78px',
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
                color: 'white',
                background: '#0A3A67',
                border: '1px solid rgba(10, 58, 103, 0.4)',
                padding: '0.6rem 1.1rem',
              }}
            >
              View Properties
            </Button>
            <Button
              sx={{
                background: 'white',
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
        <div
          style={{
            width: '1100px',
            marginRight: '50px',
            marginLeft: '50px',
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button sx={{ background: 'white', color: '#0A3A67' }}>
            <ShoppingCartRoundedIcon />
            Cart
          </Button>
          <Button sx={{ background: 'white', color: '#0A3A67' }}>
            <BorderColorRoundedIcon />
            Edit
          </Button>
        </div>
        <Box
          sx={{
            width: '1100px',
            marginRight: '50px',
            marginLeft: '50px',
            marginTop: '1.25rem',
            borderRadius: '10px',
            background: 'white',
            color: 'gray',
            display: 'flex',
          }}
        >
          <Grid
            lg={2}
            container
            item
            sx={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}
          >
            <img src={image} style={{ borderRadius: '10px' }} />
            <Typography
              sx={{
                fontSize: '4rem',
                paddingBottom: '0px',
                fontWeight: '500',
                textAlign: 'center',
                color: '#0A3A67',
              }}
            >
              02
            </Typography>
            <Typography
              sx={{
                marginTop: '0',
                fontSize: '0.8rem',
                textAlign: 'center',
                color: 'rgba(10, 58, 103, 0.6)',
              }}
            >
              Total Properties
            </Typography>
            <Typography
              sx={{
                fontSize: '2.5rem',
                fontWeight: '500',
                textAlign: 'center',
                color: '#0A3A67',
              }}
            >
              5.3Cr
            </Typography>
            <Typography
              sx={{
                marginTop: '0',
                fontSize: '0.8rem',
                textAlign: 'center',
                color: 'rgba(10, 58, 103, 0.6)',
              }}
            >
              Net Worth
            </Typography>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src={progress}
                style={{ width: '50%', textAlign: 'center' }}
              />
              <Typography
                sx={{
                  marginTop: '0',
                  fontSize: '0.8rem',
                  textAlign: 'center',
                  color: 'rgba(10, 58, 103, 0.6)',
                }}
              >
                Profile completion status
              </Typography>
            </div>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{
              paddingTop: '1rem',
              paddingBottom: '1rem',
              paddingRight: '1rem',
            }}
          >
            <Grid lg={4} container item>
              <TextField
                sx={{ width: '100%' }}
                label="Client Id"
                placeholder="QWERET-34353"
              ></TextField>
            </Grid>
            <Grid lg={4} container item>
              <TextField
                label="Client Name"
                sx={{ width: '100%' }}
                placeholder="Karthik J"
              ></TextField>
            </Grid>
            <Grid lg={4} container item>
              <TextField
                label="Subscription Type"
                sx={{ width: '100%' }}
                placeholder="Gold"
              ></TextField>
            </Grid>
            <Grid lg={6} container item>
              <TextField
                id="outlined-multiline-static"
                label="Address"
                sx={{ width: '100%' }}
                multiline
                placeholder="12th Floor, C Wing, Mittal Tower, MG Road, Bangalore"
                rows={3}
              />
            </Grid>
            <Grid lg={6} container item>
              <TextField
                id="outlined-multiline-static"
                label="Special Note"
                sx={{ width: '100%' }}
                multiline
                placeholder="Lorem Ipsum dorem "
                rows={3}
              />
            </Grid>
            <Grid lg={4} container item>
              <TextField
                label="DOB"
                sx={{ width: '100%' }}
                placeholder="19.01.1998"
              ></TextField>
            </Grid>
            <Grid lg={4} container item>
              <TextField
                label="Contact"
                sx={{ width: '100%' }}
                placeholder=" +91-9999999999"
              ></TextField>
            </Grid>
            <Grid lg={4} container item>
              <TextField
                label="Email"
                sx={{ width: '100%' }}
                placeholder="xyz@gmail.com"
              ></TextField>
            </Grid>
            <Grid lg={4} container item>
              <TextField
                label="Occupation"
                sx={{ width: '100%' }}
                placeholder="xyz@gmail.com"
              ></TextField>
            </Grid>
            <Grid lg={4} container item>
              <TextField
                label="Gender"
                sx={{ width: '100%' }}
                placeholder="xyz@gmail.com"
              ></TextField>
            </Grid>
            <Grid lg={4} container item>
              <TextField
                label="Pin code"
                sx={{ width: '100%' }}
                placeholder="xyz@gmail.com"
              ></TextField>
            </Grid>
            <Grid lg={4} container item>
              <TextField
                label="City"
                sx={{ width: '100%' }}
                placeholder="Bangalore"
              ></TextField>
            </Grid>
            <Grid lg={4} container item>
              <TextField
                label="State"
                sx={{ width: '100%' }}
                placeholder="Karnataka"
              ></TextField>
            </Grid>
            <Grid lg={4} container item>
              <TextField
                label="Country"
                sx={{ width: '100%' }}
                placeholder="India"
              ></TextField>
            </Grid>
          </Grid>

          {/* <Grid lg={3} container item>
            Hello
          </Grid>
          <Grid lg={3} container item>
            Hello
          </Grid>
          <Grid lg={3} container item>
            Hello
          </Grid>
          <Grid lg={5} container item>
            Hello
          </Grid>
          <Grid lg={5} container item>
            Hello
          </Grid> */}
        </Box>
        <Box
          sx={{
            width: '1100px',
            marginLeft: '50px',
            marginRight: '50px',
            marginTop: '1.8rem',
            paddingTop: '0.5rem',
            paddingLeft: '1rem',
            background: 'white',
            borderRadius: '10px',
          }}
        >
          <Typography
            sx={{
              fontSize: '1.25rem',
              paddingBottom: '1rem',
              color: '#0A3A67',
              paddingTop: '0.5rem',
            }}
          >
            Investor Profile
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ width: '1100px', paddingBottom: '1rem' }}
          >
            <Grid item lg={4}>
              <TextField
                label="Income Name"
                sx={{ width: '100%' }}
                placeholder="-"
              ></TextField>
            </Grid>
            <Grid item lg={4}>
              <TextField
                label="Budget"
                sx={{ width: '100%' }}
                placeholder="-"
              ></TextField>
            </Grid>
            <Grid item lg={4}>
              <TextField
                label="Onboarding Branch"
                sx={{ width: '100%' }}
                placeholder="-"
              ></TextField>
            </Grid>
            <Grid item lg={4}>
              <TextField
                label="Investment in RE"
                sx={{ width: '100%' }}
                placeholder="-"
              ></TextField>
            </Grid>
            <Grid item lg={4}>
              <TextField
                label="Exposure to RE"
                sx={{ width: '100%' }}
                placeholder="-"
              ></TextField>
            </Grid>
            <Grid item lg={4}>
              <TextField
                label="Planning to Invest"
                sx={{ width: '100%' }}
                placeholder="-"
              ></TextField>
            </Grid>
            <Grid item lg={4}>
              <TextField
                label="Retain Investment(Yrs)"
                sx={{ width: '100%' }}
                placeholder="-"
              ></TextField>
            </Grid>
            <Grid item lg={4}>
              <TextField
                label="Unique Promo"
                sx={{ width: '100%' }}
                placeholder="-"
              ></TextField>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: '1100px',
            marginLeft: '50px',
            marginRight: '50px',
            marginTop: '1.8rem',
            paddingTop: '0.5rem',
            paddingLeft: '1rem',
            background: 'white',
            borderRadius: '10px',
          }}
        >
          <Typography
            sx={{
              fontSize: '1.25rem',
              paddingBottom: '1rem',
              color: '#0A3A67',
              paddingTop: '0.5rem',
            }}
          >
            Partner Relationship
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ width: '1100px', paddingBottom: '1rem' }}
          >
            <Grid item lg={4}>
              <TextField
                label="Bank/WMC"
                sx={{ width: '100%' }}
                placeholder="-"
              ></TextField>
            </Grid>
            <Grid item lg={4}>
              <TextField
                label="Unique Promo Code"
                sx={{ width: '100%' }}
                placeholder="-"
              ></TextField>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: '1100px',
            marginLeft: '50px',
            marginRight: '50px',
            marginTop: '1.8rem',
            paddingTop: '0.5rem',
            paddingLeft: '1rem',
            background: 'white',
            borderRadius: '10px',
          }}
        >
          <Typography
            sx={{
              fontSize: '1.25rem',
              paddingBottom: '1rem',
              color: '#0A3A67',
              paddingTop: '0.5rem',
            }}
          >
            Referral Details
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ width: '1100px', paddingBottom: '1rem' }}
          >
            <Grid item lg={4}>
              <TextField
                label="Referred by"
                sx={{ width: '100%' }}
                placeholder="Enter Name"
              ></TextField>
            </Grid>
            <Grid item lg={4}>
              <TextField
                label="Organisation"
                sx={{ width: '100%' }}
                placeholder="Enter Organisation"
              ></TextField>
            </Grid>
            <Grid item lg={4}>
              <TextField
                label="Email"
                sx={{ width: '100%' }}
                placeholder="Enter email"
              ></TextField>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: '1100px',
            marginLeft: '50px',
            marginRight: '50px',
            marginTop: '1.8rem',
            paddingTop: '0.5rem',
            paddingLeft: '1rem',
            background: 'white',
            borderRadius: '10px',
          }}
        >
          <Typography
            sx={{
              fontSize: '1.25rem',
              paddingBottom: '1rem',
              color: '#0A3A67',
              paddingTop: '0.5rem',
            }}
          >
            Documents
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ width: '1100px', paddingBottom: '1rem' }}
          >
            <Grid item lg={4}>
              <TextField
                label="Referred by"
                sx={{ width: '100%' }}
                placeholder="Enter Name"
              ></TextField>
            </Grid>
            <Grid item lg={4}>
              <TextField
                label="Organisation"
                sx={{ width: '100%' }}
                placeholder="Enter Organisation"
              ></TextField>
            </Grid>
            <Grid item lg={4}>
              <TextField
                label="Email"
                sx={{ width: '100%' }}
                placeholder="Enter email"
              ></TextField>
            </Grid>
            <Grid item lg={4}>
              <TextField
                label="Email"
                sx={{ width: '100%' }}
                placeholder="Enter email"
              ></TextField>
            </Grid>
            <Grid item lg={4}>
              <Typography
                sx={{
                  color: '#0A3A67',
                }}
              >
                <AddIcon sx={{ marginTop: '1rem' }} />
                <span style={{ alignSelf: 'center' }}>Add Documents</span>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: '1100px',
            marginLeft: '50px',
            marginRight: '50px',
            marginTop: '1.8rem',
            paddingTop: '0.5rem',
            paddingLeft: '1rem',
            background: 'white',
            borderRadius: '10px',
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{ width: '1100px', paddingBottom: '1rem', paddingTop: '1rem' }}
          >
            <Grid item lg={12}>
              <TextField
                id="outlined-multiline-static"
                label="Summary"
                multiline
                placeholder="Summary"
                sx={{ width: '100%' }}
                rows={4}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: '1115px',
            marginLeft: '50px',
            marginRight: '50px',
            marginTop: '1.8rem',
          }}
        >
          <div
            style={{
              // paddingRight: '1rem',
              // paddingLeft: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              background: '#0A3A67',
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
              padding: '0.5rem',
            }}
          >
            <Typography sx={{ fontSize: '1.25rem' }}>Watchlist</Typography>
            <Typography sx={{ textDecoration: 'underline' }}>
              ViewAll
            </Typography>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      background: 'rgba(10, 58, 103, 0.6);',
                      color: 'white',
                    }}
                  >
                    Title
                  </TableCell>
                  <TableCell
                    sx={{
                      background: 'rgba(10, 58, 103, 0.6);',
                      color: 'white',
                    }}
                    align="right"
                  >
                    Type
                  </TableCell>
                  <TableCell
                    sx={{
                      background: 'rgba(10, 58, 103, 0.6);',
                      color: 'white',
                    }}
                    align="right"
                  >
                    Address
                  </TableCell>
                  <TableCell
                    sx={{
                      background: 'rgba(10, 58, 103, 0.6);',
                      color: 'white',
                    }}
                    align="right"
                  >
                    IA Valuation
                  </TableCell>

                  <TableCell
                    sx={{
                      background: 'rgba(10, 58, 103, 0.6);',
                      color: 'white',
                    }}
                    align="right"
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableOneRows.map((tableOneRow) => (
                  <TableRow
                    key={tableOneRow.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {tableOneRow.name}
                    </TableCell>
                    <TableCell align="right">{tableOneRow.calories}</TableCell>
                    <TableCell align="right">{tableOneRow.fat}</TableCell>
                    <TableCell align="right">{tableOneRow.carbs}</TableCell>

                    <TableCell align="right">
                      {
                        <Button
                          sx={{
                            color: '#0A3A67',
                            border: '1px solid rgba(10, 58, 103, 0.4);',
                          }}
                        >
                          View Property
                        </Button>
                      }
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box
          sx={{
            width: '1115px',
            marginLeft: '50px',
            marginRight: '50px',
            marginTop: '1.8rem',
          }}
        >
          <div
            style={{
              // paddingRight: '1rem',
              // paddingLeft: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              background: '#0A3A67',
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
              padding: '0.5rem',
            }}
          >
            <Typography sx={{ fontSize: '1.25rem' }}>Watchlist</Typography>
            <Typography sx={{ textDecoration: 'underline' }}>
              ViewAll
            </Typography>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      background: 'rgba(10, 58, 103, 0.6);',
                      color: 'white',
                    }}
                  >
                    PropertyID
                  </TableCell>
                  <TableCell
                    sx={{
                      background: 'rgba(10, 58, 103, 0.6);',
                      color: 'white',
                    }}
                    align="right"
                  >
                    Title
                  </TableCell>
                  <TableCell
                    sx={{
                      background: 'rgba(10, 58, 103, 0.6);',
                      color: 'white',
                    }}
                    align="right"
                  >
                    Type
                  </TableCell>
                  <TableCell
                    sx={{
                      background: 'rgba(10, 58, 103, 0.6);',
                      color: 'white',
                    }}
                    align="right"
                  >
                    Order
                  </TableCell>
                  <TableCell
                    sx={{
                      background: 'rgba(10, 58, 103, 0.6);',
                      color: 'white',
                    }}
                    align="right"
                  >
                    Date & Time
                  </TableCell>
                  <TableCell
                    sx={{
                      background: 'rgba(10, 58, 103, 0.6);',
                      color: 'white',
                    }}
                    align="right"
                  >
                    Status
                  </TableCell>

                  <TableCell
                    sx={{
                      background: 'rgba(10, 58, 103, 0.6);',
                      color: 'white',
                    }}
                    align="right"
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableTwoRows.map((tableTwoRow) => (
                  <TableRow
                    key={tableTwoRow.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {tableTwoRow.name}
                    </TableCell>
                    <TableCell align="right">{tableTwoRow.calories}</TableCell>
                    <TableCell align="right">{tableTwoRow.fat}</TableCell>
                    <TableCell align="right">{tableTwoRow.carbs}</TableCell>
                    <TableCell align="right">{tableTwoRow.protein}</TableCell>
                    <TableCell align="right">
                      {
                        <Button
                          sx={{
                            color: '#0A3A67',
                            border: '1px solid rgba(10, 58, 103, 0.4);',
                            background: 'rgba(10, 58, 103, 0.1);',
                          }}
                        >
                          View Property
                        </Button>
                      }
                    </TableCell>
                    <TableCell align="right">
                      {
                        <Button
                          sx={{
                            color: '#0A3A67',
                            border: '1px solid rgba(10, 58, 103, 0.4);',
                          }}
                        >
                          View Property
                        </Button>
                      }
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </React.Fragment>
  );
};

export default ClientDetailsPage;
