import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllRetailers } from '../../services/retailerService.jsx';
import './Retailers.css';


export const RetailerDetails = () => {
  const [retailer, setRetailer] = useState(null);
  const { retailerId } = useParams();

  useEffect(() => {
    getAllRetailers().then(data => {
      const retailerObject = data.find(retailer => retailer.id.toString() === retailerId);
      setRetailer(retailerObject);
    });
  }, [retailerId]);

  if (!retailer) {
    return <p>Loading...</p>;
  }

  return (
    <section className="retailer">
      <header className="retailer-header">{retailer.name}</header>
      <div>
        <span className="retailer-info">Date: </span>
        {retailer.date}
      </div>
      <div>
        <span className="retailer-info">Location: </span>
        {retailer.location}
      </div>
    </section>
  );
};
