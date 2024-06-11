export const getAllFlowers = async () => {
    const flowers = await fetch('http://localhost:8088/flowers').then(res => res.json());
    const flowerNurseries = await fetch('http://localhost:8088/flowerNurseries').then(res => res.json());
    const nurseries = await fetch('http://localhost:8088/nurseries').then(res => res.json());
    const retailers = await fetch('http://localhost:8088/retailers').then(res => res.json());
    const distributors = await fetch('http://localhost:8088/distributors').then(res => res.json());
    const distributorNurseries = await fetch('http://localhost:8088/distributorNurseries').then(res => res.json());

    // Combine data
    const flowerData = flowers.map(flower => {
        const flowerNursery = flowerNurseries.filter(fn => fn.flowerId === flower.id);
        const flowerRetailers = retailers.filter(retailer => 
            flowerNursery.some(fn => fn.nurseryId === retailer.id));
        const flowerDistributors = distributors.filter(distributor => 
            distributorNurseries.some(dn => dn.distributorId === distributor.id && 
                flowerNursery.some(fn => fn.nurseryId === dn.nurseryId))
        );

        return {
            ...flower,
            nurseries: flowerNursery.map(fn => nurseries.find(nursery => nursery.id === fn.nurseryId)),
            retailers: flowerRetailers,
            distributors: flowerDistributors
        };
    });

    return flowerData;
};
