import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRetailer } from '../../services/retailerService';

export const RetailerForm = () => {
  const [businessName, setBusinessName] = useState('');
  const [address, setAddress] = useState('');
  const [flowerMarkup, setFlowerMarkup] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newRetailer = {
      businessName,
      address,
      flowerMarkup: parseFloat(flowerMarkup)
    };

    const createdRetailer = await createRetailer(newRetailer);
    navigate(`/retailers/${createdRetailer.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Retailer</h2>
      <div>
        <label>Business Name:</label>
        <input
          type="text"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Flower Price Markup:</label>
        <input
          type="number"
          step="0.01"
          value={flowerMarkup}
          onChange={(e) => setFlowerMarkup(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};
