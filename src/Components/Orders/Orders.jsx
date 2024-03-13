// OrderDetailsComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Orders.css'; // Import the CSS file


const Orders = () => {
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getorderdetails'); // Adjust the API endpoint to match your backend
        setOrderDetails(response.data);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchOrderDetails();
  }, []);

  return (
    <div className="order-details-container">
      <h2>Order Details</h2>
      <ul className="order-details-list">
        {orderDetails.map((order, index) => (
          <li key={index} className="order-details-item">
            <p>Product ID: {order.userId._id}</p>
            <p>Full Name: {order.fullName}</p>
            <p>Phone Number: {order.phoneNumber}</p>
            <p>Street Address: {order.streetAddress}</p>
            <p>State: {order.selectedState}</p>
            <p>District: {order.selectedDistrict}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
