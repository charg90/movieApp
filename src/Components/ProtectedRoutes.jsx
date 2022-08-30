import { Outlet, Navigate } from "react-router-dom";

const useAuth = () => {
  const auth = localStorage.getItem("token");

  return auth;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  console.log(isAuth);

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
