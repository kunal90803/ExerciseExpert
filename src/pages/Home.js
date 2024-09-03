import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box sx={{ background: 'linear-gradient(180deg, #f0f4f8 0%, #d9e1e8 100%)', minHeight: '100vh' }}>
      <HeroBanner />
      <Container sx={{ paddingY: '40px', maxWidth: 'lg' }}>
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        <Box sx={{ marginTop: '40px', paddingX: '20px' }}>
          <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
