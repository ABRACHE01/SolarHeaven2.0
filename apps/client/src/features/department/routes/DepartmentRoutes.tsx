import { Route, Routes } from "react-router";
import DepartmentsContainer from "../containers/DepartmentsContainer";
import DepartmentDetails from "../containers/DepartmentDetails";

const DepartmentRoutes = () => (
  <Routes>
    <Route path="/">
      <Route index element={<DepartmentsContainer />} />
      <Route path="/:departmentId" element={<DepartmentDetails />} />
    </Route>
  </Routes>
);

export default DepartmentRoutes;