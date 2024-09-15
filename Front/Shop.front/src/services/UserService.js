import { apiClient } from "../Api/apiClient";

export const loginUser = async (credentials) => {
  try {
    const res = await apiClient.post("User/login", credentials);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const signUpUser = async (newUser) => {
  try {
    const res = await apiClient.post("User", newUser);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (user) => {
  try {
    const res = await apiClient.put(`User/${user.id}`, user);
    return res.data;
  } catch (error) {
    throw error;
  }
};


export const getUserById = async (userId) => {
  try {
    const res = await apiClient.get(`User/${userId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
