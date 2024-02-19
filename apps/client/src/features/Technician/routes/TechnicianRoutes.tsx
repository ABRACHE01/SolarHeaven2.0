import { Route, Routes } from "react-router";
import TechnicianContainer from "../containers/TechnicianContainer";

const TechnicianRoutes = () => (
  <Routes>
    <Route path="/">
      <Route index element={<TechnicianContainer />} />
    </Route>
  </Routes>
);

export default TechnicianRoutes;