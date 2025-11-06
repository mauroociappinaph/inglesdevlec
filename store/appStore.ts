import { create } from 'zustand';
import { Section } from '../types';

interface AppState {
  isSidebarCollapsed: boolean;
  toggleSidebarCollapsed: () => void;
  isMobileSidebarOpen: boolean;
  setMobileSidebarOpen: (isOpen: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isSidebarCollapsed: false,
  toggleSidebarCollapsed: () => set((state) => ({ isSidebarCollapsed: !state.isSidebarCollapsed })),
  isMobileSidebarOpen: false,
  setMobileSidebarOpen: (isOpen) => set({ isMobileSidebarOpen: isOpen }),
}));