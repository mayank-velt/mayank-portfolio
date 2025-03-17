
import { motion } from "framer-motion";
import { Camera, Palette, Video, ExternalLink } from "lucide-react";

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-secondary/50 to-transparent"></div>
      
      {/* Gradient bg elements */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-primary">Hobbies</span> & Interests
          </h2>
          <p className="text-lg text-muted-foreground">
            Beyond coding, here are some of my creative pursuits and interests.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-16">
          {/* Video Editing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Video className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Video Editing</h3>
            </div>
            
            <div className="bg-card rounded-lg border border-border overflow-hidden shadow-sm">
              <div className="p-6">
                <h4 className="text-xl font-bold mb-4">Peaky Blinders || Thomas Shelby || Experience</h4>
                <p className="text-muted-foreground mb-6">
                  I make edits of TV shows and films that I like, combining visual storytelling with creative editing techniques.
                </p>
                
                <div className="flex justify-center">
                  <a 
                    href="https://www.youtube.com/watch?v=aHXhtOFzseE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                  >
                    Watch on YouTube
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Sketching */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Palette className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Sketching</h3>
            </div>
            
            <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
              I enjoy creating sketches in my free time, exploring different artistic styles and subjects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  className="bg-card rounded-lg border border-border overflow-hidden shadow-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (item * 0.1) }}
                >
                  <div className="aspect-square bg-muted flex items-center justify-center">
                    <Palette size={48} className="text-muted-foreground/50" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
