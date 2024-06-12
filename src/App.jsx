import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ApplicationViews } from "./views/ApplicationViews.jsx";
import { Login } from "./components/auth/Login.jsx";
import { Register } from "./components/auth/Register.jsx";
import { Authorized } from "./views/Authorized.jsx";
import { EmployeeNav } from "./components/nav/EmployeeNav.jsx";
import { RetailerList } from "./components/retailers/RetailerList.jsx";
import { RetailerDetails } from "./components/retailers/RetailerDetails.jsx";

export const App = () => {
  return (
    <>
      <EmployeeNav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/retailers" element={<RetailerList />} />
        <Route path="/retailers/:retailerId" element={<RetailerDetails />} />
        <Route
          path="*"
          element={
            <Authorized>
              <ApplicationViews />
            </Authorized>
          }
        />
      </Routes>
    </>
  );
};
