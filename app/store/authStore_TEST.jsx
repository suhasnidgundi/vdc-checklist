import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { MOCK_USERS } from '../../constants'

const useAuthStore = create(persist(
  (set, get) => ({
    // Initial state
    isAuthenticated: false,
    user: null,
    token: null,
    loading: false,
    error: null,

    // Mock Login action
    login: async (credentials) => {
      set({ loading: true, error: null })

      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Check against mock users
      const mockUser = MOCK_USERS[credentials.email.toLowerCase()]

      if (mockUser && credentials.password === 'password123') {
        const response = {
          user: mockUser,
          token: 'mock_token_' + Date.now()
        }

        set({
          isAuthenticated: true,
          user: response.user,
          token: response.token,
          loading: false
        })

        return response
      } else {
        set({
          isAuthenticated: false,
          user: null,
          token: null,
          loading: false,
          error: 'Invalid credentials'
        })
        throw new Error('Invalid credentials')
      }
    },

    // Logout action
    logout: () => {
      set({
        isAuthenticated: false,
        user: null,
        token: null
      })
    },

    // Check authentication status (mock)
    checkAuth: async () => {
      const token = get().token
      return !!token
    }
  }),
  {
    name: 'auth-storage',
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => ({
      token: state.token,
      user: state.user
    })
  }
))

export default useAuthStore