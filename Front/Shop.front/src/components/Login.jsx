import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/UserService';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const user = await loginUser({ firstName, password });
      localStorage.setItem('username', user.firstName);
      localStorage.setItem('userId', user.id);
      console.log(user);
      navigate('/');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  const handleSignUpRedirect = () => {
    navigate('/signup');
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>

        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <Typography color="error" variant="body2" gutterBottom>
            {error}
          </Typography>
        )}

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#ffccbc', // Peach color
            color: '#fff',
            borderRadius: '50px', // Rounded corners
            mt: 2
          }}
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>

        <Button
          variant="text"
          sx={{
            color: '#ffccbc', // Peach color
            borderRadius: '50px', // Rounded corners
            mt: 2
          }}
          onClick={handleSignUpRedirect}
        >
          Don't have an account? Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
