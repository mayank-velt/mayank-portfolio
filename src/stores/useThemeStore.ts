
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'default' | 'purple' | 'ocean' | 'sunset';

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'default',
      setTheme: (theme) => set({ theme }),
      isDarkMode: false,
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: 'theme-storage',
    }
  )
);
