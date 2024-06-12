// Then a list should be presented to the employee with the following information:
// Business Name
// An unordered list of all flowers that the nursery grows showing color, species and the price set be the nursery for that flower
// An unordered list of distributor business names that purchases flowers from the nursery.
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteNursery, getAllNurseries, modifyNursery } from '../../services/nurseryServices';
import './NurseryList.css';

export const NurseryList = () => {
  const navigate = useNavigate(); // useNavigate hook
  const [allNurseries, setAllNurseries] = useState([]);
  const [nurseryBeingEdited, setNurseryBeingEdited] = useState({}); // track which nursery is being edited

  // fetch all nurseries on initial render
  useEffect(() => {
    getAllNurseries().then((nurseriesArray) => setAllNurseries(nurseriesArray));
  }, []);



  // handle deleting a nursery
  const handleDeleteNursery = async (nurseryId) => {
    await deleteNursery(nurseryId);
    getAllNurseries().then((nurseriesArray) => {
      setAllNurseries(nurseriesArray);
    });
  };

  return (
    <>
      <h2>Nurseries</h2>
      <div className='button-group'>
        <button className='btn btn-primary' onClick={() => navigate('/nurseries/addNursery')}>+ New Nursery</button>
      </div>
      <div className='nursery'>
      {allNurseries.map((nursery) => (
              <div className='nursery-list-item' key={nursery.id}>
                <h2>{nursery.businessName}</h2>
                {/* flower list */}
                {/* distributor list */}
                {/* {nursery.userId === currentUser.id && ( */}
                <div className='button-group'>
                <button className='btn btn-primary' onClick={() => navigate(`/nurseries/editNursery/${nursery.id}`)}>Edit</button>
                  <button className='btn btn-danger btn-sm' onClick={() => handleDeleteNursery(nursery.id)}>Delete</button>
                </div>
              </div>
      ))}
      </div>
    </>
  );
};



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { deleteNursery, getAllNurseries } from '../../services/nurseryServices';
// import './NurseryList.css';

// export const NurseryList = () => {
//   const navigate = useNavigate();
//   const [allNurseries, setAllNurseries] = useState([]);

//   useEffect(() => {
//     getAllNurseries().then((nurseriesArray) => setAllNurseries(nurseriesArray));
//   }, []);

//   const handleDeleteNursery = async (nurseryId) => {
//     await deleteNursery(nurseryId);
//     getAllNurseries().then((nurseriesArray) => {
//       setAllNurseries(nurseriesArray);
//     });
//   };

//   // Function to navigate to editNursery page with the selected nursery data
//   const handleEditNursery = (nursery) => {
//     navigate('/nurseries/editNursery', { state: { nursery } });
//   };

//   return (
//     <>
//       <h2>Nurseries</h2>
//       <div className='button-group'>
//         <button className='btn btn-primary' onClick={() => navigate('/nurseries/addNursery')}>+ New Nursery</button>
//       </div>
//       <div className='nursery'>
//         {allNurseries.map((nursery) => (
//           <div className='nursery-list-item' key={nursery.id}>
//             <h2>{nursery.businessName}</h2>
//             <div className='button-group'>
//               {/* Pass the nursery object to handleEditNursery */}
//               <button className='btn btn-primary' onClick={() => handleEditNursery(nursery)}>Edit</button>
//               <button className='btn btn-danger btn-sm' onClick={() => handleDeleteNursery(nursery.id)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };



// // NurseryList.jsx

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { deleteNursery, getAllNurseries } from '../../services/nurseryServices';
// import './NurseryList.css';

// export const NurseryList = () => {
//   const navigate = useNavigate();
//   const [allNurseries, setAllNurseries] = useState([]);

//   useEffect(() => {
//     getAllNurseries().then((nurseriesArray) => setAllNurseries(nurseriesArray));
//   }, []);

//   const handleDeleteNursery = async (nurseryId) => {
//     await deleteNursery(nurseryId);
//     getAllNurseries().then((nurseriesArray) => {
//       setAllNurseries(nurseriesArray);
//     });
//   };

//   // Function to navigate to editNursery page with the selected nursery data
//   const handleEditNursery = (nursery) => {
//     // Navigate to the editNursery route and pass the nursery object as state
//     navigate('/nurseries/editNursery', { state: { nursery } });
//   };

//   return (
//     <>
//       <h2>Nurseries</h2>
//       <div className='button-group'>
//         <button className='btn btn-primary' onClick={() => navigate('/nurseries/addNursery')}>+ New Nursery</button>
//       </div>
//       <div className='nursery'>
//         {allNurseries.map((nursery) => (
//           <div className='nursery-list-item' key={nursery.id}>
//             <h2>{nursery.businessName}</h2>
//             <div className='button-group'>
//               {/* Pass the nursery object to handleEditNursery */}
//               <button className='btn btn-primary' onClick={() => handleEditNursery(nursery)}>Edit</button>
//               <button className='btn btn-danger btn-sm' onClick={() => handleDeleteNursery(nursery.id)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };
