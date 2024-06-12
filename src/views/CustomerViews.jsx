import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../components/welcome/Welcome.jsx";
import { CustomerNav } from "../components/nav/CustomerNav.jsx";

export const CustomerViews = ({ currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <CustomerNav />
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
