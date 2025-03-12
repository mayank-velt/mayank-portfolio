
import { Button } from "@/components/ui/button";
import { useThemeStore } from "@/stores/useThemeStore";
import { motion } from "framer-motion";
import { Paintbrush } from "lucide-react";

const themes = [
  { name: 'default', color: '#FF5277' },
  { name: 'purple', color: '#9b87f5' },
  { name: 'ocean', color: '#0EA5E9' },
  { name: 'sunset', color: '#F97316' },
] as const;

const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-24 right-8 z-50"
    >
      <div className="bg-card shadow-lg rounded-full p-2 flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full"
          aria-label="Theme switcher"
        >
          <Paintbrush size={16} />
        </Button>
        {themes.map((t) => (
          <button
            key={t.name}
            onClick={() => setTheme(t.name)}
            className={`w-8 h-8 rounded-full transition-transform ${
              theme === t.name ? 'scale-100 ring-2 ring-primary' : 'scale-90'
            }`}
            style={{ backgroundColor: t.color }}
            aria-label={`Switch to ${t.name} theme`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ThemeSwitcher;
