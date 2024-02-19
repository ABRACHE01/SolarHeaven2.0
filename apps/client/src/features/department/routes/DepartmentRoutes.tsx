import { Route, Routes } from "react-router";
import DepartmentDashboard from "../containers/DepartmentDashboard";

const DepartmentRoutes = () => (
  <Routes>
    <Route path="/">
      <Route index element={<DepartmentDashboard />} />
    </Route>
  </Routes>
);

export default DepartmentRoutes;