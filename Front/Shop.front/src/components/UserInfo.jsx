import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText, Divider, TextField } from '@mui/material';
import { deleteOrderById, getOrdersByUserId } from '../services/OrderService';
import { updateUser, getUserById } from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {
  const [orders, setOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
  });
  const userId = localStorage.getItem('userId');
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await getUserById(userId);
        setUserDetails(response);
      } catch (error) {
        console.error("Failed to fetch user details", error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  const fetchOrders = async () => {
    try {
      const response = await getOrdersByUserId(userId);
      setOrders(response);
      setShowOrders(true);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    }
  };

  const deleteOrder = async (orderId) => {
    try {
      await deleteOrderById(orderId);
      setOrders(orders.filter(order => order.orderId !== orderId));
    } catch (error) {
      console.error("Failed to delete order", error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const updatedUser = await updateUser({ ...userDetails, id: userId });
      setIsEditing(false);
      setUserDetails(updatedUser);
      localStorage.setItem('username', updatedUser.firstName);
    } catch (error) {
      console.error("Failed to update user information", error);
    }
  };

  const handleSignOut = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        {username ? `Welcome ${username}!` : "User's Orders"}
      </Typography>
      
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#ffccbc', // Peach color
          color: '#fff',
          borderRadius: '50px', // Rounded corners
          marginBottom: '20px'
        }}
        onClick={fetchOrders}
      >
        Show My Orders
      </Button>
      
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#ffccbc', // Peach color
          color: '#fff',
          borderRadius: '50px', // Rounded corners
          marginBottom: '20px',
          marginLeft: '10px'
        }}
        onClick={handleEditClick}
      >
        Edit Profile
      </Button>
      
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#ff6f61', // Slightly darker peach color
          color: '#fff',
          borderRadius: '50px', // Rounded corners
          marginBottom: '20px',
          marginLeft: '10px'
        }}
        onClick={handleSignOut}
      >
        Sign Out
      </Button>

      {isEditing && (
        <Container maxWidth="sm" style={{ marginTop: '20px' }}>
          <TextField
            label="First Name"
            value={userDetails.firstName}
            onChange={(e) => setUserDetails({ ...userDetails, firstName: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Last Name"
            value={userDetails.lastName}
            onChange={(e) => setUserDetails({ ...userDetails, lastName: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone Number"
            value={userDetails.phoneNumber}
            onChange={(e) => setUserDetails({ ...userDetails, phoneNumber: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={userDetails.email}
            onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={userDetails.password}
            onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ffccbc', // Peach color
              color: '#fff',
              borderRadius: '50px', // Rounded corners
              marginTop: '20px'
            }}
            onClick={handleSaveClick}
          >
            Save
          </Button>
        </Container>
      )}

      {showOrders && (
        <List>
          {orders.map(order => (
            <div key={order.orderId}>
              <ListItem>
                <ListItemText
                  primary={`Order ID: ${order.orderId}`}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textPrimary">
                        Total: ${order.total}
                      </Typography>
                      <br />
                      <Typography component="span" variant="body2" color="textPrimary">
                        Payment Status: {order.paymentStatus}
                      </Typography>
                    </>
                  }
                />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#ff6f61', // Slightly darker peach color
                    color: '#fff',
                    borderRadius: '20px', // Rounded corners
                    marginLeft: '10px'
                  }}
                  onClick={() => deleteOrder(order.orderId)}
                >
                  Delete Order
                </Button>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      )}
    </Container>
  );
};

export default UserInfo;
