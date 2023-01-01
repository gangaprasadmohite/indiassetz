import React from 'react';
import Button from '@mui/material/Button';

const AddButton = (props) => {
  return (
    <Button
      sx={{
        background: '#white',
        color: '#0A3A67',
        border: '1px solid rgba(10, 58, 103, 0.4)',
        padding: '0.6rem 1.1rem',
      }}
    >
      Add {props.name}
    </Button>
  );
};

export default AddButton;
