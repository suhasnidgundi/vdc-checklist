import axios from 'axios'
import useAuthStore from '../store/authStore'
const BASE_URL = import.meta.env.VITE_API_URL

const authService = {
    login: async (credentials) => {
        try {
            const response = await axios.post(
                `${BASE_URL}api/login`,
                new URLSearchParams(credentials),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            )
            return response.data
        } catch (error) {
            throw error.response?.data || new Error('Login failed')
        }
    },
    validateToken: async (token) => {
        try {
            const response = await axios.get(`${BASE_URL}/auth/validate`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            return response.data
        } catch (error) {
            throw error.response?.data || new Error('Invalid token')
        }
    },
    updateProfile: async (userData) => {
        try {
            const response = await axios.put(`${BASE_URL}/users/profile`, userData)
            return response.data
        } catch (error) {
            throw error.response?.data || new Error('Profile update failed')
        }
    },
    getUserProfile: async () => {
        try {
            const token = sessionStorage.getItem('token');
            if (!token) {
                throw new Error('No authentication token found');
            }

            const response = await axios.get(`${BASE_URL}api/profile`, {
                headers: {
                    Authorization: `Bearer ${token.trim()}`
                }
            });

            if (response.data.status) {

                // Store user profile in session storage
                sessionStorage.setItem(
                    'user',
                    JSON.stringify(response.data.profile)
                );

                // Store user profile in the store
                useAuthStore.setState({ user: response.data.profile });

                return response.data;
            } else {
                throw new Error(response.data.message || 'Profile fetch error');
            }
        } catch (error) {
            // If there's an error fetching the profile, remove the token
            sessionStorage.removeItem('token');
            throw error.response?.data || error.message || 'Profile fetch error';
        }
    }
}

export default authService