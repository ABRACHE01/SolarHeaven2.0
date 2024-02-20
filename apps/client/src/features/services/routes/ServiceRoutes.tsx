import { Route, Routes } from "react-router";
import ServicesContainer from "../containers/ServicesContainer";

const ServiceRoutes = () => (
  <Routes>
    <Route path="/">
      <Route index element={<ServicesContainer />} />
    </Route>
  </Routes>
);

export default ServiceRoutes;