import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ adminOnly }) => {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth); // Redux se user ka data le rahe hain

  // Agar user logged-in nahi hai, toh home page pe redirect karo
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Agar route admin-only hai aur user admin nahi hai, toh bhi home page pe redirect karo
  if (adminOnly && user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
