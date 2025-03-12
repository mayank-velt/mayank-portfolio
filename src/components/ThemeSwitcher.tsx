
import { useThemeStore } from "@/stores/useThemeStore";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";

// Innovative theme definitions with animation properties
const themes = [
  { 
    name: 'default', 
    color: '#FF5277', 
    label: 'Default',
    pattern: "moving-bg",
    icon: "🔥"
  },
  { 
    name: 'purple', 
    color: '#9b87f5', 
    label: 'Purple',
    pattern: "diagonal-stripes",
    icon: "💜"
  },
  { 
    name: 'ocean', 
    color: '#0EA5E9', 
    label: 'Ocean',
    pattern: "grid-pattern",
    icon: "🌊"
  },
  { 
    name: 'sunset', 
    color: '#F97316', 
    label: 'Sunset',
    pattern: "",
    icon: "🌅"
  },
] as const;

const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredTheme, setHoveredTheme] = useState<string | null>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  // Find current theme object
  const currentTheme = themes.find(t => t.name === theme) || themes[0];

  return (
    <>
      {/* Theme Preview Overlay when hovering - shows full screen preview */}
      <AnimatePresence>
        {hoveredTheme && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-10 pointer-events-none ${
              themes.find(t => t.name === hoveredTheme)?.pattern || ""
            }`}
            style={{ 
              backgroundColor: themes.find(t => t.name === hoveredTheme)?.color,
              backgroundSize: '200% 200%',
            }}
          />
        )}
      </AnimatePresence>

      {/* Innovative theme drawer that slides up from bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", bounce: 0.25 }}
              className="glass-card rounded-t-2xl shadow-lg max-w-lg w-full pointer-events-auto"
            >
              <div className="relative p-4">
                <button 
                  onClick={toggleOpen}
                  className="absolute top-3 right-3 p-2 rounded-full hover:bg-black/10 transition-colors"
                  aria-label="Close theme selector"
                >
                  <X size={20} />
                </button>
                
                <h3 className="text-lg font-bold text-center mb-4 mt-1">Choose Your Experience</h3>
                
                <div className="grid grid-cols-2 gap-4 p-2">
                  {themes.map((t) => (
                    <motion.button
                      key={t.name}
                      onMouseEnter={() => setHoveredTheme(t.name)}
                      onMouseLeave={() => setHoveredTheme(null)}
                      onClick={() => {
                        setTheme(t.name);
                        setIsOpen(false);
                      }}
                      className={`
                        relative overflow-hidden rounded-xl h-32
                        flex flex-col items-center justify-center p-3 transition-all
                        ${theme === t.name ? 'ring-2 ring-white/50 shadow-lg scale-105' : 'hover:scale-105'}
                      `}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      style={{ 
                        backgroundColor: t.color,
                        backgroundSize: '200% 200%'
                      }}
                    >
                      <div className={`absolute inset-0 opacity-20 ${t.pattern}`}></div>
                      <span className="text-3xl mb-2">{t.icon}</span>
                      <span className="text-white font-bold drop-shadow-md">{t.label}</span>
                      {theme === t.name && (
                        <motion.div 
                          className="absolute inset-0 border-2 border-white rounded-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          layoutId="selected-theme"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Innovative pull-tab style toggle */}
        <motion.button
          className={`
            flex items-center justify-center px-6 py-2 rounded-t-xl shadow-lg pointer-events-auto
            backdrop-blur-md border border-white/10
          `}
          style={{ 
            backgroundColor: `${currentTheme.color}99`,
            boxShadow: `0 0 15px ${currentTheme.color}66`
          }}
          onClick={toggleOpen}
          whileHover={{ y: -5 }}
          whileTap={{ y: 0 }}
          initial={{ y: isOpen ? 0 : 10 }}
          animate={{ y: isOpen ? 0 : 0 }}
        >
          <div className="flex items-center">
            <span className="text-white font-medium mr-2 text-sm">
              {isOpen ? "Close Themes" : `${currentTheme.icon} ${currentTheme.label} Theme`}
            </span>
            {isOpen ? <ChevronDown size={18} className="text-white" /> : <ChevronUp size={18} className="text-white" />}
          </div>
        </motion.button>
      </div>
    </>
  );
};

export default ThemeSwitcher;
