import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import { ROLE_ROUTES } from '../../constants';

export const useRoleNavigation = () => {
    const { role } = useAuthStore();
    const [availableRoutes, setAvailableRoutes] = useState([]);

    useEffect(() => {
        // Get routes based on the user's role
        const routes = ROLE_ROUTES[role] || [];
        setAvailableRoutes(routes);
    }, [role]);

    return {
        availableRoutes
    };
};