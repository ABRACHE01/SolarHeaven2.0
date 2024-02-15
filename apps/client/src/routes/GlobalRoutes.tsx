import { Route, Routes } from "react-router";
import AuthRoutes from "../features/Auth/routes/AuthRoutes";
import DashRoutes from "../features/dashboard/routes/DashRoutes";
import { PageNotFound } from "../shared/pages"; 
import { RootLayout } from "../shared/layouts";
const GlobalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout/>}>
        <Route path="auth/*" element={<AuthRoutes />} />
        <Route path="dashboard/*" element={<DashRoutes />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default GlobalRoutes