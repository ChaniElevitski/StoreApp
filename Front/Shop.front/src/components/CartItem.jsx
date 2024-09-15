import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Button, Grid } from '@mui/material';
import { removeFromCart } from '../states/cartSlice';

const CartItem = ({ item, smallImage }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ name: item.name }));
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={2}>
        <Typography>{item.name}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>Price: {item.price}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>Amount: {item.amount}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Button onClick={handleRemoveFromCart}>Remove</Button>
      </Grid>
    </Grid>
  );
};

export default CartItem;
