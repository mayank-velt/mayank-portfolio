
import { ExternalLink, Github, Chrome, Code, Database, Library } from "lucide-react";

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
                <h3 className="inline-block text-3xl font-anton uppercase relative after:absolute after:w-1/2 after:h-1 after:bg-primary after:bottom-0 after:left-0">
                  {category.name}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.projects.map((project, projectIndex) => (
                    <div
                      key={project.title}
                      className="group relative"
                    >
                      {/* Background decoration */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent -z-10 transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
                      
                      <div className="bg-background border border-border hover:border-primary/50 transition-colors p-6 h-full flex flex-col">
                        <div className="mb-4 flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 ${project.color} rounded-sm flex items-center justify-center`}>
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
                                className="inline-block text-xs font-medium bg-secondary px-2 py-1"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <a 
              href="https://github.com/mayank-96" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-mono uppercase tracking-wider hover:translate-y-[-2px] transition-transform"
            >
              <Github size={18} />
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
