export const getFlowerNurseries = () => {
    return fetch(`http://localhost:8088/flowerNurseries`).then((res) => res.json());
  };
  