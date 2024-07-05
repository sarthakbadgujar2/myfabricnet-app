// src/Login.tsx
import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

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
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>Login</Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
        {message && <Typography sx={{ mt: 2 }}>{message}</Typography>}
      </Box>
    </Container>
  );
};

export default Login;
