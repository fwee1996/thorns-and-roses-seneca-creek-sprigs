/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './flower.css';
import { Link } from 'react-router-dom';

export const CustomerFlower = ({ flower, onBuy }) => {
    if (!flower) {
        return null
    }

    return (
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

                <Link to={`/flowers/${flower.id}`}>
                    <Button className='purchase-flower' variant="info">View Details</Button>
                </Link>
                <Button className='purchase-flower' variant="success" onClick={() => onBuy(flower)}>Purchase Flower</Button>
            </Card.Body>
        </Card>
    )
}