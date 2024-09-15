import { apiClient } from "../Api/apiClient";

export const createOrder = async (orderData) => {
  try {
    const res = await apiClient.post("Order", orderData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// Update the URL for getting orders by userId
export const getOrdersByUserId = async (userId) => {
  try {
    const res = await apiClient.get(`Order/user/${userId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// No change here; delete by orderId
export const deleteOrderById = async (orderId) => {
  try {
    await apiClient.delete(`Order/${orderId}`);
  } catch (error) {
    throw error;
  }
};
