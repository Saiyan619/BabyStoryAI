import { create } from "zustand";
export const useUiStore = create((set) => ({
    loading: false,
    setloading: (loading) => set({ loading })
}));