
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeStore {
  isDarkMode: boolean;
  primaryColor: string;
  toggleDarkMode: () => void;
  changePrimaryColor: (color: string) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      isDarkMode: false,
      primaryColor: '160 84% 20%', // Default primary color in HSL
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      changePrimaryColor: (color: string) => set(() => ({ primaryColor: color })),
    }),
    {
      name: 'theme-storage',
    }
  )
);

// Function to generate random HSL color
export const generateRandomColor = (): string => {
  // Generate random hue (0-360)
  const hue = Math.floor(Math.random() * 360);
  // Keep saturation high (65-85%) for vibrant colors
  const saturation = Math.floor(Math.random() * 20 + 65);
  
  // Adjust lightness based on if it's dark mode or not
  // For dark mode, we need higher lightness to be visible
  const isDarkMode = document.documentElement.classList.contains('dark');
  const lightness = isDarkMode ? 
    Math.floor(Math.random() * 15 + 35) : // 35-50% for dark mode (brighter)
    Math.floor(Math.random() * 15 + 20);  // 20-35% for light mode (darker)
  
  return `${hue} ${saturation}% ${lightness}%`;
};
