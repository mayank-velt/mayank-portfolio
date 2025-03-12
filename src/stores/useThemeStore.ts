
import { create } from 'zustand';

type Theme = 'default' | 'purple' | 'ocean' | 'sunset';

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: 'default',
  setTheme: (theme) => set({ theme }),
}));
