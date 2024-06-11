// Then a list should be presented to the employee with the following information:
// Business Name
// An unordered list of all flowers that the nursery grows showing color, species and the price set be the nursery for that flower
// An unordered list of distributor business names that purchases flowers from the nursery.
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteNursery, getAllNurseries, modifyNursery } from '../services/nurseryServices'; // Added 'modifyNursery' import
import './NurseryList.css';

export const NurseryList = () => {
  const navigate = useNavigate(); // useNavigate hook
  const [allNurseries, setAllNurseries] = useState([]);
  const [nurseryBeingEdited, setNurseryBeingEdited] = useState({}); // track which nursery is being edited

  // fetch all nurseries on initial render
  useEffect(() => {
    getAllNurseries().then((nurseriesArray) => setAllNurseries(nurseriesArray));
  }, []);

  // handle editing nursery
  const handleEditClick = (nursery) => {
    setNurseryBeingEdited({ ...nursery });
  };

  // handle saving the edited nursery
  const handleEditSave = async (event) => {
    event.preventDefault(); // prevent default form submission
    if (!nurseryBeingEdited.businessName) {
      alert('Please fill out the business name!');
      return;
    }
    await modifyNursery(nurseryBeingEdited);
    setNurseryBeingEdited({}); // exit editing mode
    getAllNurseries().then((nurseriesArray) => setAllNurseries(nurseriesArray));
  };

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
        <button className='btn btn-primary' onClick={() => navigate('/news/addNursery')}>+ New Nursery</button>
      </div>

      <div className='nursery'>
        {allNurseries.map((nursery) => {
          if (nurseryBeingEdited && nurseryBeingEdited.id === nursery.id) {
            return (
              <form key={nursery.id}>
                <div className='form-group'>
                  <label>Business Name: </label>
                  <input
                    type='text'
                    className='form-control'
                    value={nurseryBeingEdited.businessName}
                    onChange={(event) =>
                      setNurseryBeingEdited({ ...nurseryBeingEdited, businessName: event.target.value })
                    }
                  />
                </div>

                <div className='button-group'>
                  <button className='btn btn-success' onClick={handleEditSave}>Save</button>
                  <button className='btn btn-warning' onClick={() => setNurseryBeingEdited({})}>Cancel</button>
                </div>
              </form>
            );
          } else {
            return (
              <div className='nursery-list-item' key={nursery.id}>
                <h2>{nursery.businessName}</h2>
                {/* flower list */}
                {/* distributor list */}
                {/* {nursery.userId === currentUser.id && ( */}
                <div className='button-group'>
                  <button className='btn btn-danger btn-sm' onClick={() => handleDeleteNursery(nursery.id)}>Delete</button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
