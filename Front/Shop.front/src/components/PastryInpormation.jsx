import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Typography, Grid, Box, TextField, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { useDispatch } from 'react-redux';
import { addToCart } from '../states/cartSlice';
import getAllPastries from '../services/pastries';

const PastryInformation = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [pastry, setPastry] = useState(null);
  const [amount, setAmount] = useState(1);

  const fetchData = async () => {
    try {
      const pastries = await getAllPastries();
      const foundPastry = pastries.find((p) => p.name === name);
      if (foundPastry) {
        setPastry(foundPastry);
      } else {
        navigate('/');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ name: pastry.name, price: pastry.price, amount }));
    navigate('/shoppingCart'); // Redirect to the cart page after adding the item
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        {pastry && (
          <Box sx={{ position: 'relative', width: '100%', textAlign: 'center' }}>
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: '3px solid gold', borderRadius: '8px', padding: '10px', backgroundColor: '#FFE4B5', marginTop:'170px' }}>
              <img src={pastry.img} alt={pastry.name} style={{ width: '100%', borderRadius: '8px' }} />
            </Box>
          </Box>
        )}
      </Grid>
      <Grid item xs={12} md={6}>
        {pastry && (
          <>
            <Typography variant="h4" gutterBottom>
              {pastry.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Price: {pastry.price}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Description:
            </Typography>
            <TextField
              variant="outlined"
              multiline
              rows={4}
              value={pastry.description}
              InputProps={{
                readOnly: true,
              }}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <InputLabel id="amount-label">Amount</InputLabel>
              <Select
                labelId="amount-label"
                id="amount"
                value={amount}
                onChange={handleAmountChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" startIcon={<ShoppingCartRoundedIcon />} onClick={handleAddToCart} sx={{ mt: 2 }}>
              Add to Cart
            </Button>
            <Button variant="outlined" onClick={() => navigate('../')} sx={{ mt: 2, ml: 1 }}>
              Back to All Pastries
            </Button>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default PastryInformation;
