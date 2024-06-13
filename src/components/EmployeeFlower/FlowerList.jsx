/* eslint-disable no-unused-vars */
// src/components/Flowers/FlowerList.jsx
import React, { useState, useEffect } from 'react'
import Flower from './Flower'
import './flower.css'
import { Button } from 'react-bootstrap'
import { FlowerForm } from "./FlowerForm.jsx";

import { addFlower, deleteFlower, getAllFlowers, updateFlower } from './flowerService.jsx'

export const FlowerList = () => {
    const [flowers, setFlowers] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [currentFlower, setCurrentFlower] = useState(null)
    const [mode, setMode] = useState('add')

    useEffect(() => {
        fetchFlowers()
    }, []);

    const fetchFlowers = () => {
        getAllFlowers()
            .then(data => setFlowers(data))
            .catch(error => console.error("Error fetching flowers:", error))
    };

    const handleAdd = () => {
        setCurrentFlower(null);
        setMode('add')
        setShowModal(true)
    };

    const handleModify = (flower) => {
        setCurrentFlower(flower)
        setMode('modify')
        setShowModal(true)
    };

    const handleSave = (flower) => {
        if (mode === 'modify') {
            updateFlower(currentFlower.id, flower).then(fetchFlowers)
        } else {
            addFlower(flower).then(fetchFlowers)
        }
    }

    const handleDelete = (id) => {
        deleteFlower(id).then(fetchFlowers)
    }

    return (
        <>
            <div className="flower-list">
                {flowers.length > 0 ? (
                    flowers.map(flower => (
                        <Flower
                            key={flower.id}
                            flower={flower}
                            onModify={handleModify}
                            onDelete={handleDelete}
                        />
                    ))
                ) : (
                    <p>Loading flowers...</p>
                )}
            </div>
            <Button className='new-flower' variant="success" onClick={handleAdd}>Add Flower</Button>
            <FlowerForm
                show={showModal}
                handleClose={() => setShowModal(false)}
                handleSave={handleSave}
                currentFlower={currentFlower} // Pass currentFlower correctly
                mode={mode} // Pass mode to FlowerModal
            />
        </>
    )
}

