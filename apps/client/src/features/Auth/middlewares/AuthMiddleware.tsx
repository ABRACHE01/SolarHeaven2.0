import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/authSelectors";
import { Navigate } from "react-router-dom";

const AuthMiddleware = ({ children  }: any ) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};



export default AuthMiddleware;