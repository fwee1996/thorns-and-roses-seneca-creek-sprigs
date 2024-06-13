// import React, { useEffect, useState } from 'react'
// import { getFlowersForNursery, getDistributorsForNursery, getAllNurseries } from '../../services/nurseryServices'
// import { useNavigate, useParams } from 'react-router-dom'


// export const NurseryDetails =()=>{
//     const { id } = useParams()
//     const [allNurseries, setAllNurseries] = useState([])
//     const [flowersByNursery, setFlowersByNursery] = useState({})
//   const [distributorsByNursery, setDistributorsByNursery] = useState({})

  
//     // fetch all nurseries on initial render
//     useEffect(() => {
//         getAllNurseries().then(nurseriesArray => {
//             const nursery = nurseriesArray.find(nursery => nursery.id === parseInt(id))
//             setAllNurseries(nurseriesArray)
//         })
//       }, [id])




//       // fetch flowers for each nursery
//   useEffect(() => {
//     const fetchFlowers = async () => {
//       const flowers = {}
//       for (const nursery of allNurseries) {
//         const flowersForNursery = await getFlowersForNursery(nursery.id)
//         flowers[nursery.id] = flowersForNursery
//       }
//       setFlowersByNursery(flowers)
//     }

//     fetchFlowers()
//   }, [allNurseries])


//   // fetch distributors for each nursery
//   useEffect(() => {
//     const fetchDistributors = async () => {
//       const distributors = {}
//       for (const nursery of allNurseries) {
//         const distributorsForNursery = await getDistributorsForNursery(nursery.id)
//         distributors[nursery.id] = distributorsForNursery
//       }
//       setDistributorsByNursery(distributors)
//     }

//     fetchDistributors()
//   }, [allNurseries])

//     return (<>
//      <div>
//      {/* <h2>{allNurseries[id]?.businessName}</h2> */}
//      {/* <h2>{allNurseries[id]?.map((Nursery) => (
//                   <li key={Nursery.id}>
//                     {Nursery.businessName}
//                   </li>
//                 ))}</h2> */}

//             {/* Render flowers for this nursery */}
//             <h3>Flowers:</h3>
//             <ul>
//                 {flowersByNursery[id]?.map((flowerNursery) => (
//                   <li key={flowerNursery.id}>
//                     {flowerNursery.flower.species}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//             {/* Render distributors for this nursery */}
//             <h3>Distributors:</h3>
//             <ul>
//                 {distributorsByNursery[id]?.map((distributorNursery) => (
//                   <li key={distributorNursery.id}>
//                     {distributorNursery.distributor.businessName}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//     </>)
// }



















// import React, { useEffect, useState } from 'react'
// import { getFlowersForNursery, getDistributorsForNursery, getAllNurseries } from '../../services/nurseryServices'
// import { useParams } from 'react-router-dom'

// export const NurseryDetails = () => {
//     const { id } = useParams()
//     const [nursery, setNursery] = useState(null)
//     const [flowers, setFlowers] = useState([])
//     const [distributors, setDistributors] = useState([])

//     // Fetch all nurseries and filter the one matching the ID from URL params
//     useEffect(() => {
//         getAllNurseries().then(nurseriesArray => {
//             const selectedNursery = nurseriesArray.find(nursery => nursery.id === parseInt(id))
//             setNursery(selectedNursery)
//         })
//     }, [id])



// //       // fetch flowers for each nursery
// //   useEffect(() => {
// //     const fetchFlowers = async () => {
// //       const flowers = {}
// //       for (const nursery of allNurseries) {
// //         const flowersForNursery = await getFlowersForNursery(nursery.id)
// //         flowers[nursery.id] = flowersForNursery
// //       }
// //       setFlowersByNursery(flowers)
// //     }

// //     fetchFlowers()
// //   }, [allNurseries])


// //   // fetch distributors for each nursery
// //   useEffect(() => {
// //     const fetchDistributors = async () => {
// //       const distributors = {}
// //       for (const nursery of allNurseries) {
// //         const distributorsForNursery = await getDistributorsForNursery(nursery.id)
// //         distributors[nursery.id] = distributorsForNursery
// //       }
// //       setDistributorsByNursery(distributors)
// //     }

// //     fetchDistributors()
// //   }, [allNurseries])



//     // Fetch flowers for the selected nursery
//     useEffect(() => {
//         if (nursery) {
//             getFlowersForNursery(nursery.id).then(flowersData => {
//                 setFlowers(flowersData)
//             })
//         }
//     }, [nursery])

//     // Fetch distributors for the selected nursery
//     useEffect(() => {
//         if (nursery) {
//             getDistributorsForNursery(nursery.id).then(distributorsData => {
//                 setDistributors(distributorsData)
//             })
//         }
//     }, [nursery])

//     if (!nursery) {
//         return <div>No nursery</div>
//     }

//     return (
//         <>
//             <div className='nursery-list-item'>
//                 <h2>{nursery.businessName}</h2>

//                 <div>
//                     <h3>Flowers:</h3>
//                     <ul>
//                         {flowers.map(flower => (
//                             <li key={flower.id}>{flower.species}</li>
//                         ))}
//                     </ul>
//                 </div>

//                 <div>
//                     <h3>Distributors:</h3>
//                     <ul>
//                         {distributors.map(distributor => (
//                             <li key={distributor.id}>{distributor.businessName}</li>
//                         ))}
//                     </ul>
//                 </div>



//             </div>
//         </>
//     )
// }




// Render flowers for this nursery
// <div>
//              <h3>Flowers:</h3>
//              <ul>
//                  {flowersByNursery[id]?.map((flowerNursery) => (
//                    <li key={flowerNursery.id}>
//                      {flowerNursery.flower.species}
//                    </li>
//                  ))}
//                </ul>
//              </div>

//              <div>
//              {/* Render distributors for this nursery */}
//              <h3>Distributors:</h3>
//              <ul>
//                  {distributorsByNursery[id]?.map((distributorNursery) => (
//                    <li key={distributorNursery.id}>
//                      {distributorNursery.distributor.businessName}
//                    </li>
//                  ))}
//                </ul>
//              </div>








import React, { useEffect, useState } from 'react'
import { getFlowersForNursery, getDistributorsForNursery, getAllNurseries } from '../../services/nurseryServices'
import { useParams } from 'react-router-dom'

export const NurseryDetails = () => {
    const { id } = useParams()
    const [nursery, setNursery] = useState(null)
    const [flowers, setFlowers] = useState([])
    const [distributors, setDistributors] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const nurseriesData = await getAllNurseries()
                const selectedNursery = nurseriesData.find(nursery => nursery.id === parseInt(id))
                setNursery(selectedNursery)

                if (selectedNursery) {
                    const flowersData = await getFlowersForNursery(selectedNursery.id)
                    setFlowers(flowersData)

                    const distributorsData = await getDistributorsForNursery(selectedNursery.id)
                    setDistributors(distributorsData)
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [id])

    if (!nursery) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className='nursery-list-item'>
                <h2>{nursery.businessName}</h2>

                <div>
                    <h3>Flowers:</h3>
                    <ul>
                        {flowers.map(flower => (
                            <li key={flower.id}>{flower.species}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3>Distributors:</h3>
                    <ul>
                        {distributors.map(distributor => (
                            <li key={distributor.id}>{distributor.businessName}</li>
                        ))}
                        </ul>
                    </div>
                    </div>
         </>
     )
 }
