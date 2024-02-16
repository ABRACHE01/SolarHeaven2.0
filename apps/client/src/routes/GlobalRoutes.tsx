import { Route, Routes } from "react-router";
import AuthRoutes from "../features/Auth/routes/AuthRoutes";
import DashRoutes from "../features/dashboard/routes/DashRoutes";
import { PageNotFound } from "../shared/pages";
import { RootLayout } from "../shared/layouts";
import AuthMiddleware from "../features/Auth/middlewares/AuthMiddleware";
import GuestMiddleware from "../features/Auth/middlewares/GuestMiddleware";
const GlobalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route
          path="auth/*"
          element={
            <GuestMiddleware>
              <AuthRoutes />
            </GuestMiddleware>
          }
        />
        <Route
          path="dashboard/*"
          element={
            <AuthMiddleware>
              <DashRoutes />
            </AuthMiddleware>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default GlobalRoutes;
