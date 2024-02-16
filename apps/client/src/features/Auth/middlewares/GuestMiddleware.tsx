import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/authSelectors";
import { Navigate } from "react-router-dom";

const GuestMiddleware = ({ children } : any ) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};


export default GuestMiddleware;