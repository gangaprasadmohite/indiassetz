import React from 'react';
import { Box, Typography, Button, Grid, TextField } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import addApt from '../assets/addApt.png';
import image from '../assets/progress.png';

const PropertyDetails = () => {
  return (
    <React.Fragment>
      <div
        style={{
          paddingRight: '3.1rem',
          paddingLeft: '3.1rem',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          background: 'white',
          color: 'beige',
          display: 'flex',
          justifyContent: 'space-between',
          color: '#0A3A67',
          fontSize: '1.5rem',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.09);',
        }}
      >
        <Typography sx={{ fontSize: '1.5rem' }}>Property Details</Typography>
        <div
          style={{
            background: 'rgba(10, 58, 103, 0.09);',
            borderRadius: '5px',
          }}
        >
          <CloseRoundedIcon />
        </div>
      </div>
      <Box
        sx={{
          background: 'white',
          width: '1100px',
          height: '100%',
          paddingRight: '50px',
          paddingLeft: '50px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button sx={{ background: 'white', color: '#0A3A67' }}>
            <BorderColorRoundedIcon />
            Edit
          </Button>
        </div>
        {/* Grid Start */}
        <Grid container spacing={2} sx={{ marginTop: '1rem' }}>
          <Grid item lg={4}>
            <img src={addApt} style={{ width: '100%' }} />
          </Grid>
          <Grid container spacing={2} item lg={4}>
            <Grid item lg={12}>
              <TextField
                label="Client name"
                placeholder="Jay Shetty"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
            <Grid item lg={6}>
              <TextField label="Client ID" placeholder="ABCD123"></TextField>
            </Grid>
            <Grid item lg={6}>
              <TextField label="Property ID" placeholder="123ABC"></TextField>
            </Grid>
            <Grid item lg={6}>
              <TextField
                label="Subscription Type"
                placeholder="Gold"
              ></TextField>
            </Grid>
            <Grid item lg={6}>
              <TextField
                label="Contact"
                placeholder="+91-9999999999"
              ></TextField>
            </Grid>
          </Grid>
          <Grid container item lg={4}>
            <Grid item lg={6} sx={{ background: 'rgba(250, 250, 250, 1)' }}>
              <Box
                sx={{
                  background: 'rgba(250, 250, 250, 1)',
                  //   width: '23%',
                  //   marginRight: '2rem'
                  //   marginLeft: '1rem',
                  display: 'flex',
                  borderRadius: '20px',
                  paddingTop: '1.5rem',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  marginTop: '1rem',
                  //   paddingBottom: '1rem',
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
                    marginTop: '3rem',
                    fontSize: '6rem',
                    textAlign: 'center',
                    lineHeight: '1rem',
                  }}
                >
                  02
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              lg={6}
              sx={{
                display: 'flex',
                background: 'rgba(250, 250, 250, 1)',
                borderRadius: '20px',
                paddingTop: '1.5rem',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography
                sx={{ color: 'rgba(10, 58, 103, 0.6)', marginBottom: '2rem' }}
              >
                Profile Completion
              </Typography>
              <img
                src={image}
                style={{ borderRadius: '10px', width: '100%' }}
              />
            </Grid>
            <Grid item lg={12}>
              <TextField
                sx={{ width: '100%' }}
                label="Email"
                placeholder="jayshetty@gmail.com"
              ></TextField>
            </Grid>
          </Grid>
        </Grid>

        {/* Grid 3*3 */}
        <Grid container spacing={2} sx={{ marginTop: '1rem' }}>
          <Grid item container lg={4} spacing={2}>
            <Grid irem lg={12} item>
              <TextField
                label="Property Category"
                placeholder="Residential"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
            <Grid irem lg={12} item>
              <TextField
                label="Property Type"
                placeholder="Villa"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
            <Grid irem lg={12} item>
              <TextField
                label="Project & Society name"
                placeholder="Prestige Golfshire"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
          </Grid>
          <Grid item container lg={4} spacing={2}>
            <Grid irem lg={12} item>
              <TextField
                label="Location"
                placeholder="Bangalore"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
            <Grid irem lg={12} item>
              <TextField
                label="Ownership"
                placeholder="Owned by self"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
            <Grid irem lg={12} item>
              <TextField
                label="Occupancy Status"
                placeholder="Self occupied"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
          </Grid>
          <Grid item container lg={4} spacing={2}>
            <Grid irem lg={12} item>
              <TextField
                label="Build up Area(sqft)"
                placeholder="1400 sq.ft"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
            <Grid irem lg={12} item>
              <TextField
                label="Current Property value"
                placeholder="46,400,000"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
            <Grid irem lg={12} item>
              <TextField
                label="Save Property As"
                placeholder="Summer House"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
          </Grid>
          <Grid item container lg={4}></Grid>
        </Grid>

        {/* Grid 3 */}
        <Grid container spacing={2}>
          <Grid container spacing={2} item lg={4}>
            <Grid item lg={6}>
              <TextField
                label="Bedrooms"
                placeholder="3"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
            <Grid item lg={6}>
              <TextField
                label="Bathrooms"
                placeholder="3"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
            <Grid item lg={6}>
              <TextField
                label="No. of Floors"
                placeholder="03"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
            <Grid item lg={6}>
              <TextField
                label="Property on floor"
                placeholder="2"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
            <Grid item lg={6}>
              <TextField
                label="Covered Parking"
                placeholder="Yes"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
            <Grid item lg={6}>
              <TextField
                label="Number"
                placeholder="2"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
          </Grid>

          <Grid container spacing={2} item lg={4}>
            <Grid item lg={12}>
              <TextField
                label="Furnishing"
                placeholder="Semi Furnished"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
            <Grid item lg={12}>
              <TextField
                label="Property Age(in Years)"
                placeholder="5 Years"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
            <Grid item lg={6}>
              <TextField
                label="Lift Availability"
                placeholder="Yes"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
            <Grid item lg={6}>
              <TextField
                label="Number"
                placeholder="2"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
          </Grid>
          <Grid container spacing={2} item lg={4}>
            <Grid item lg={12}>
              <TextField
                label="Expected Selling Price"
                placeholder="50,400,000"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
            <Grid item lg={12}>
              <TextField
                label="Property Facing"
                placeholder="-"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
            <Grid item lg={6}>
              <TextField
                label="Open Parking"
                placeholder="Yes"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
            <Grid item lg={6}>
              <TextField
                label="Number"
                placeholder="2"
                sx={{ width: '100%' }}
              ></TextField>
            </Grid>
          </Grid>
        </Grid>
        <Typography
          sx={{ color: '#0A3A67', marginTop: '2rem', fontSize: '1rem' }}
        >
          About Property
        </Typography>
        <TextField
          placeholder="Lorem Ipsum"
          sx={{ width: '100%' }}
          multiline
          rows={4}
        ></TextField>
        <Typography
          sx={{ color: '#0A3A67', marginTop: '2rem', fontSize: '1rem' }}
        >
          Amenities
        </Typography>
        <TextField
          placeholder="Swimming Pool, Gym, Intercom, Lift, Intercom"
          sx={{ width: '100%' }}
          multiline
          rows={4}
        ></TextField>
      </Box>
    </React.Fragment>
  );
};

export default PropertyDetails;
