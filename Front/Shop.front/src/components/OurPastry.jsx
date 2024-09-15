import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../states/cartSlice';
import getAllPastries from '../services/pastries';
// import GetAllProducts from '../services/ProductsService';

const OurPastry = () => {
  const [pastriesList, setPastriesList] = useState([]);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const pastries = await getAllPastries();
      // const pastries = await GetAllProducts();
      setPastriesList(pastries);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddToCart = (pastry) => {
    dispatch(addToCart({ name: pastry.name, price: pastry.price, amount: 1 }));
  };

  return (
    <Grid container spacing={2}>
      {pastriesList.map((pastry) => (
        <Grid item xs={6} sm={4} md={3} key={pastry.name}>
          <Card>
            <CardActionArea component={Link} to={pastry.name}>
              <CardMedia component="img" height="140" image={pastry.img} alt={pastry.name} />
              <CardContent>
                <Typography variant="subtitle1" component="h2">
                  {pastry.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Price: {pastry.price}
                </Typography>
      
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default OurPastry;
