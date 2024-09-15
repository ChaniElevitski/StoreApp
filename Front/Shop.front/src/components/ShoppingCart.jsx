import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Button, Grid } from '@mui/material';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.amount, 0);

  return (
    <>
      <Typography variant="h4">Shopping Cart</Typography>
      {cartItems.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {cartItems.map((item, index) => (
            <Grid item xs={12} key={index}>
              <CartItem item={item} smallImage={true} />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography variant="h6">Total: {totalPrice.toFixed(2)}</Typography>
            <Button variant="contained" color="primary" component={Link} to="/payment">
              Proceed to Payment
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ShoppingCart;
