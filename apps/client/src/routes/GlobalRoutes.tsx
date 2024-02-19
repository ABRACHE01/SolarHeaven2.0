import { Route, Routes } from "react-router";
import AuthRoutes from "../features/Auth/routes/AuthRoutes";
import { PageNotFound } from "../shared/pages";
import { RootLayout } from "../shared/layouts";
import AuthMiddleware from "../features/Auth/middlewares/AuthMiddleware";
import GuestMiddleware from "../features/Auth/middlewares/GuestMiddleware";
import LandingPage from "../shared/pages/LandingPage";
import AdminRoutes from "../features/Admin/routes/AdminRoutes";
import CustomerRoutes from "../features/Customer/routes/CustomerRoutes";
import TechnicianRoutes from "../features/Technician/routes/TechnicianRoutes";
const GlobalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
      <Route  index element={<LandingPage />}/>

        <Route
          path="auth/*"
          element={
            <GuestMiddleware>
              <AuthRoutes />
            </GuestMiddleware>
          }
        />

        <Route
          path="admin/*"
          element={
            <AuthMiddleware>
              <AdminRoutes />
            </AuthMiddleware>
          }
        />

        <Route
          path="customer/*"
          element={
            <AuthMiddleware>
              <CustomerRoutes />
            </AuthMiddleware>
          }
        />

        <Route
          path="technician/*"
          element={
            <AuthMiddleware>
              <TechnicianRoutes />
            </AuthMiddleware>
          }
        />
           
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default GlobalRoutes;
