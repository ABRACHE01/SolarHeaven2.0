import { Outlet } from "react-router";
import { AuthHeader } from "../components";

const RootLayout = () => {
      
  return (
    <>
    <AuthHeader/>
      <Outlet/>
    </>
  );
};

export default RootLayout;