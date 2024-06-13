export const getAllNurseries=()=>{
    return fetch(`http://localhost:8088/nurseries`).then ((res)=>res.json())}
  
    //add: item
  export const createNewNursery = (nursery) => {
    return fetch('http://localhost:8088/nurseries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nursery),
    }).then ((res)=>res.json())
    
  }
  
  //delete: id
  export const deleteNursery=(id)=>{
    return fetch(`http://localhost:8088/nurseries/${id}`,{ 
    method: "DELETE",
  })
  }

  //modify : item.id
  export const modifyNursery = async (nursery) => {
    const response = await fetch(`http://localhost:8088/nurseries/${nursery.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nursery),
    })
    return response.json()
  }


  //get Flowers associated with nursery
  export const getFlowersForNursery = (nurseryId) => {
    return fetch(`http://localhost:8088/flowerNurseries?nurseryId=${nurseryId}&_expand=flower`).then(res =>
         res.json())
  }


  //get Distributors associated with nursery
  export const getDistributorsForNursery = (nurseryId) => {
      return fetch(`http://localhost:8088/distributorNurseries?nurseryId=${nurseryId}&_expand=distributor`).then(res =>
          res.json())
  }



  