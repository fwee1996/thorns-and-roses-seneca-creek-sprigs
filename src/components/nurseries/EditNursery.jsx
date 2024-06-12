// import { useNavigate } from 'react-router-dom'
// import { getAllNurseries, modifyNursery } from '../../services/nurseryServices' 
// import { useEffect, useState } from 'react';

// export const EditNursery=()=>{
//     const navigate = useNavigate(); // useNavigate hook
//     const [allNurseries, setAllNurseries] = useState([]);
//     const [nurseryBeingEdited, setNurseryBeingEdited] = useState({}); // track which nursery is being edited

//  // fetch all nurseries on initial render
//  useEffect(() => {
//     getAllNurseries().then((nurseriesArray) => setAllNurseries(nurseriesArray));
//   }, []);

//   // handle editing nursery
//   const handleEditClick = (nursery) => {
//     setNurseryBeingEdited({ ...nursery });
//   };

//   // handle saving the edited nursery
//   const handleEditSave = async (event) => {
//     event.preventDefault(); // prevent default form submission
//     if (!nurseryBeingEdited.businessName) {
//       alert('Please fill out the business name!');
//       return;
//     }
//     await modifyNursery(nurseryBeingEdited);
//     setNurseryBeingEdited({}); // exit editing mode
//     getAllNurseries().then((nurseriesArray) => setAllNurseries(nurseriesArray));
//   };

// return(
// <div className='nursery'>
//     {allNurseries.map((nursery) => (
//       nurseryBeingEdited && nurseryBeingEdited.id === nursery.id ? (
//         <form key={nursery.id}>
//           <div className='form-group'>
//             <label>Business Name: </label>
//             <input
//               type='text'
//               className='form-control'
//               value={nurseryBeingEdited.businessName}
//               onChange={(event) =>
//                 setNurseryBeingEdited({ ...nurseryBeingEdited, businessName: event.target.value })
//               }
//             />
//           </div>

//           <div className='button-group'>
//             <button className='btn btn-success' onClick={handleEditSave}>Save</button>
//             <button className='btn btn-warning' onClick={() => setNurseryBeingEdited({})}>Cancel</button>
//           </div>
//         </form>
//       ) : null
//     ))}
//   </div>
// );
//         }


import { useNavigate } from 'react-router-dom';
import { getAllNurseries, modifyNursery } from '../../services/nurseryServices';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export const EditNursery = ({ nursery }) => {
  const navigate = useNavigate();
  const [nurseryBeingEdited, setNurseryBeingEdited] = useState(nursery || {});
  const { id } = useParams();

  // Fetch all nurseries on initial render
  useEffect(() => {
    getAllNurseries().then((nurseriesArray) => setAllNurseries(nurseriesArray));
  }, []);

  // Update the nurseryBeingEdited when nursery prop changes
  useEffect(() => {
    setNurseryBeingEdited(nursery || {});
  }, [nursery]);

  // State to store all nurseries
  const [allNurseries, setAllNurseries] = useState([]);

  const handleEditSave = async (event) => {
    event.preventDefault();
    if (!nurseryBeingEdited.businessName) {
      alert('Please fill out the business name!');
      return;
    }
    await modifyNursery(nurseryBeingEdited);
    navigate('/nurseries');
  };

  const handleCancel = () => {
    navigate('/nurseries');
  };

  return (
    <div>
      <h2>Edit Nursery</h2>
      <form>
        <div className='form-group'>
          <label>Business Name: </label>
          <input
            type='text'
            className='form-control'
            value={nurseryBeingEdited.businessName || ''}
            onChange={(event) =>
              setNurseryBeingEdited({ ...nurseryBeingEdited, businessName: event.target.value })
            }
          />
        </div>
        <div className='button-group'>
          <button className='btn btn-success' onClick={handleEditSave}>Save</button>
          <button className='btn btn-warning' onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};



// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { modifyNursery } from '../../services/nurseryServices' 

// export const EditNursery = ({currentUser}) => {
//     const [editNursery, setEditNursery] = useState({ businessName: '' })
//     const navigate = useNavigate() // useNavigate hook

//     const handleEditNursery = async (event) => {
//         event.preventDefault() // prevent default form submission
//         if (!editNursery.businessName) {
//             alert('Please fill out the businessName!')
//             return
//         }
//         const nursery = {
//             businessName: editNursery.businessName
//         }
//         await modifyNursery(nursery)
//         setEditNursery({ businessName: '' }) // clear input fields

//         navigate('/nurseries') // navigate back to nurseries after saving
//     }

//     return (
//         <form>
//             <div className="form-group">
//                 <label>Business Name : </label>
//                 {/* <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter Business Name"
//                     value={editNursery.businessName}
//                     // Update the editNursery state with the value typed by the user:
//                     onChange={(event) => setEditNursery({ ...editNursery, businessName: event.target.value })}
//                     // spread operator (...) creates copy of existing state object, editNursery with all its existing properties being preserved (synopsis and url), except user input of title 
//                 /> */}
//                 <input
//               type='text'
//               className='form-control'
//               value={editNursery.businessName}
//               onChange={(event) =>
//                 setEditNursery({ ...editNursery, businessName: event.target.value })
//               }
//             />
//             </div>

//             <div className="button-group">
//                 <button type="submit" className="btn btn-success" onClick={handleEditNursery}>
//                     Save
//                 </button>
//             </div>
//         </form>
//     )
// }



// // import { useState, useEffect } from 'react'
// // import { useNavigate } from 'react-router-dom'
// // import { modifyNursery } from '../../services/nurseryServices'

// // export const EditNursery = ({ nursery }) => {
//     const [editNursery, setEditNursery] = useState({ businessName: '' })
//     const navigate = useNavigate()

//     // Set the initial editNursery state when nursery prop changes
//     useEffect(() => {
//         if (nursery) {
//             setEditNursery(nursery)
//         }
//     }, [nursery])

//     const handleEditNursery = async (event) => {
//         event.preventDefault()
//         if (!editNursery.businessName) {
//             alert('Please fill out the businessName!')
//             return
//         }
//         // Call modifyNursery with the edited nursery data
//         await modifyNursery(editNursery)
//         setEditNursery({ businessName: '' }) // Clear input fields

//         navigate('/nurseries') // Navigate back to nurseries after saving
//     }

//     if (!nursery) {
//         return <div>Loading...</div> // Optionally handle case where nursery is not available yet
//     }

//     return (
//         <form>
//             <div className="form-group">
//                 <label>Business Name : </label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter Business Name"
//                     value={editNursery.businessName}
//                     onChange={(event) => setEditNursery({ ...editNursery, businessName: event.target.value })}
//                 />
//             </div>
//             <div className="button-group">
//                 <button type="submit" className="btn btn-success" onClick={handleEditNursery}>
//                     Save
//                 </button>
//             </div>
//         </form>
//     )
// }
