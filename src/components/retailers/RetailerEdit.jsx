import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getRetailerById, updateRetailer } from '../../services/retailerService';

export const RetailerEdit = () => {
  const [retailer, setRetailer] = useState({ businessName: '', address: '', flowerMarkup: '' });
  const { retailerId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getRetailerById(retailerId).then(setRetailer);
  }, [retailerId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRetailer(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRetailer(retailer).then(() => navigate('/retailers'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Retailer</h2>
      <div>
        <label htmlFor="businessName">Business Name:</label>
        <input
          type="text"
          id="businessName"
          name="businessName"
          value={retailer.businessName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={retailer.address}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="flowerMarkup">Flower Markup:</label>
        <input
          type="text"
          id="flowerMarkup"
          name="flowerMarkup"
          value={retailer.flowerMarkup}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={() => navigate('/retailers')}>Cancel</button>
    </form>
  );
};
