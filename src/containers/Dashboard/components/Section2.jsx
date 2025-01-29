import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Diag from './Diag';

export default function Testimonials() {

  return (
    <Container
      id="section2"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        bgcolor: '#06090a',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
        }}
      >
        <Typography component="h2" variant="h4">
            Robot dosificador y administrador de insulina
        </Typography>
        <center>
            <Diag />
        </center>
      </Box>
    </Container>
  );
}