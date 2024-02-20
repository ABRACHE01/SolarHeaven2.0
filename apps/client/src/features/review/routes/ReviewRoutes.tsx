import { Route, Routes } from "react-router";
import ReviewsContainer from "../containers/ReviewsContainer";


const ReviewRoutes = () => (
  <Routes>
    <Route path="/">
      <Route index element={<ReviewsContainer />} />
    </Route>
  </Routes>
);

export default ReviewRoutes;