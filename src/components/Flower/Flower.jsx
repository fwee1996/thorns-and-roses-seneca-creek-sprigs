import React  from 'react'
import './flower.css'
import { Card } from 'react-bootstrap'

export const Flower = ({ flower }) => {
    return (
        <Card className="flower-card">
            <Card.Body>
                <Card.Title>{flower.species}</Card.Title>
                <Card.Text>
                    Color: {flower.color}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}