import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row', xs: 'column' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', width: '100%', maxWidth: '600px', height: 'auto' }} />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' }, maxWidth: '600px' }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' }, fontWeight: 700, color: '#333', textAlign: { xs: 'center', lg: 'left' } }} textTransform="capitalize">
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' }, color: '#666', textAlign: { xs: 'center', lg: 'left' }, lineHeight: 1.5 }}>
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize', fontWeight: 700 }}>{name}</span> is one
          of the best exercises to target your {target}. It will help you improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center" sx={{ mb: '16px' }}>
            <Button sx={{ background: '#FBE8E6', borderRadius: '50%', width: '80px', height: '80px', p: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'background 0.3s ease, transform 0.3s ease', '&:hover': { background: '#F8C6C4', transform: 'scale(1.1)' } }}>
              <img src={item.icon} alt={item.name} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '24px', xs: '20px' }, color: '#333' }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
export default Detail;
