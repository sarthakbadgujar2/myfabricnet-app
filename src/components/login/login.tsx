// src/Login.tsx
import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Box,Grid } from '@mui/material';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
      try {
        
          const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
                    console.log("API CALL SUCCESS",setEmail,setPassword,response.data)

      setMessage(`Login successful: ${response.data.message}`);
    } catch (error: any) {
      setMessage(`Login failed: ${error.response?.data?.message || error.message}`);
    }
  };
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 4,
          color: 'black',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            margin="normal"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            margin="normal"
            variant="outlined"
            sx={{ mb: 2 }}
          />
      <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
        {message && (
          <Typography sx={{ mt: 2 }} color={message.includes('failed') ? 'error' : 'success'}>
            {message}
          </Typography>
        )}
      </Box>
    </Container>
  );
};


export default Login;
