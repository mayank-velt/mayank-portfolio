
import { ExternalLink, Github, Chrome, Code, Database, Library } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const categories = [
    {
      name: "Web Development",
      projects: [
        {
          title: "ChessMate",
          description: "Chess practice app with Stockfish engine integration for move calculation and interactive board display.",
          tech: ["Flask", "Stockfish", "chessboard.js", "Python"],
          icon: Chrome,
          color: "bg-blue-500"
        },
        {
          title: "Mariela Cushions",
          description: "Full-stack e-commerce platform with dynamic frontend and MongoDB backend.",
          tech: ["HTML", "CSS", "JavaScript", "Express.js", "MongoDB"],
          icon: Chrome,
          color: "bg-pink-500"
        },
        {
          title: "Wave Music Player",
          description: "Responsive music player with core playback functionalities.",
          tech: ["React.js", "Sass"],
          icon: Chrome,
          color: "bg-purple-500"
        }
      ]
    },
    {
      name: "Mobile Development",
      projects: [
        {
          title: "Tudul App",
          description: "Todo-list app using Flutter with SQLite for local storage and CRUD operations.",
          tech: ["Flutter", "SQLite", "Dart"],
          icon: Code,
          color: "bg-green-500"
        },
        {
          title: "Food Delivery UI",
          description: "Visually appealing food delivery application interface built with Flutter.",
          tech: ["Flutter", "UI/UX", "Dart"],
          icon: Code,
          color: "bg-orange-500"
        }
      ]
    },
    {
      name: "Data Science & ML",
      projects: [
        {
          title: "Music Genre Classification",
          description: "Deep learning model for audio genre prediction with 93% test accuracy.",
          tech: ["Python", "Deep Learning", "EDA"],
          icon: Database,
          color: "bg-indigo-500"
        },
        {
          title: "Titanic Survival Predictor",
          description: "ML model predicting survival odds on the Titanic.",
          tech: ["Python", "Machine Learning", "Statistical Analysis"],
          icon: Database,
          color: "bg-red-500"
        }
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-20 right-0 text-[20rem] font-anton text-primary/5 -z-10 opacity-70 leading-none">
        WORK
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-anton uppercase text-primary tracking-tight mb-8">
              Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of my personal and professional projects across various domains. 
              Each project represents a unique challenge I've tackled.
            </p>
          </div>
          
          <div className="space-y-24">
            {categories.map((category, categoryIndex) => (
              <div key={category.name} className="space-y-10">
                <motion.h3 
                  className="inline-block text-3xl font-anton uppercase relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="relative after:absolute after:w-full after:h-0.5 after:bg-primary after:bottom-0 after:left-0">
                    {category.name}
                  </span>
                </motion.h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.projects.map((project, projectIndex) => (
                    <motion.div
                      key={project.title}
                      className="group"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
                    >
                      <div className="relative p-px overflow-hidden rounded-lg bg-gradient-to-br from-primary/30 via-primary/20 to-transparent">
                        <div className="bg-background p-6 h-full flex flex-col rounded-lg backdrop-blur-sm">
                          <div className="mb-4 flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 ${project.color} rounded-full flex items-center justify-center`}>
                                <project.icon size={20} className="text-white" />
                              </div>
                              <h4 className="text-xl font-bold">{project.title}</h4>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-6 flex-grow">
                            {project.description}
                          </p>
                          
                          <div className="mt-auto">
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tech.map(tech => (
                                <span 
                                  key={tech} 
                                  className="inline-block text-xs font-medium bg-secondary/70 backdrop-blur-sm px-3 py-1 rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <motion.a 
              href="https://github.com/mayank-96" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-mono uppercase tracking-wider hover:translate-y-[-2px] transition-transform rounded-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github size={18} />
              View More on GitHub
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
