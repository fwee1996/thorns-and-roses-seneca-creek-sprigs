/* eslint-disable react/prop-types */
import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../components/welcome/Welcome.jsx";
import { EmployeeNav } from "../components/nav/EmployeeNav.jsx";
import { FlowerList } from "../components/EmployeeFlower/FlowerList.jsx";
import { DistributorList } from "../components/Distributors/Distributors.jsx";


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
        <Route path="/retailers"
        element={<> TO DO </>} />
        <Route
          path="/distributors"
          index element={<DistributorList currentUser={currentUser}/>}
        />
        <Route
          path="/nurseries"
          element={<> TO DO </>}
        />
      </Route>

       




    </Routes>
  );
};
