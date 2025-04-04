
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import OpenSource from "@/components/OpenSource";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Blogs from "@/components/Blogs";
import TechTalks from "@/components/TechTalks";
import Hobbies from "@/components/Hobbies";
import { useThemeStore } from "@/stores/useThemeStore";
import { ArrowUp } from "lucide-react";
import { Analytics } from '@vercel/analytics/react';  

const Index = () => {
  const { isDarkMode } = useThemeStore();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Update document title
    document.title = "Mayank Pagar | Frontend Developer";
    
    // Apply dark mode class immediately
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      });
    });

    // Show/hide scroll to top button
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [isDarkMode]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className={`min-h-screen bg-background relative ${isDarkMode ? 'dark' : ''}`}>
      <Analytics />
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <div className="container mx-auto px-4 md:px-8">
          <Projects />
          <About />
          <Experience />
          <Skills />
          <Achievements />
          <OpenSource />
          <Blogs />
          <TechTalks />
          <Hobbies />
          <Contact />
        </div>
      </main>
      <Footer />
      
      {/* Back to top button */}
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full shadow-lg md:flex items-center justify-center hover:shadow-xl transition-all z-20 animate-bounce"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Index;
