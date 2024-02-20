import { Route, Routes } from "react-router";
import CustomerDashboard from "../containers/CustomerDashboard";


const CustomerRoutes = () => (
  <Routes>
    <Route path="/">
      <Route index element={<CustomerDashboard />} />
    </Route>
  </Routes>
);

export default CustomerRoutes;