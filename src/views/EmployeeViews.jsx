/* eslint-disable react/prop-types */
import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../components/welcome/Welcome.jsx";
import { EmployeeNav } from "../components/nav/EmployeeNav.jsx";
import { FlowerList } from "../components/EmployeeFlower/FlowerList.jsx";

import { DistributorList } from "../components/Distributors/Distributors.jsx";

import { RetailerList } from "../components/retailers/RetailerList.jsx";
import { RetailerForm } from "../components/retailers/RetailerForm.jsx";
import { RetailerDetails } from "../components/retailers/RetailerDetails.jsx";
import { NurseryList } from "../components/nurseries/NurseryList.jsx"
import { AddNursery } from "../components/nurseries/AddNursery.jsx";
import { EditNursery } from "../components/nurseries/EditNursery.jsx";



export const EmployeeViews = ({ currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <EmployeeNav />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route
          path="/flowers"
          element={<FlowerList currentUser={currentUser}/>}
        />
        <Route path="/retailers" element={<RetailerList />} />
        <Route path="/retailers/new" element={<RetailerForm />} />
        <Route path="/retailers/:retailerId" element={<RetailerDetails />} />
        <Route path="/retailers/edit/:retailerId" element={<RetailerDetails />} />
        <Route
          path="/distributors"
          index element={<DistributorList currentUser={currentUser}/>}
        />
        <Route path="/nurseries" element={<NurseryList />} />
        <Route path="/nurseries/addNursery" element={<AddNursery />} />
        <Route path="/nurseries/editNursery/:id" element={<EditNursery />} />
      </Route>

       




    </Routes>
  );
};
