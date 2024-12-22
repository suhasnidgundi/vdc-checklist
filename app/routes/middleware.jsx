import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import { ROLE_HIERARCHY } from '../../constants';

const Middleware = ({ allowedRoles }) => {
    const { isAuthenticated } = useAuthStore();
    const userRole = sessionStorage.getItem('role');

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // If no roles specified, allow access to all authenticated users
    if (!allowedRoles || allowedRoles.length === 0) {
        return <Outlet />;
    }

    // Get all roles the user has access to based on their role hierarchy
    const accessibleRoles = ROLE_HIERARCHY[userRole] || [userRole];

    // Check if user has access to any of the allowed roles
    const hasAccess = allowedRoles.some(role => accessibleRoles.includes(role));

    if (hasAccess) {
        return <Outlet />;
    }

    return <Navigate to="/unauthorized" replace />;
};

export default Middleware;