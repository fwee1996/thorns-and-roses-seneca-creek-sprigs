export const getAllDistributors = () => {

    return fetch(`http://localhost:8088/distributors`).then((res) => res.json());
};



export const AddNewDistributor = (newdistributor) => {
    return fetch(`http://localhost:8088/distributors`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(distributor),
    });
};

export const updateDistributor = (distributor) => {
    return fetch(`http://localhost:8088/distributors/${distributor.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(distributor),
    });
};

export const deleteDistributor = (distributorId) => {
    return fetch(`http://localhost:8088/distributors/${distributorId}`, {
        method: "DELETE",
    })
}