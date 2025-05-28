import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  setToken: (token) => set({ token }),
  setUser: (user) => set({ user }),
}));
