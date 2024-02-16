import { Route, Routes } from "react-router";
import DashContainer from "../containers/DashContainer";

const DashRoutes = () => (
  <Routes>
    <Route path="/">
      <Route index element={<DashContainer />} />
    </Route>
  </Routes>
);

export default DashRoutes;