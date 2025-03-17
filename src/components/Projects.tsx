
import { motion } from "framer-motion";
import { ExternalLink, Github, Chrome, Code, Database, Library } from "lucide-react";

const Projects = () => {
  const categories = [
    {
      name: "Web Development & E-commerce",
      projects: [
        {
          title: "ChessMate",
          description: "Developed a web application using Flask for chess practice against a computer opponent. Integrated the Stockfish chess engine for move calculation and data retrieval. Utilized chessboard.js for interactive chessboard display.",
          tech: ["Flask", "Stockfish", "chessboard.js", "Python"],
          icon: Chrome
        },
        {
          title: "Mariela Cushions - E-commerce",
          description: "Built a full-stack e-commerce web application. Implemented a dynamic frontend with HTML, CSS, and Vanilla JavaScript. Developed a robust backend using Express.js and MongoDB for data management.",
          tech: ["HTML", "CSS", "JavaScript", "Express.js", "MongoDB"],
          icon: Chrome
        },
        {
          title: "Wave Music Player",
          description: "Created a responsive music player web application using React.js. Employed Sass for enhanced styling and maintainability. Implemented core music player functionalities (play, pause, navigation, library).",
          tech: ["React.js", "Sass"],
          icon: Chrome
        }
      ]
    },
    {
      name: "Mobile Development",
      projects: [
        {
          title: "Tudul-App-Flutter",
          description: "Developed a Todo-List app using the Flutter framework. Implemented CRUD operations utilizing SQLite for local data storage.",
          tech: ["Flutter", "SQLite", "Dart"],
          icon: Code
        },
        {
          title: "Food-Delivery-UI-Flutter",
          description: "Designed a Food Delivery application User Interface using Flutter.",
          tech: ["Flutter", "UI/UX", "Dart"],
          icon: Code
        }
      ]
    },
    {
      name: "Data Science & Machine Learning",
      projects: [
        {
          title: "Music Genre Classification",
          description: "Performed Exploratory Data Analysis (EDA) on the GTZAN audio dataset. Developed a Deep Learning classification model for audio genre prediction. Achieved high accuracy rates (94.03% training, 93.33% test).",
          tech: ["Python", "Deep Learning", "EDA"],
          icon: Database
        },
        {
          title: "Titanic-Survival-Predictor",
          description: "Developed a machine learning model to predict survival on the Titanic.",
          tech: ["Python", "Machine Learning", "Statistical Analysis"],
          icon: Database
        },
        {
          title: "Ingredient-Recommendation",
          description: "Developed an ingredient recommendation system.",
          tech: ["Python", "KNN", "Web Scraping"],
          icon: Database
        }
      ]
    },
    {
      name: "Natural Language Processing",
      projects: [
        {
          title: "Query-Based-Text-Summarization-Using-NLTK",
          description: "Implemented query-based text summarization using the NLTK library. Extracted relevant information from text based on user queries. Created summaries with a pre-defined word count.",
          tech: ["Python", "NLTK", "NLP"],
          icon: Library
        }
      ]
    },
    {
      name: "Automation",
      projects: [
        {
          title: "Automated-Web-Scraping",
          description: "Implemented automated web scraping.",
          tech: ["Python", "Web Scraping", "Automation"],
          icon: Code
        }
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/50 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Notable <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of my personal and professional works across various domains.
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <div key={category.name} className="space-y-8">
              <motion.h3 
                className="text-2xl font-bold border-b border-border pb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {category.name}
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.projects.map((project, projectIndex) => (
                  <motion.div
                    key={project.title}
                    className="bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-all group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (projectIndex * 0.1) + (categoryIndex * 0.05) }}
                  >
                    <div className="p-6">
                      <div className="mb-4 flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center">
                            <project.icon size={20} className="text-primary" />
                          </div>
                          <h4 className="text-lg font-bold">{project.title}</h4>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map(tech => (
                          <span 
                            key={tech} 
                            className="inline-block text-xs font-medium bg-secondary px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
