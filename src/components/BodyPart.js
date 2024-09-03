import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item
        ? {
          borderTop: '4px solid #FF5722', // Changed color
          background: '#FAFAFA', // Changed background color
          borderBottomLeftRadius: '20px',
          width: '270px',
          height: '282px',
          cursor: 'pointer',
          gap: '47px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Added box shadow
          transition: 'all 0.3s ease', // Added transition for smooth hover effects
          '&:hover': {
            backgroundColor: '#F1F1F1', // Background color on hover
            transform: 'scale(1.05)', // Slightly scale up on hover
          },
        }
        : {
          background: '#FAFAFA', // Changed background color
          borderBottomLeftRadius: '20px',
          width: '270px',
          height: '282px',
          cursor: 'pointer',
          gap: '47px',
          transition: 'all 0.3s ease', // Added transition for smooth hover effects
          '&:hover': {
            backgroundColor: '#F1F1F1', // Background color on hover
            transform: 'scale(1.05)', // Slightly scale up on hover
          },
        }
    }
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography
      fontSize="24px"
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#333"
      textTransform="capitalize"
    >
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
