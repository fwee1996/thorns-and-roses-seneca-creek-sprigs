import { useEffect, useState } from "react"
import { getAllFlowers } from "./flowerService.jsx"
import './flower.css';
import { Flower } from "./Flower.jsx";

export const FlowerList = () => {
    const [flowers, setFlowers] = useState([])

        useEffect(() => {
            getAllFlowers().then(data => setFlowers(data))
        }, [])

    return (
        <div className="flower-list">
            {flowers.map(flower => (
                <Flower key={flower.id} flower={flower} />
            ))}
        </div>
    )
}