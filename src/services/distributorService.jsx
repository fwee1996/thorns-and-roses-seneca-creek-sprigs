export const getAllDistributors = () => {

    return fetch(`http://localhost:8088/distributors?`).then((res) => res.json())
}


export const AddNewDistributor = (newdistributor) => {
    return fetch(`http://localhost:8088/distributors`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newdistributor), 
    }).then((res) => res.json())
}