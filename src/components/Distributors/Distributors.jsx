import { useEffect, useState } from "react"
import { getAllDistributors } from "../../services/distributorService.jsx"
import { Navigate } from "react-router-dom"


export const DistributorList = (currentUser) => {
    const [distributors, setDistributors] = useState([])

    useEffect(() => {
       getAllDistributors(currentUser.id).then(distributorsArray => {
        const filterArray = distributorsArray.filter(distributors => distributors.userId === currentUser.Id)
        setDistributors(distributorsArray)

       })
            }, [currentUser], )

          

            return (
                <div>
                    <h1> Distributors </h1>
                    <button onClick={() => {Navigate("/distributors/add")}}> Add </button>
                               
                    {distributors.map(distObj => {
                        return <>
                            <div>
                                <h2>{distObj.businessName}</h2>
                                <button>Delete</button>
                            </div>
                        </>
                    })}

                </div>
            )
         
  
    


        }