/* eslint-disable react/prop-types */
import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../components/welcome/Welcome.jsx";
import { EmployeeNav } from "../components/nav/EmployeeNav.jsx";
import { FlowerList } from "../components/EmployeeFlower/FlowerList.jsx";
import { RetailerList } from "../components/retailers/RetailerList.jsx";
import { RetailerForm } from "../components/retailers/RetailerForm.jsx";
import { RetailerDetails } from "../components/retailers/RetailerDetails.jsx";


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
          element={<> TO DO </>}
        />
        <Route
          path="/nurseries"
          element={<> TO DO </>}
        />
      </Route>
    </Routes>
  );
};
