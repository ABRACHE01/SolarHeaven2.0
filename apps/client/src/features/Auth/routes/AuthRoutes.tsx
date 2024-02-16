import { Route, Routes } from "react-router";
import  LoginContainer  from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer"

const AuthRoutes = () => (
  <Routes>
    <Route path="/">
      <Route path="login" element={<LoginContainer />} />
      <Route path="register" element={<RegisterContainer />} />
    </Route>
  </Routes>
);

export default AuthRoutes;