// src/lib/api.js
import axios from 'axios';

// Function to get the token from localStorage (or other places like cookies or Redux store)
const getAuthToken = () => {
    return localStorage.getItem('authToken'); 
};


const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Base URL from .env
    headers: {
        'Content-Type': 'application/json',
    },
});



// Function to attach the Bearer token to the Authorization header dynamically
const setAuthHeader = () => {
    const token = getAuthToken();
    if (token) {
        axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
    } else {
        // Clear any existing Authorization header if no token is found
        delete axiosInstance.defaults.headers['Authorization'];
    }
};



// Function to make GET requests
export const getData = async (endPoint) => {
    try {
        setAuthHeader(); 
        const response = await axiosInstance.get(endPoint);
        return response.data; // Return the response data directly
    } catch (error) {
        console.error('Error fetching data:', error.response ? error.response.data : error.message);
        throw error; // Throw the error for further handling in the component
    }
};



// Function to make POST requests
export const postData = async (endPoint, data) => {
    try {
        setAuthHeader(); 
        const response = await axiosInstance.post(endPoint, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error.response ? error.response.data : error.message);
        throw error;
    }
};



// Function to make PUT requests (for updating data)
export const putData = async (endPoint, data) => {
    try {
        setAuthHeader(); 
        const response = await axiosInstance.put(endPoint, data);
        return response.data;
    } catch (error) {
        console.error('Error updating data:', error.response ? error.response.data : error.message);
        throw error;
    }
};



// Function to make DELETE requests (for deleting data)
export const deleteData = async (endPoint) => {
    try {
        setAuthHeader(); 
        const response = await axiosInstance.delete(endPoint);
        return response.data;
    } catch (error) {
        console.error('Error deleting data:', error.response ? error.response.data : error.message);
        throw error;
    }
};

