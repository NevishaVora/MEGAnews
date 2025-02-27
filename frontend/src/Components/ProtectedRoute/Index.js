import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ adminOnly }) => {
    const userId = localStorage.getItem("userId"); // Check if user is logged in
    const admintoken = localStorage.getItem("admintoken"); // Check admin token

    if (!userId) {
        return <Navigate to="/" replace />;
    }

    // Agar adminOnly true hai aur adminToken nahi mila, toh redirect
    if (adminOnly && !admintoken) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
