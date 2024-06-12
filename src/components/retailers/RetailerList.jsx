import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllRetailers } from '../../services/retailerService';
import { getAllFlowers } from '../../services/flowerService';
import { getAllDistributors } from '../../services/distributorService';
import { getAllNurseries } from '../../services/nurseryService';
import './Retailers.css';

export const RetailerList = () => {
  const [retailers, setRetailers] = useState([]);
  const [flowers, setFlowers] = useState([]);
  const [distributors, setDistributors] = useState([]);
  const [nurseries, setNurseries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([getAllRetailers(), getAllFlowers(), getAllDistributors(), getAllNurseries()])
      .then(([retailersData, flowersData, distributorsData, nurseriesData]) => {
        setRetailers(retailersData);
        setFlowers(flowersData);
        setDistributors(distributorsData);
        setNurseries(nurseriesData);
      });
  }, []);

  const getDistributorName = (distributorId) => {
    const distributor = distributors.find(d => d.id === distributorId);
    return distributor ? distributor.businessName : '';
  };

  const getNurseryNames = (distributorId) => {
    const relevantNurseries = nurseries.filter(n => n.distributorId === distributorId);
    return relevantNurseries.map(n => n.businessName).join(', ');
  };

  return (
    <section className="retailers">
      <button onClick={() => navigate('/retailers/new')}>Add New Retailer</button>
      {retailers.map(retailer => {
        const distributor = distributors.find(d => d.id === retailer.distributorId);
        const distributorNurseries = nurseries.filter(n => n.distributorId === distributor.id);

        return (
          <div key={retailer.id} className="retailer">
            <h2>{retailer.businessName}</h2>
            <p>{retailer.address}</p>
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
          </div>
        );
      })}
    </section>
  );
};
