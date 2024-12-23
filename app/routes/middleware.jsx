import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import { ROLE_HIERARCHY, ROLES } from '../../constants';

const Middleware = ({ allowedRoles = [] }) => {
    const { isAuthenticated } = useAuthStore();
    const userRole = sessionStorage.getItem('role');

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // If no roles specified, only allow SUPER_ADMIN
    if (!allowedRoles || allowedRoles.length === 0) {
        return userRole === ROLES.SUPER_ADMIN ? <Outlet /> : <Navigate to="/unauthorized" replace />;
    }

    // Get accessible roles based on user's role hierarchy
    const accessibleRoles = ROLE_HIERARCHY[userRole] || [];

    // Check if user has permission for any of the allowed roles
    const hasAccess = allowedRoles.some(role => accessibleRoles.includes(role));

    if (!hasAccess) {
        return <Navigate to="/unauthorized" replace />;
    }

    return <Outlet />;
};

export default Middleware;