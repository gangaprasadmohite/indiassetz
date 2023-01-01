import React from 'react';
import AddButton from './AddButton';
import ViewButton from './ViewButton';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
const drawerWidth = '240px';
import avatar from '../assets/avatar.jpg';

const Navbar = () => {
  return (
    <Box
      sx={{
        width: '1100px',
        marginRight: '50px',
        marginLeft: '50px',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '25px',
      }}
    >
      <div>
        <KeyboardBackspaceSharpIcon
          sx={{
            color: '#0A3A67',
            background: 'white',
            padding: '14.77px',
            borderRadius: '10px',
          }}
        />
        <TextField
          label="Search Clients, Properties, Services"
          id="outlined-basic"
          sx={{
            background: 'white',
            border: '',
            marginLeft: '1.25rem',
            fontStyle: 'Italic',
            width: '36.5rem',
            color: 'black',
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <AddButton name="Client" />
        <CircleNotificationsIcon
          sx={{
            color: '#0A3A67',
            background: 'white',
            padding: '14.77px',
            borderRadius: '10px',
          }}
        />
        <img
          src={avatar}
          style={{ width: '3rem', height: '3rem', borderRadius: '50%' }}
        />
      </div>
    </Box>
  );
};

export default Navbar;
