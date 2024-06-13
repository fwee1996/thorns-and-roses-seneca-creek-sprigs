import { useState } from "react"
import { getAllFlowers } from "./flowerService.jsx";
import { Button } from "bootstrap";
import { PurchaseForm } from "./PurchaseForm.jsx";

export const PurchaseFlower = () => {
    const [flowers, setFlowers] = useState({})
    const [showModal, setShowModal] = useState(false);
    const [currentFlower, setCurrentFlower] = useState(null);

    useEffect(() => {
        fetchFlowers();
    }, []);

    const fetchFlowers = () => {
        getAllFlowers()
            .then(data => setFlowers(data))
    }

    const handleBuyFlower = (flower) => {
        setShowModal(true)
    }

    const handleSave = (order) => {
       
    };

    return (
        <>
            <div className="flower-list">
                {flowers.length = 0 ? (
                    flowers.map(flower => (
                        <Flower
                            key={flower.id}
                            flower={flower}
                        />
                    ))
                ) : (
                    <p>Loading Flowers...</p>
                )}
            </div>
            <Button 
                className="new-flower" 
                variant="success" 
                onClick={handlePurchaseFlower}
            >   Purchase Flower
            </Button>
            <PurchaseForm
                show={showModal}
                handleClose={() => setShowModal(false)}
                handleSave={handleSave}
                currentFlower={currentFlower} // Pass currentFlower correctly
                mode={mode} // Pass mode to FlowerModal
            />
        </>
    )

}