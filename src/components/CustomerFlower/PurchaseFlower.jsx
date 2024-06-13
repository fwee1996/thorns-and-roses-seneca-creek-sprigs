import { useEffect, useState } from "react"
import { getAllFlowers } from '../EmployeeFlower/flowerService.jsx'
import { PurchaseForm } from "./PurchaseForm.jsx"
import { CustomerFlower } from "./CustomerFlower"

export const PurchaseFlower = () => {
    const [flowers, setFlowers] = useState({})
    const [showModal, setShowModal] = useState(false);
    const [currentFlower, setCurrentFlower] = useState(null);

    useEffect(() => {
        fetchFlowers()
    }, [])

    const fetchFlowers = () => {
        getAllFlowers()
            .then(data => setFlowers(data))
    }

    const handleBuyFlower = (flower) => {
        setCurrentFlower(flower)
        setShowModal(true)
    }

    const handleSave = (order) => {
        setShowModal(false)
    }

    return (
        <>
            <div className="flower-list">
                {flowers.length > 0 ? (
                    flowers.map(flower => (
                        <CustomerFlower
                            key={flower.id}
                            flower={flower}
                            onBuy={handleBuyFlower}
                        />
                    ))
                ) : (
                    <p>Loading Flowers...</p>
                )}
            </div>
            <PurchaseForm
                show={showModal}
                handleClose={() => setShowModal(false)}
                handleSave={handleSave}
                currentFlower={currentFlower}
            />
        </>
    )

}