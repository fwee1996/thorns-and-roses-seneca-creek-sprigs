import { useEffect, useState } from "react"
import { getAllDistributors } from "../../services/distributorService.jsx"

export const DistributorList = () => {
    const [distributors, setDistributors] = useState([])

    useEffect(() => {
       getAllDistributors().then(distributorsArray => {
        setDistributors(distributorsArray)

       })
            }, [], )

            return (
                <div>
                    <h1> Distributors 
                        
                    </h1>
                </div>
            )
         
  
    


        }