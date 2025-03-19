
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useThemeStore } from "@/stores/useThemeStore";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const { theme, isDarkMode } = useThemeStore();

  // Get primary color based on theme
  const getThemeColor = () => {
    switch (theme) {
      case 'purple':
        return '#9b87f5';
      case 'ocean':
        return '#0EA5E9';
      case 'sunset':
        return '#F97316';
      default:
        return '#FF5277';
    }
  };
  
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseDown = () => setClicked(true);
    const mouseUp = () => setClicked(false);

    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    // Add event listeners to all links and buttons
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHoverStart);
      link.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHoverStart);
        link.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, []);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    
    // Add exception for touch devices
    const handleTouchStart = () => {
      document.body.style.cursor = 'auto';
    };
    
    window.addEventListener('touchstart', handleTouchStart);
    
    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  const primaryColor = getThemeColor();
  const cursorSize = linkHovered ? 30 : 20;
  const cursorBorderWidth = clicked ? 5 : 2;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          backgroundColor: isDarkMode ? '#ffffff' : primaryColor,
          boxShadow: `0 0 10px ${isDarkMode ? 'rgba(255, 255, 255, 0.5)' : primaryColor}`,
        }}
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          scale: clicked ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.5,
        }}
      />

      {/* Secondary cursor ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-40 flex items-center justify-center"
        style={{
          borderColor: isDarkMode ? '#ffffff' : primaryColor,
          width: cursorSize,
          height: cursorSize,
          borderWidth: cursorBorderWidth,
        }}
        animate={{
          x: position.x - cursorSize / 2,
          y: position.y - cursorSize / 2,
          opacity: 0.8,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 150,
          mass: 0.8,
        }}
      />
    </>
  );
};

export default CustomCursor;
