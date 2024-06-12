// import { useNavigate } from "react-router-dom";
// import { deleteRetailer } from "../../services/retailerService.jsx";
// import "./Retailers.css";
// import { Messages } from "../messages/Messages.jsx";

// export const Retailer = ({ retailer, currentUser, getAndSetRetailers, }) => {
//     const navigate = useNavigate();

//     const handleUpdate = () => {
//         navigate(`/retailers/edit/${retailer.id}`);
//     };

//     const handleDelete = () => {
//         deleteRetailer(retailer.id).then(() => {
//             getAndSetRetailers();
//         });
//     };

//     return (
//         <section >
//             <header className="retailer-info"></header>
//             <div>{retailer.name}</div>
//             <div>{retailer.date}</div>
//             <div>{retailer.location}</div>
//             <footer>
//                 {retailer.userId === currentUser.id && (
//                     <div className="button-container">
//                         <button className="btn btn-warning" onClick={handleUpdate}>Edit</button>
//                         <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
//                     </div>
//                 )}
//             </footer>
//             <div>
//                 <Messages />
//             </div>
//         </section>
//     );
// };
