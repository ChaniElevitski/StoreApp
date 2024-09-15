import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, Grid, Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Contact = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Box p={4}>
      <Typography variant="h3" gutterBottom>La Patissière</Typography>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>

      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Message"
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" color="primary" fullWidth>Send</Button>
        </Grid>
      </Grid>

      <Box mt={4} textAlign="center">
        <InstagramIcon sx={{ fontSize: 40, mr: 2 }} />
        <FacebookIcon sx={{ fontSize: 40 }} />
      </Box>

      <Button variant="outlined" onClick={handleClick} sx={{ mt: 2 }}>Back to Home</Button>
    </Box>
  );
};

export default Contact;
