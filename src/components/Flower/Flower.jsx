/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './flower.css';

const Flower = ({ flower }) => {
    if (!flower) {
        return null; // Avoid rendering if flower is undefined
    }

    return (
        <>
        <Card className="flower-card">
            <Card.Body>
                <Card.Title>{flower.species}</Card.Title>
                <Card.Text>
                    Color: {flower.color}
                </Card.Text>

                {flower.nurseries && flower.nurseries.length > 0 && (
                    <div>
                        <h5>Nurseries:</h5>
                        <ul>
                            {flower.nurseries.map(nursery => (
                                <li key={nursery.id}>{nursery.businessName}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {flower.retailers && flower.retailers.length > 0 && (
                    <div>
                        <h5>Retailers:</h5>
                        <ul>
                            {flower.retailers.map(retailer => (
                                <li key={retailer.id}>{retailer.businessName}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {flower.distributors && flower.distributors.length > 0 && (
                    <div>
                        <h5>Distributors:</h5>
                        <ul>
                            {flower.distributors.map(distributor => (
                                <li key={distributor.id}>{distributor.businessName}</li>
                            ))}
                        </ul>
                    </div>
                )}
                    <Button className='modify-flower' variant="warning">Modify</Button>
                    <Button className='delete-flower' variant="danger">Delete</Button>  
            </Card.Body>
        </Card>
        </>
        
    );
};

export default Flower;
