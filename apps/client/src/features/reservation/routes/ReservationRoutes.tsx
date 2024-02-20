import { Route, Routes } from "react-router";
import ReservationContainer from "../containers/ReservationContainer";

const ReservationRoutes = () => (
  <Routes>
    <Route path="/">
      <Route index element={<ReservationContainer />} />
    </Route>
  </Routes>
);

export default ReservationRoutes;