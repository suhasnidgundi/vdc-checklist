import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import { ROLES } from '../../constants';
import useSessionStore from '../hooks/useSessionStore';

const PrivateRoute = ({ allowedRoles }) => {

    const isAuthenticated = sessionStorage.getItem("isAuthenticated");
    const role = sessionStorage.getItem("role");

    // If not authenticated, redirect to login
    if (!isAuthenticated) {
        // return <Navigate to="/login" replace />;
        return <Outlet />;
    }

    // If no roles specified, allow access to all authenticated users
    if (!allowedRoles || allowedRoles.length === 0) {
        return <Outlet />;
    }

    // Super Admin gets full access
    if (role === ROLES.SUPER_ADMIN) {
        return <Outlet />;
    }

    // Check if user's role is in the allowed roles
    if (allowedRoles.includes(role)) {
        return <Outlet />;
    }

    // If user doesn't have required role, redirect to unauthorized page
    return <Navigate to="/unauthorized" replace />;
};

export default PrivateRoute;