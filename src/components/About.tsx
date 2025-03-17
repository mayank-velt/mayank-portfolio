
import { motion } from "framer-motion";
import { CodeIcon, Heart, Cpu, Zap, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
      
      {/* Diagonal stripes background */}
      <div className="absolute inset-0 diagonal-stripes"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm a dedicated software engineer with experience in building applications for web and mobile platforms. My specialization lies in creating elegant and efficient user interfaces that provide exceptional user experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold">My Approach</h3>
            
            <div className="text-muted-foreground space-y-4">
              <p>
                My passion for software lies with dreaming up ideas and making them come true with elegant pixel-perfect interfaces. I take great care in the experience, architecture, and code quality of the things I build.
              </p>
              <p>
                With expertise across front-end and back-end development, I bring a holistic perspective to creating software solutions that not only meet functional requirements but also deliver exceptional user experiences.
              </p>
              <p>
                I enjoy collaborating with teams to solve complex problems and am always eager to learn new technologies and methodologies to enhance my skill set.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CodeIcon className="text-primary" size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2">Clean Code</h4>
              <p className="text-muted-foreground">I write clean, maintainable code with a focus on performance and scalability.</p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-primary" size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2">Pixel Perfect</h4>
              <p className="text-muted-foreground">I'm passionate about creating pixel-perfect, responsive interfaces that users love.</p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="text-primary" size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2">Problem Solver</h4>
              <p className="text-muted-foreground">I enjoy tackling complex problems and finding efficient, elegant solutions.</p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="text-primary" size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2">Continuous Learner</h4>
              <p className="text-muted-foreground">I'm always learning and exploring new technologies and approaches.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
