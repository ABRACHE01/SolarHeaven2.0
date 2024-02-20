import { Route, Routes } from "react-router";
import CategoryContainer from "../containers/CategoryContainer";

const CategoryRoutes = () => (
  <Routes>
    <Route path="/">
      <Route index element={<CategoryContainer/>} />
    </Route>
  </Routes>
);

  
export default CategoryRoutes;