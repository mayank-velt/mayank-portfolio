
import { motion } from "framer-motion";
import { Code, Database, Layout, Server, Terminal, Workflow } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      name: "Languages",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Python", "Java"]
    },
    {
      name: "Frontend",
      icon: Layout,
      skills: ["React.js", "React Native", "Angular", "Lit", "HTML5", "CSS3", "Figma Plugin Development", "Component Library Development", "SDK Development", "Design Systems"]
    },
    {
      name: "Backend",
      icon: Server,
      skills: ["Firebase Realtime Database", "Firestore", "Cloud Functions", "Node.js", "RESTful APIs"]
    },
    {
      name: "Databases",
      icon: Database,
      skills: ["MySQL"]
    },
    {
      name: "Others",
      icon: Terminal,
      skills: ["Git", "Linux", "Testing", "Debugging", "Agile", "SDLC", "ARIA", "Internationalization", "Problem-Solving"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-secondary/50 to-transparent"></div>
      
      {/* Gradient bg elements */}
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            I specialize in these technologies and methodologies to build superior software solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.name}
              className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center">
                  <category.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + (index * 0.05) }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
