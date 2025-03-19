
import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/stores/useThemeStore";
import { Switch } from "@/components/ui/switch";
import { useEffect } from "react";
import { motion } from "framer-motion";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useThemeStore();
  
  useEffect(() => {
    // Update the document's class list based on dark mode state
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="flex items-center gap-2">
      <Sun size={16} className="text-yellow-500 dark:text-muted-foreground" />
      <Switch
        checked={isDarkMode}
        onCheckedChange={toggleDarkMode}
        aria-label="Toggle dark mode"
      />
      <Moon size={16} className="text-muted-foreground dark:text-indigo-400" />
    </div>
  );
};

export default DarkModeToggle;
