import { Route, Routes } from "react-router";
import AdminDashboard from "../containers/AdminDashboard";

const AdminRoutes = () => (
  <Routes>
    <Route path="/">
      <Route index element={<AdminDashboard />} />
    </Route>
  </Routes>
);

export default AdminRoutes;