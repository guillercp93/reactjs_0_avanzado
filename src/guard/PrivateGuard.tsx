import { Navigate, Outlet } from "react-router-dom";

export const PrivateGuard = () => {
    const authenticated: boolean = !!localStorage.getItem("token");

    if (authenticated) {
        return <Outlet />
    } else {
        return <Navigate to="/login" replace />
    }
}
