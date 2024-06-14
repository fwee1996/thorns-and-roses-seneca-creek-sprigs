export const getAllNurseries = () => {
    return fetch(`http://localhost:8088/nurseries`).then((res) => res.json());
};

export const getNurseryById = (id) => {
    return fetch(`http://localhost:8088/nurseries/${id}`).then((res) => res.json());
};

export const createNursery = (nursery) => {
    return fetch(`http://localhost:8088/nurseries`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nursery),
    });
};

export const updateNursery = (nursery) => {
    return fetch(`http://localhost:8088/nurseries/${nursery.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nursery),
    });
};

export const deleteNursery = (nurseryId) => {
    return fetch(`http://localhost:8088/nurseries/${nurseryId}`, {
        method: "DELETE",
    });
};
