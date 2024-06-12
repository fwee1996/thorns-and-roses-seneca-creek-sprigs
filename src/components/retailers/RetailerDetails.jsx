import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRetailerById } from '../../services/retailerService';
import { getAllFlowers } from '../../services/flowerService';
import { getAllDistributors } from '../../services/distributorService';
import { getAllNurseries } from '../../services/nurseryService';
import './Retailers.css';

export const RetailerDetails = () => {
  const [retailer, setRetailer] = useState(null);
  const [flowers, setFlowers] = useState([]);
  const [distributors, setDistributors] = useState([]);
  const [nurseries, setNurseries] = useState([]);
  const { retailerId } = useParams();

  useEffect(() => {
    Promise.all([getRetailerById(retailerId), getAllFlowers(), getAllDistributors(), getAllNurseries()])
      .then(([retailerData, flowersData, distributorsData, nurseriesData]) => {
        setRetailer(retailerData);
        setFlowers(flowersData);
        setDistributors(distributorsData);
        setNurseries(nurseriesData);
      });
  }, [retailerId]);

  if (!retailer) {
    return <p>Loading...</p>;
  }

  const getFlowerDetails = (flowerId) => {
    const flower = flowers.find(f => f.id === flowerId);
    return flower ? `${flower.color} ${flower.species}` : '';
  };

  const getDistributorName = (distributorId) => {
    const distributor = distributors.find(d => d.id === distributorId);
    return distributor ? distributor.businessName : '';
  };

  const getNurseryNames = (distributorId) => {
    const relevantNurseries = nurseries.filter(nursery => nursery.distributorId === distributorId);
    return relevantNurseries.map(n => n.businessName).join(', ');
  };

  const distributor = distributors.find(d => d.id === retailer.distributorId);
  const distributorNurseries = nurseries.filter(n => n.distributorId === distributor.id);
  const retailerFlowers = flowers.filter(f => distributorNurseries.some(n => n.id === f.nurseryId));

  return (
    <section className="retailer">
      <h2>{retailer.businessName}</h2>
      <p>{retailer.address}</p>
      <h3>Flowers Sold:</h3>
      <ul>
        {retailerFlowers.map(flower => (
          <li key={flower.id}>
            {getFlowerDetails(flower.id)} - Price: ${(flower.price * retailer.flowerMarkup).toFixed(2)}
          </li>
        ))}
      </ul>
      <h3>Distributors:</h3>
      <ul>
        <li>{getDistributorName(retailer.distributorId)}</li>
      </ul>
      <h3>Nurseries:</h3>
      <ul>
        {distributorNurseries.map(nursery => (
          <li key={nursery.id}>{nursery.businessName}</li>
        ))}
      </ul>
    </section>
  );
};
