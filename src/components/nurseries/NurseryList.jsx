// // Then a list should be presented to the employee with the following information:
// // Business Name
// // An unordered list of all flowers that the nursery grows showing color, species and the price set be the nursery for that flower
// // An unordered list of distributor business names that purchases flowers from the nursery.

// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { deleteNursery, getAllNurseries } from '../../services/nurseryServices'
// import './NurseryList.css'
// import { getFlowersForNursery, getDistributorsForNursery } from '../../services/nurseryServices'

// export const NurseryList = () => {
//   const navigate = useNavigate() // useNavigate hook
//   const [allNurseries, setAllNurseries] = useState([])
//   const [flowersByNursery, setFlowersByNursery] = useState({})
//   const [distributorsByNursery, setDistributorsByNursery] = useState({})

//   // fetch all nurseries on initial render
//   useEffect(() => {
//     getAllNurseries().then((nurseriesArray) => setAllNurseries(nurseriesArray))
//   }, [])

//   // fetch flowers for each nursery
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

//   // handle deleting a nursery
//   const handleDeleteNursery = async (nurseryId) => {
//     await deleteNursery(nurseryId)
//     getAllNurseries().then((nurseriesArray) => {
//       setAllNurseries(nurseriesArray)
//     })
//   }

//   return (
//     <>
//       <h2>Nurseries</h2>
//       <div className='button-group'>
//         <button className='btn btn-primary' onClick={() => navigate('/nurseries/addNursery')}>+ New Nursery</button>
//       </div>
//       <div className='nursery'>
//         {allNurseries.map((nursery) => (
//           <div className='nursery-list-item' key={nursery.id}>

//             <h2 key={nursery.id} onClick={() => navigate(`/nurseries/nurseryDetails/${nursery.id}`)}>{nursery.businessName}</h2>

//             <div>
//             {/* Render flowers for this nursery */}
//             <h3>Flowers:</h3>
//             <ul>
//                 {flowersByNursery[nursery.id]?.map((flowerNursery) => (
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
//                 {distributorsByNursery[nursery.id]?.map((distributorNursery) => (
//                   <li key={distributorNursery.id}>
//                     {distributorNursery.distributor.businessName}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className='button-group'>
//               <button className='btn btn-primary' onClick={() => navigate(`/nurseries/editNursery/${nursery.id}`)}>Edit</button>
//               <button className='btn btn-danger btn-sm' onClick={() => handleDeleteNursery(nursery.id)}>Delete</button>
//             </div>

//           </div>
//         ))}
//       </div>
//     </>
//   )
//   }








// Then a list should be presented to the employee with the following information:
// Business Name
// An unordered list of all flowers that the nursery grows showing color, species and the price set be the nursery for that flower
// An unordered list of distributor business names that purchases flowers from the nursery.

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteNursery, getAllNurseries } from '../../services/nurseryServices'
import './NurseryList.css'
import { getFlowersForNursery, getDistributorsForNursery } from '../../services/nurseryServices'

export const NurseryList = () => {
  const navigate = useNavigate() // useNavigate hook
  const [allNurseries, setAllNurseries] = useState([])
  const [flowersByNursery, setFlowersByNursery] = useState({})
  const [distributorsByNursery, setDistributorsByNursery] = useState({})

  // fetch all nurseries on initial render
  useEffect(() => {
    getAllNurseries().then((nurseriesArray) => setAllNurseries(nurseriesArray))
  }, [])

  // fetch flowers for each nursery
  useEffect(() => {
    const fetchFlowers = async () => {
      const flowers = {}
      for (const nursery of allNurseries) {
        const flowersForNursery = await getFlowersForNursery(nursery.id)
        flowers[nursery.id] = flowersForNursery
      }
      setFlowersByNursery(flowers)
    }

    fetchFlowers()
  }, [allNurseries])


  // fetch distributors for each nursery
  useEffect(() => {
    const fetchDistributors = async () => {
      const distributors = {}
      for (const nursery of allNurseries) {
        const distributorsForNursery = await getDistributorsForNursery(nursery.id)
        distributors[nursery.id] = distributorsForNursery
      }
      setDistributorsByNursery(distributors)
    }

    fetchDistributors()
  }, [allNurseries])

  // handle deleting a nursery
  const handleDeleteNursery = async (nurseryId) => {
    await deleteNursery(nurseryId)
    getAllNurseries().then((nurseriesArray) => {
      setAllNurseries(nurseriesArray)
    })
  }

  return (
    <>
      <h2>Nurseries</h2>
      <div className='button-group'>
        <button className='btn btn-primary' onClick={() => navigate('/nurseries/addNursery')}>+ New Nursery</button>
      </div>
      <div className='nursery'>
        {allNurseries.map((nursery) => (
          <div className='nursery-list-item' key={nursery.id}>

            <h2 key={nursery.id} onClick={() => navigate(`/nurseries/nurseryDetails/${nursery.id}`)}>{nursery.businessName}</h2>


            <div className='button-group'>
              <button className='btn btn-primary' onClick={() => navigate(`/nurseries/editNursery/${nursery.id}`)}>Edit</button>
              <button className='btn btn-danger btn-sm' onClick={() => handleDeleteNursery(nursery.id)}>Delete</button>
            </div>

          </div>
        ))}
      </div>
    </>
  )
  }



