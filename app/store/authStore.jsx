import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import authService from '../services/authService';

const useAuthStore = create(
    persist(
        (set, get) => ({
            user: null,
            isAuthenticated: false,
            role: "",
            authToken: null,

            login: async (credentials, navigate) => {
                try {
                    // Your login API call
                    const response = await authService.login(credentials)

                    // Persist in sessionStorage
                    sessionStorage.setItem('isAuthenticated', 'true');
                    sessionStorage.setItem('authToken', response.token)
                    sessionStorage.setItem('role', response?.role);
                    sessionStorage.setItem('area', response.area || '')
                    sessionStorage.setItem('area_id', response.area_id || '')

                    const userData = await authService.getUserProfile();

                    // Set authentication details
                    set({
                        user: userData?.user,
                        isAuthenticated: true,
                        role: response?.role
                    });

                    // Redirect to dashboard
                    navigate('/dashboard');

                    return response;
                } catch (error) {
                    set({ user: null, isAuthenticated: false });
                    throw error;
                }
            },

            logout: () => {
                set({ user: null, isAuthenticated: false });
                sessionStorage.removeItem('isAuthenticated');
                sessionStorage.removeItem('role');
                sessionStorage.removeItem('user');
            },

            checkAuthStatus: () => {
                const storedAuth = sessionStorage.getItem('isAuthenticated');
                const storedUser = sessionStorage.getItem('role');

                if (storedAuth === 'true' && storedUser) {
                    set({
                        isAuthenticated: true,
                        user: JSON.parse(storedUser)
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