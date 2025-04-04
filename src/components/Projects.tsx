import { ExternalLink, Github, Chrome, Code, Database, Library, ShoppingBag, Music, Film } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const personalProjects = [
    {
      title: "Mariela Cushions",
      description: "E-commerce platform for premium handcrafted cushions with secure payment processing and inventory management",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      icon: ShoppingBag,
      color: "bg-blue-600",
      link: "https://marielacushions.com"
    },
    {
      title: "Wave Music Player",
      description: "Modern music streaming application with playlist creation, artist discovery, and customizable themes",
      tech: ["React", "Firebase", "Web Audio API", "Styled Components"],
      icon: Music,
      color: "bg-purple-600",
      link: "https://wavemusicplayer.io"
    },
    {
      title: "WhatToWatch",
      description: "Movie and TV show recommendation engine based on user preferences and viewing history",
      tech: ["React", "TMDb API", "Machine Learning", "Express"],
      icon: Film,
      color: "bg-red-500",
      link: "https://whattowatch.app"
    }
  ];

  const professionalProjects = [
    {
      title: "Velt Collaboration SDK",
      description: "Real-time collaboration toolkit for web applications",
      tech: ["TypeScript", "React", "WebSockets"],
      link: "https://velt.dev"
    },
    {
      title: "GlueStack UI",
      description: "Universal component library for React and React Native",
      tech: ["React", "React Native", "Storybook"],
      link: "https://gluestack.io"
    },
    {
      title: "NativeBase",
      description: "Accessible component library for React Native",
      tech: ["React Native", "TypeScript"],
      link: "https://nativebase.io"
    }
  ];

  const renderProject = (project, projectIndex) => (
    <motion.div
      key={project.title}
      className="group h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className="relative h-full rounded-xl overflow-hidden group-hover:shadow-xl transition-all duration-300 group-hover:shadow-primary/10 flex flex-col">
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300 p-[1px] rounded-xl"></div>
        
        {/* Card content */}
        <div className="bg-background/80 backdrop-blur-lg relative z-10 p-7 flex flex-col h-full rounded-xl border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
          
          <div className="mb-5 flex items-start justify-between relative z-10">
            <div className="flex items-center gap-3">
              {project.icon && (
                <div className={`w-11 h-11 ${project.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-3 transition-transform duration-300`}>
                  <project.icon size={22} className="text-white" />
                </div>
              )}
              <h4 className="text-xl font-bold tracking-tight">{project.title}</h4>
            </div>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
                aria-label={`Visit ${project.title} website`}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
          
          <p className="text-muted-foreground mb-6 flex-grow relative z-10">
            {project.description}
          </p>
          
          <div className="mt-auto relative z-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(tech => (
                <Badge 
                  key={tech} 
                  variant="secondary"
                  className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background text */}
      <div className="absolute top-20 right-0 text-[20rem] font-anton text-primary/5 -z-10 opacity-70 leading-none select-none">
        WORK
      </div>
      
      {/* Decorative shapes */}
      <div className="absolute -left-20 top-1/4 w-40 h-40 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute right-10 bottom-1/4 w-60 h-60 rounded-full bg-primary/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl md:text-7xl font-anton uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 tracking-tight mb-8">
              My Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of my personal and professional projects across various domains.
            </p>
          </motion.div>
          
          <div className="space-y-28">            
            <div className="space-y-12">
              <motion.h3 
                className="inline-block text-3xl font-anton uppercase relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="relative after:absolute after:w-full after:h-1 after:bg-gradient-to-r after:from-primary after:to-primary/30 after:-bottom-1 after:left-0 after:rounded-full">
                  Personal Projects
                </span>
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {personalProjects.map((project, projectIndex) => 
                  renderProject(project, projectIndex)
                )}
              </div>
            </div>

            <div className="space-y-12 mt-16">
              <motion.h3 
                className="inline-block text-3xl font-anton uppercase relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="relative after:absolute after:w-full after:h-1 after:bg-gradient-to-r after:from-primary after:to-primary/30 after:-bottom-1 after:left-0 after:rounded-full">
                  Professional Work
                </span>
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {professionalProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <div className="relative overflow-hidden rounded-lg h-full transform-gpu">
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>
                        
                        {/* Gradient border */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300 p-[1px] rounded-lg"></div>
                        
                        <div className="bg-background/80 p-5 rounded-lg h-full backdrop-blur-md shadow-lg relative z-10 border border-white/5 group-hover:border-primary/20 transition-colors duration-300">
                          <h4 className="text-lg font-bold mb-2 flex items-center justify-between">
                            {project.title}
                            <ExternalLink size={15} className="opacity-60 group-hover:opacity-100 transition-opacity text-primary" />
                          </h4>
                          <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech.map(tech => (
                              <Badge 
                                key={tech} 
                                variant="outline" 
                                className="text-xs py-0 border-primary/20 text-primary/90 bg-primary/5"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <motion.div 
            className="mt-20 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="https://github.com/mayank-96" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-foreground/90 hover:text-primary transition-colors px-6 py-3 rounded-full border border-border hover:border-primary/30 bg-background/50 backdrop-blur-sm hover:bg-background/70"
            >
              <Github size={18} className="group-hover:animate-pulse" />
              <span>View more on GitHub</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
