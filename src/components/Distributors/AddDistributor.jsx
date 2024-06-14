import { AddNewDistributor } from "../../services/distributorService.jsx";
import { useState } from "react";
import "./Distributors.css"


export const AddDistributor = ({currentUser}) => {
    const [newDistributor, setNewDistributor] = useState({})

    const handleAdd = () => {
        if (newDistributor.distributor) {
            const newDistributorCopy = {...newDistributor}
            newDistributorCopy.userId=currentUser.distributor
        } else {
            window.alert("Please Add Distributor")
        }
    }

    return (
        <main className=".tasks">
            
            <form>
            <div>
                <fieldset>
                    <div>
                        <input
                        type ="text"
                        >

                        </input>
                    </div>
                </fieldset>
            </div>

        </form>

        </main>
    )


}

