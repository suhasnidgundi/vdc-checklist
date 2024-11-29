import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';

function Logout() {
    const navigate = useNavigate();
    const { logout } = useAuthStore();

    useEffect(() => {
        // Perform logout logic here, e.g., clearing tokens, user data, etc.
        // For example: localStorage.removeItem('token');

        // Redirect to login page after logout

        logout();
        navigate('/login');
    }, [navigate]);

    return (
        <div>
            <h1>Logging out...</h1>
        </div>
    );
}

export default Logout;