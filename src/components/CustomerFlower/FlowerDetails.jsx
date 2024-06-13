// src/components/Flowers/FlowerDetails.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllFlowers } from '../EmployeeFlower/flowerService.jsx'

export const FlowerDetails = () => {
    const { id } = useParams();
    const [flower, setFlower] = useState(null);

    useEffect(() => {
        getAllFlowers().then(data => {
            const foundFlower = data.find(f => f.id === parseInt(id))
            setFlower(foundFlower)
        })
    }, [id])

    if (!flower) {
        return <p>Flower not found</p>;
    }

    return (
        <div>
            <h1>{flower.species}</h1>
            <p>Color: {flower.color}</p>
            <h3>Nurseries</h3>
            <ul>
                {flower.nurseries.map(nursery => (
                    <li key={nursery.id}>{nursery.businessName}</li>
                ))}
            </ul>
            <h3>Retailers</h3>
            <ul>
                {flower.retailers.map(retailer => (
                    <li key={retailer.id}>{retailer.businessName} - ${retailer.price}</li>
                ))}
            </ul>
            <h3>Distributors</h3>
            <ul>
                {flower.distributors.map(distributor => (
                    <li key={distributor.id}>{distributor.businessName} - ${distributor.price}</li>
                ))}
            </ul>
        </div>
    )
}
