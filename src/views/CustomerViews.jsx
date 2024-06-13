import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../components/welcome/Welcome.jsx";
import { CustomerNav } from "../components/nav/CustomerNav.jsx";
import { PurchaseFlower } from "../components/CustomerFlower/PurchaseFlower.jsx";
import { PurchaseForm } from "../components/CustomerFlower/PurchaseForm.jsx";
import { FlowerDetails } from "../components/CustomerFlower/FlowerDetails.jsx";

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
        <Route path="flowers">
          <Route index element={<PurchaseFlower currentUser={currentUser} />} />
          <Route path="create" element={<PurchaseForm />} currentUser={currentUser} />
          <Route path=":id" element={<FlowerDetails />} />
        </Route>
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
