import { useSelector } from "react-redux";
import { selectIsLoggedIn , selectCurrentUser } from "../redux/authSelectors";
import { Navigate } from "react-router-dom";

const GuestMiddleware = ({ children } : any ) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
const user = useSelector(selectCurrentUser);
    
  if (isLoggedIn && user) {
    return <Navigate to={`/${ user.role}`} />;
  }

  return children;
};


export default GuestMiddleware;