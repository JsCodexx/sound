import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
    const auth = localStorage.getItem("token")

    return auth ? <Outlet /> : <Navigate to="/login" />
}

