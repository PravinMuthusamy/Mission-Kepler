import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { ROUTE_PATHS } from "../../constants";

const ProtectedRoute = () => {
  const { isLoggedIn } = useContext(UserContext);

  return isLoggedIn ? <Outlet /> : <Navigate to={ROUTE_PATHS.login} />;
};

export default ProtectedRoute;