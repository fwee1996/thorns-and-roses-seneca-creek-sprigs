export const getAllFlowers = () => {
    return fetch(`http://localhost:8088/flowers`).then((res) => res.json());
};

export const getFlowerById = (id) => {
    return fetch(`http://localhost:8088/flowers/${id}`).then((res) => res.json());
};

export const createFlower = (flower) => {
    return fetch(`http://localhost:8088/flowers`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(flower),
    });
};

export const updateFlower = (flower) => {
    return fetch(`http://localhost:8088/flowers/${flower.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(flower),
    });
};

export const deleteFlower = (flowerId) => {
    return fetch(`http://localhost:8088/flowers/${flowerId}`, {
        method: "DELETE",
    });
};
