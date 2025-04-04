import { Code } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const northernLightsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (northernLightsRef.current) {
      const { x, y } = mousePosition;
      const xOffset = (x - 50) * 0.02;
      const yOffset = (y - 50) * 0.02;
      northernLightsRef.current.style.transform = `translate(${xOffset}rem, ${yOffset}rem)`;
    }
  }, [mousePosition]);

  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-16 md:py-32" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center"
    }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          ref={northernLightsRef}
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{ 
            filter: "blur(100px)",
            opacity: 0.5,
            willChange: "transform"
          }}
        >
          <div className="absolute top-[-10%] left-[5%] w-[50%] h-[50%] rounded-full bg-[#4F46E5] opacity-60"></div>
          <div className="absolute top-[20%] left-[10%] w-[65%] h-[50%] rounded-full bg-[#0EA5E9] opacity-50"></div>
          <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] rounded-full bg-[#8B5CF6] opacity-40"></div>
          
          <div className="absolute bottom-[30%] left-[30%] w-[30%] h-[30%] rounded-full bg-[#3B82F6] opacity-30"></div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-anton uppercase tracking-tight leading-none relative z-10">
              <motion.span 
                className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Front
              </motion.span>
              <motion.span 
                className="block"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                End
              </motion.span>
              <motion.span 
                className="block text-primary"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Developer
              </motion.span>
            </h1>
            
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I'm a dedicated software engineer with experience in building applications for web and mobile platforms. 
              My passion for software lies with dreaming up ideas and making them come true with elegant pixel-perfect interfaces.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-5 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a 
                href="#contact" 
                className="group relative px-8 py-3.5 bg-primary text-white font-medium uppercase tracking-wide inline-flex items-center transition-all duration-300 overflow-hidden rounded-lg"
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute bottom-0 left-0 h-1 w-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
              <a 
                href="#projects" 
                className="group relative px-8 py-3.5 border border-foreground/20 bg-background/50 backdrop-blur-sm text-foreground font-medium uppercase tracking-wide transition-all duration-300 overflow-hidden rounded-lg"
              >
                <span className="relative z-10">View Work</span>
                <span className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute bottom-0 left-0 h-1 w-full bg-primary/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-background/40 backdrop-blur-xl p-7 lg:p-8 rounded-2xl shadow-xl relative z-10 border border-white/10 hover:border-primary/20 transition-all duration-300 hover:shadow-primary/5 group">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-primary/10 rounded-xl">
                  <Code className="text-primary" size={24} />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-mono opacity-70">developer.profile</p>
                  <div className="h-0.5 w-full bg-gradient-to-r from-primary/30 to-transparent mt-1 rounded-full"></div>
                </div>
              </div>
              
              <div className="font-mono text-sm">
                <div className="mb-3">
                  <span className="text-primary">const</span> <span className="text-blue-600 dark:text-blue-400">developer</span> = {"{"}
                </div>
                
                <div className="pl-6 space-y-1.5">
                  <div>
                    <span className="text-orange-600 dark:text-orange-400">name</span>: <span className="text-green-600 dark:text-green-400">'Mayank Pagar'</span>,
                  </div>
                  <div>
                    <span className="text-orange-600 dark:text-orange-400">title</span>: <span className="text-green-600 dark:text-green-400">'Software Engineer'</span>,
                  </div>
                  <div>
                    <span className="text-orange-600 dark:text-orange-400">location</span>: <span className="text-green-600 dark:text-green-400">'Nashik, India'</span>,
                  </div>
                  <div>
                    <span className="text-orange-600 dark:text-orange-400">skills</span>: [
                  </div>
                  <div className="pl-6">
                    <span className="text-green-600 dark:text-green-400">'React'</span>,{" "}
                    <span className="text-green-600 dark:text-green-400">'Angular'</span>,{" "}
                    <span className="text-green-600 dark:text-green-400">'React Native'</span>,{" "}
                  </div>
                  <div className="pl-6">
                    <span className="text-green-600 dark:text-green-400">'TypeScript'</span>,{" "}
                    <span className="text-green-600 dark:text-green-400">'UI/UX'</span>,{" "}
                    <span className="text-green-600 dark:text-green-400">'Problem Solving'</span>
                  </div>
                  <div>
                    ],
                  </div>
                </div>
                
                <div className="mt-3">{"}"}</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-2xl -z-10 blur-md"></div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 w-32 h-32 border border-primary/20 rounded-full opacity-20 pointer-events-none"></div>
      <div className="absolute top-32 right-10 w-16 h-16 border border-primary/20 rounded-full opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
