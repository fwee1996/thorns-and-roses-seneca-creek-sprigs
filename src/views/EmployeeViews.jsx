import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../components/welcome/Welcome.jsx";
import { Navbar } from "react-bootstrap";
import { EmployeeNav } from "../components/nav/EmployeeNav.jsx";

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
          element={<> TO DO </>}
        />
        <Route path="/retailers"
        element={<> TO DO </>} />
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
