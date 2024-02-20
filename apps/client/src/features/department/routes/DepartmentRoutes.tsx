import { Route, Routes } from "react-router";
import DepartmentsContainer from "../containers/DepartmentsContainer";

const DepartmentRoutes = () => (
  <Routes>
    <Route path="/">
      <Route index element={<DepartmentsContainer />} />
    </Route>
  </Routes>
);

export default DepartmentRoutes;