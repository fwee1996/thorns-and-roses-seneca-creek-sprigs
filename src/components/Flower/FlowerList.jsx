import React, { useState, useEffect } from 'react';
import Flower from './Flower';
import './flower.css';
import { getAllFlowers } from './flowerService.jsx';
import { Button } from 'react-bootstrap';

const FlowerList = () => {
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        getAllFlowers()
            .then(data => setFlowers(data))
            .catch(error => console.error("Error fetching flowers:", error));
    }, []);

    return (
        <>
        <div className="flower-list">
            {flowers.length > 0 ? (
                flowers.map(flower => (
                    <Flower key={flower.id} flower={flower} />
                ))
            ) : (
                <p>Loading flowers...</p>
            )}
        </div>
        <Button className='new-flower' variant="success">Add Flower</Button>
        </>
        
    );
};

export default FlowerList;
