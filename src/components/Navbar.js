import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/logobody.avif';

const Navbar = () => (
  <Stack
    direction="row"
    // alignItems='center' // Align items vertically center
    justifyContent="space-around"
    sx={{
      gap: { sm: '123px', xs: '40px' },
      mt: { sm: '32px', xs: '20px' },
      px: '20px',
      justifyContent: 'none',
      borderBottom: '1px solid #E0E0E0',
    }}
  >
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <img src={Logo} alt="logo" style={{ width: '100px', height: '100px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="center" // Align items vertically center
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: '3px solid #FF2625',
        }}
      >
        Home
      </Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>
        Exercise
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
