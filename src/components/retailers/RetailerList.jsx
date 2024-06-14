
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { getAllRetailers, deleteRetailer, createRetailer, updateRetailer } from '../../services/retailerService';
import { getAllFlowers } from '../../services/flowerService';
import { getAllDistributors } from '../../services/distributorService';
import { getAllNurseries } from '../../services/nurseryService';
import { getFlowerNurseries } from '../../services/flowerNurseryService';
import { RetailerForm } from './RetailerForm';
import './Retailers.css';

export const RetailerList = () => {
  const [retailers, setRetailers] = useState([]);
  const [flowers, setFlowers] = useState([]);
  const [distributors, setDistributors] = useState([]);
  const [nurseries, setNurseries] = useState([]);
  const [flowerNurseries, setFlowerNurseries] = useState([]);
  const [distributorNurseries, setDistributorNurseries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentRetailer, setCurrentRetailer] = useState(null);
  const [mode, setMode] = useState('add'); 

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
      setRetailers(retailersData);
      setFlowers(flowersData);
      setDistributors(distributorsData);
      setNurseries(nurseriesData);
      setFlowerNurseries(flowerNurseriesData);
      setDistributorNurseries(distributorNurseriesData);
    });
  }, []);

  const getDistributorName = (distributorId) => {
    const distributor = distributors.find(d => d.id === distributorId);
    return distributor ? distributor.businessName : '';
  };

  const getNurseryNames = (distributorId) => {
    const relevantNurseries = distributorNurseries
      .filter(dn => dn.distributorId === distributorId)
      .map(dn => nurseries.find(n => n.id === dn.nurseryId))
      .filter(n => n !== undefined)
      .map(n => n.businessName);
    return relevantNurseries.join(', ');
  };

  const handleDelete = async (retailer) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete the retailer ${retailer.businessName}?`);
    if (confirmDelete) {
      try {
        await deleteRetailer(retailer.id);
        setRetailers(retailers.filter(r => r.id !== retailer.id));
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

  const handleAdd = () => {
    setCurrentRetailer(null);
    setMode('add'); 
    setShowModal(true);
  };

  const handleSave = (retailer) => {
    if (mode === 'modify') {
      updateRetailer(retailer).then(fetchRetailers);
    } else {
      createRetailer(retailer).then(fetchRetailers);
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
      .filter(dn => dn.distributorId === retailer.distributorId)
      .map(dn => dn.nurseryId);

    const relevantFlowerNurseries = flowerNurseries.filter(fn => distributorNurseryIds.includes(fn.nurseryId));

    const relevantFlowers = relevantFlowerNurseries.map(fn => {
      const flower = flowers.find(f => f.id === fn.flowerId);
      if (flower) {
        return {
          ...flower,
          price: (parseFloat(fn.price) * retailer.flowerMarkup).toFixed(2)
        };
      }
      return null;
    }).filter(f => f !== null);

    return relevantFlowers;
  };

  return (
    <>
      <section className="retailer-list">
        {retailers.map(retailer => {
          const retailerFlowers = getRetailerFlowers(retailer);

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
              <Button variant="warning" onClick={() => handleModify(retailer)}>Modify</Button>
              <Button variant="danger" onClick={() => handleDelete(retailer)}>Delete</Button>
            </div>
          );
        })}
      </section>
      <Button className="new-retailer" variant="success" onClick={handleAdd}>Add Retailer</Button>
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
