import React from 'react';
import { Typography, Container, Box, Grid } from '@mui/material';
import Login from './components/login/login';

const App: React.FC = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh', backgroundColor: 'rgba(123, 26, 63, 0.8)' }} // Red wine color with 80% opacity
    >
      <Grid item xs={12} md={8} lg={6}>
        <Box sx={{ mt: 4, p: 3, bgcolor: 'white', borderRadius: 8, boxShadow: 1 }}>
          <Typography variant="h4" component="header" sx={{ textAlign: 'center', mb: 4 }}>
            Fabric-Net Management
          </Typography>
          <Login />
        </Box>
      </Grid>
    </Grid>
  );
};

export default App;
