// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { getRetailerById, updateRetailer } from '../../services/retailerService';

// export const RetailerEdit = () => {
//   const [retailer, setRetailer] = useState({ businessName: '', address: '', flowerMarkup: '' });
//   const { retailerId } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     getRetailerById(retailerId).then(setRetailer);
//   }, [retailerId]);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setRetailer(prevState => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     updateRetailer(retailer).then(() => navigate('/retailers'));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Edit Retailer</h2>
//       <div>
//         <label htmlFor="businessName">Business Name:</label>
//         <input
//           type="text"
//           id="businessName"
//           name="businessName"
//           value={retailer.businessName}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="address">Address:</label>
//         <input
//           type="text"
//           id="address"
//           name="address"
//           value={retailer.address}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="flowerMarkup">Flower Markup:</label>
//         <input
//           type="text"
//           id="flowerMarkup"
//           name="flowerMarkup"
//           value={retailer.flowerMarkup}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">Save</button>
//       <button type="button" onClick={() => navigate('/retailers')}>Cancel</button>
//     </form>
//   );
// };


import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllNurseries, modifyNursery } from '../../services/nurseryServices';

export const EditNursery = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [nurseryBeingEdited, setNurseryBeingEdited] = useState({ businessName: '', address: '', flowerMarkup: '' });

  useEffect(() => {
    getAllNurseries().then(nurseriesArray => {
      const nursery = nurseriesArray.find(nursery => nursery.id === parseInt(id));
      setNurseryBeingEdited(nursery);
    });
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNurseryBeingEdited(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await modifyNursery(nurseryBeingEdited);
    navigate('/nurseries');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Nursery</h2>
      <div>
        <label htmlFor="businessName">Business Name:</label>
        <input
          type="text"
          id="businessName"
          name="businessName"
          value={nurseryBeingEdited.businessName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={nurseryBeingEdited.address}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="flowerMarkup">Flower Markup:</label>
        <input
          type="text"
          id="flowerMarkup"
          name="flowerMarkup"
          value={nurseryBeingEdited.flowerMarkup}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={() => navigate('/nurseries')}>Cancel</button>
    </form>
  );
};
