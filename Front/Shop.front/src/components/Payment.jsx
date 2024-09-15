import React from 'react';
import { Typography, TextField, Button, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { createOrder } from '../services/OrderService';

const Payment = () => {


  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * 1, 0);


  const handlePayment = async (event) => {
    event.preventDefault();

    const userId = localStorage.getItem('userId');
    
    if (!userId) {
      alert('User not logged in. Please log in to proceed.');
      return;
    }

    const orderData = {
      userId: userId,
      total: totalPrice, // Replace with the actual total if available
      paymentStatus: 'success',
    };

    try {
      await createOrder(orderData); // Call the service to create the order
      alert('Payment successful! Order created.');
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Payment failed. Please try again.');
    }
  }




  return (
    <>
      <h1>La Patissiere</h1>
      <Typography variant="h5">Payment Information</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Card Number" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Expiration Date" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="CVV" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Name on Card" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Billing Address" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Email Address" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handlePayment}>Pay Now</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Payment;
