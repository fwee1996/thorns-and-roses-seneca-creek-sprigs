import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllRetailers, deleteRetailer, updateRetailer } from '../../services/retailerService';
import { getAllFlowers } from '../../services/flowerService';
import { getAllDistributors } from '../../services/distributorService';
import { getAllNurseries } from '../../services/nurseryService';
import { getFlowerNurseries } from '../../services/flowerNurseryService';
import './Retailers.css';
import { RetailerForm } from './RetailerForm.jsx';

export const RetailerList = () => {
  const [retailers, setRetailers] = useState([]);
  const [flowers, setFlowers] = useState([]);
  const [distributors, setDistributors] = useState([]);
  const [nurseries, setNurseries] = useState([]);
  const [flowerNurseries, setFlowerNurseries] = useState([]);
  const [distributorNurseries, setDistributorNurseries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentRetailer, setCurrentRetailer] = useState(null);
  const [mode, setMode] = useState('add'); // Add mode state

  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      getAllRetailers(),
      getAllFlowers(),
      getAllDistributors(),
      getAllNurseries(),
      getFlowerNurseries(),
      fetch('http://localhost:8088/distributorNurseries').then(res => res.json())
    ])
      .then(([retailersData, flowersData, distributorsData, nurseriesData, flowerNurseriesData, distributorNurseriesData]) => {
        console.log('Retailers:', retailersData);
        console.log('Flowers:', flowersData);
        console.log('Distributors:', distributorsData);
        console.log('Nurseries:', nurseriesData);
        console.log('Flower Nurseries:', flowerNurseriesData);
        console.log('Distributor Nurseries:', distributorNurseriesData);

        setRetailers(retailersData);
        setFlowers(flowersData);
        setDistributors(distributorsData);
        setNurseries(nurseriesData);
        setFlowerNurseries(flowerNurseriesData);
        setDistributorNurseries(distributorNurseriesData);
      });
  }, []);

  const getDistributorName = (distributorId) => {
    const distributor = distributors.find(distributor => distributor.id === distributorId);
    return distributor ? distributor.businessName : '';
  };

  const getNurseryNames = (distributorId) => {
    const relevantNurseries = distributorNurseries
      .filter(distributorNursery => distributorNursery.distributorId === distributorId)
      .map(distributorNursery => nurseries.find(nursery => nursery.id === distributorNursery.nurseryId))
      .filter(nursery => nursery !== undefined)
      .map(nursery => nursery.businessName);
    return relevantNurseries.join(', ');
  };

  const handleDelete = async (retailer) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete the retailer ${retailer.businessName}?`);
    if (confirmDelete) {
      try {
        await deleteRetailer(retailer.id);
        setRetailers(retailers.filter(retailer => retailer.id !== retailer.id));
      } catch (error) {
        alert(`Cannot delete retailer ${retailer.businessName}: ${error.message}`);
      }
    }
  };

  const handleModify = (retailer) => {
    setCurrentRetailer(retailer);
    setMode('modify'); 
    setShowModal(true);
  };

  const handleSave = (retailer) => {
    if (mode === 'modify') {
      updateRetailer(retailer).then(fetchRetailers);
    } else {
      // Handle add logic here if needed
    }
    setShowModal(false);
  };

  const fetchRetailers = () => {
    getAllRetailers()
      .then(data => setRetailers(data))
      .catch(error => console.error("Error fetching retailers:", error));
  };

  const getRetailerFlowers = (retailer) => {
    const distributorNurseryIds = distributorNurseries
      .filter(distributorNursery => distributorNursery.distributorId === retailer.distributorId)
      .map(distributorNursery => distributorNursery.nurseryId);

    console.log(`Distributor Nurseries for ${retailer.businessName}:`, distributorNurseryIds);

    const relevantFlowerNurseries = flowerNurseries.filter(flowerNursery => distributorNurseryIds.includes(flowerNursery.nurseryId));

    console.log(`Relevant Flower Nurseries for ${retailer.businessName}:`, relevantFlowerNurseries);

    const relevantFlowers = relevantFlowerNurseries.map(flowerNursery => {
      const flower = flowers.find(flower => flower.id === flowerNursery.flowerId);
      if (flower) {
        return {
          ...flower,
          price: (parseFloat(flowerNursery.price) * retailer.flowerMarkup).toFixed(2)
        };
      }
      return null;
    }).filter(flower => flower !== null);

    console.log(`Relevant Flowers for ${retailer.businessName}:`, relevantFlowers);

    return relevantFlowers;
  };

  return (
    <>
      <section className="retailer-list">
        {retailers.map(retailer => {
          const retailerFlowers = getRetailerFlowers(retailer);

          console.log(`Retailer: ${retailer.businessName}`, retailerFlowers);

          return (
            <div key={retailer.id} className="retailer-card">
              <h2>{retailer.businessName}</h2>
              <p>{retailer.address}</p>
              <h3>Flowers Sold:</h3>
              <ul>
                {retailerFlowers.map(flower => (
                  <li key={flower.id}>
                    {`${flower.color} ${flower.species}`} - Price: ${flower.price}
                  </li>
                ))}
              </ul>
              <h3>Distributors:</h3>
              <ul>
                <li>{getDistributorName(retailer.distributorId)}</li>
              </ul>
              <h3>Nurseries:</h3>
              <ul>
                {getNurseryNames(retailer.distributorId).split(', ').map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
              <button onClick={() => handleModify(retailer)}>Modify</button>
              <button onClick={() => handleDelete(retailer)}>Delete</button>
            </div>
          );
        })}
      </section>
      <button className="new-retailer" onClick={() => navigate('/retailers/new')}>Add New Retailer</button>
      <RetailerForm
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleSave={handleSave}
        currentRetailer={currentRetailer} 
        mode={mode} 
      />
    </>
  );
};
