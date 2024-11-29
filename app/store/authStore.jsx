import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import authService from '../services/authService'

const useAuthStore = create(persist(
    (set, get) => ({
        // Initial state
        isAuthenticated: false,
        user: null,
        role: null,
        token: null,
        loading: false,
        error: null,
        // Login action
        login: async (credentials) => {
            set({ loading: true, error: null })
            try {
                const response = await authService.login(credentials)

                // Directly set session storage items
                sessionStorage.setItem('isAuthenticated', true)
                sessionStorage.setItem('authToken', response.token)
                sessionStorage.setItem('role', response.role)
                sessionStorage.setItem('area', response.area || '')
                sessionStorage.setItem('area_id', response.area_id || '')
                sessionStorage.setItem('isAdmin', response.role === 'SUPER_ADMIN' ? 'isAdmin' : response.isAdmin || '')

                await authService.getUserProfile();

                set({
                    isAuthenticated: true,
                    user: response.user,
                    role: response.role,
                    token: response.token,
                    loading: false
                })
                return response
            } catch (error) {
                set({
                    isAuthenticated: false,
                    user: null,
                    token: null,
                    loading: false,
                    error: error.message
                })
                throw error
            }
        },
        // Logout action
        logout: () => {
            // Clear session storage
            sessionStorage.removeItem('isAuthenticated')
            sessionStorage.removeItem('authToken')
            sessionStorage.removeItem('role')
            sessionStorage.removeItem('area')
            sessionStorage.removeItem('area_id')
            sessionStorage.removeItem('auth-storage')
            sessionStorage.removeItem('isAdmin')
            sessionStorage.removeItem('userProfile')

            set({
                isAuthenticated: false,
                user: null,
                token: null
            })
        },
        // Check authentication status
        checkAuth: async () => {
            const token = sessionStorage.getItem('authToken')
            if (!token) return false
            try {
                // const user = await authService.validateToken(token)
                set({ isAuthenticated: true })
                return true
            } catch {
                get().logout()
                return false
            }
        },
        // Update user profile
        updateProfile: async (userData) => {
            try {
                const updatedUser = await authService.updateProfile(userData)
                set({ user: updatedUser })
                return updatedUser
            } catch (error) {
                set({ error: error.message })
                throw error
            }
        },
        getUserProfile: async () => {
            try {
                const user = await authService.getUserProfile()
                set({ user })
                return user
            } catch (error) {
                set({ error: error.message })
                throw error
            }
        }
    }),
    {
        name: 'auth-storage', // unique name
        storage: createJSONStorage(() => sessionStorage),
        partialize: (state) => ({
            token: state.token,
            user: state.user,
            role: state.role
        })
    }
))

export default useAuthStore