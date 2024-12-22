import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import authService from '../services/authService';

const useAuthStore = create(
    persist(
        (set, get) => ({
            token: null,
            isAuthenticated: false,
            role: "",
            user: null,

            login: async (credentials, navigate) => {
                try {
                    // Your login API call
                    const response = await authService.login(credentials)

                    // Persist in sessionStorage
                    sessionStorage.setItem('isAuthenticated', 'true');
                    sessionStorage.setItem('token', response?.token)
                    sessionStorage.setItem('role', response?.role);

                    await authService.getUserProfile();

                    // Set authentication details
                    set({
                        isAuthenticated: true,
                        token: response?.token,
                        role: response?.role,
                    });

                    // Redirect to dashboard
                    navigate('/dashboard');

                    return response;
                } catch (error) {
                    set({ token: null, role: "", isAuthenticated: false, user: null });
                    throw error;
                }
            },

            logout: () => {
                set({ token: null, role: "", isAuthenticated: false, user: null });
                sessionStorage.removeItem('isAuthenticated');
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('role');
                sessionStorage.removeItem('user');
            },

            checkAuthStatus: () => {
                const storedIsAuthenticated = sessionStorage.getItem('isAuthenticated');
                const storedRole = sessionStorage.getItem('role');

                if (storedIsAuthenticated === 'true' && storedRole) {
                    set({
                        isAuthenticated: true,
                    });
                }
            }
        }),
        {
            name: 'auth-storage', // unique name
            getStorage: () => sessionStorage // use sessionStorage instead of localStorage
        }
    )
);

export default useAuthStore;