/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ApplicationViews } from "./views/ApplicationViews.jsx";
import { Login } from "./components/auth/Login.jsx";
import { Register } from "./components/auth/Register.jsx";
import { Authorized } from "./views/Authorized.jsx";

export const App = () => {
  return ( 
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />


      <Route 
        path="*" 
        element={
          // Check if the user is authorized first
        <Authorized>
          {/* ApplicationView is the CHILD component of Authorized */}
          <ApplicationViews /> 
        </Authorized>
      }
    />
    </Routes>
  )
};




