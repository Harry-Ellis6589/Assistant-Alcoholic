import { create } from 'zustand'
import { User, UserPreferences } from '@types/index'

interface AuthStore {
  user: User | null
  isLoading: boolean
  error: string | null
  setUser: (user: User | null) => void
  setLoading: (isLoading: boolean) => void
  setError: (error: string | null) => void
  updatePreferences: (preferences: Partial<UserPreferences>) => void
  logout: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  setUser: (user) => set({ user }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  updatePreferences: (preferences) =>
    set((state) => ({
      user: state.user
        ? {
            ...state.user,
            preferences: { ...state.user.preferences, ...preferences },
          }
        : null,
    })),
  logout: () => set({ user: null, error: null }),
}))
