import React from 'react';
import Button from '@mui/material/Button';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

const AddButton = (props) => {
  return (
    <Button
      sx={{
        background: '#0A3A67',
        color: 'white',
        padding: '0.6rem 1.1rem',
        height: '3rem',
      }}
    >
      <AddCircleRoundedIcon sx={{ paddingRight: '0.5rem' }} />
      Add {props.name}
    </Button>
  );
};

export default AddButton;
