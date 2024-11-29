import { Navigate, Outlet } from 'react-router-dom';
import { ROLES } from '../../constants';
import useAuthStore from '../store/authStore';

const PrivateRoute = ({ allowedRoles }) => {
    const { isAuthenticated } = useAuthStore();

    // Get user's role from the Session Storage
    const role = sessionStorage.getItem('role'); 

    // If not authenticated, redirect to login
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // If no roles specified, allow access to all authenticated users
    if (!allowedRoles || allowedRoles.length === 0) {
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