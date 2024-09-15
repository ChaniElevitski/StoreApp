import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box, IconButton, ListItem, Link } from '@mui/material';
import { Home, Info, ContactMail, Cake, ShoppingCart, Person } from '@mui/icons-material';

const Layout = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#FFDAB9', color: 'black' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            La Patissière
            <Cake />
          </Typography>
          <NavLink
            to="/about"
            style={{ color: 'black', textDecoration: 'none', marginRight: '20px' }}
            activeStyle={{ color: 'black' }}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            style={{ color: 'black', textDecoration: 'none', marginRight: '20px' }}
            activeStyle={{ color: 'black' }}
          >
            Contact
          </NavLink>
          <NavLink
            to="/ourPastry"
            style={{ color: 'black', textDecoration: 'none', marginRight: '20px' }}
            activeStyle={{ color: 'black' }}
          >
            Our Pastries
          </NavLink>
          <NavLink
            to="/shoppingCart"
            style={{ color: 'black', textDecoration: 'none', marginRight: '20px' }}
            activeStyle={{ color: 'black' }}
          >
            <ShoppingCart />
          </NavLink>

          {username ? (
 <NavLink
 to="/userInfo"
 style={{ color: 'black', textDecoration: 'none', marginRight: '20px' }}
 activeStyle={{ color: 'black' }}
>
Hello, {username}
</NavLink>
       
          ) : (
            <IconButton
              component={NavLink}
              to="/login"
              color="inherit"
           
            >
              <Person />
            </IconButton>
          )}

          <IconButton component={NavLink} to="/" color="inherit">
            <Home />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout;
