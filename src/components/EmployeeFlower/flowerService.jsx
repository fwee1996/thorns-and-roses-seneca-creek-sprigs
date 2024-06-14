export const getAllFlowers = async () => {
    const flowers = await fetch('http://localhost:8088/flowers').then(res => res.json())
    const flowerNurseries = await fetch('http://localhost:8088/flowerNurseries').then(res => res.json())
    const nurseries = await fetch('http://localhost:8088/nurseries').then(res => res.json())
    const retailers = await fetch('http://localhost:8088/retailers').then(res => res.json())
    const distributors = await fetch('http://localhost:8088/distributors').then(res => res.json())
    const distributorNurseries = await fetch('http://localhost:8088/distributorNurseries').then(res => res.json())

    // Combine data
    const flowerData = flowers.map(flower => {
        const flowerNursery = flowerNurseries.filter(fn => fn.flowerId === flower.id)
        
        const relatedNurseries = flowerNursery.map(fn => nurseries.find(nursery => nursery.id === fn.nurseryId))
        
        const relatedDistributors = distributors.filter(distributor => 
            distributorNurseries.some(dn => dn.distributorId === distributor.id && 
                flowerNursery.some(fn => fn.nurseryId === dn.nurseryId))
        )

        const relatedRetailers = retailers.filter(retailer => 
            relatedDistributors.some(distributor => distributor.id === retailer.distributorId)
        )

        return {
            ...flower,
            nurseries: relatedNurseries,
            retailers: relatedRetailers,
            distributors: relatedDistributors
        }
    })

    return flowerData
}

export const addFlower = (flower) => {
    return fetch('http://localhost:8088/flowers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(flower)
    }).then(res => res.json())
}

export const updateFlower = (id, flower) => {
    return fetch(`http://localhost:8088/flowers/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(flower)
    }).then(res => res.json())
}

export const deleteFlower = (id) => {
    return fetch(`http://localhost:8088/flowers/${id}`, {
        method: 'DELETE'
    })
}
