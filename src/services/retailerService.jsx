export const getAllRetailers = () => {
    return fetch(`http://localhost:8088/retailers`).then((res) => res.json());
  };
  
  export const getRetailerById = (id) => {
    return fetch(`http://localhost:8088/retailers/${id}`).then((res) => res.json());
  };
  
  export const createRetailer = (retailer) => {
    return fetch(`http://localhost:8088/retailers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(retailer),
    }).then((res) => res.json());
  };
  
  export const updateRetailer = (retailer) => {
    return fetch(`http://localhost:8088/retailers/${retailer.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(retailer),
    }).then((res) => res.json());
  };
  
  export const deleteRetailer = (retailerId) => {
    return fetch(`http://localhost:8088/retailers/${retailerId}`, {
      method: "DELETE",
    });
  };
  