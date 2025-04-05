import { motion } from "framer-motion";
import { Camera, Palette, Video, ExternalLink } from "lucide-react";
import { sectionColors } from "@/theme/colors";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";

const Hobbies = () => {
  const hobbiesColor = sectionColors.hobbies;
  
  return (
    <section id="hobbies" className="py-24 relative overflow-hidden">
      <SectionBackground color={hobbiesColor} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            label="Beyond Coding"
            title="Hobbies & Interests"
            description="Beyond coding, here are some of my creative pursuits and interests."
            color={hobbiesColor}
            align="center"
          />
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
              <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                style={{ backgroundColor: `${hobbiesColor}10` }}>
                <Video style={{ color: hobbiesColor }} size={24} />
              </div>
              <h3 className="text-2xl font-bold">Video Editing</h3>
            </div>
            
            <GlassCard color={hobbiesColor} className="p-6">
              <h4 className="text-xl font-bold mb-4">Peaky Blinders || Thomas Shelby || Experience</h4>
              <p className="text-muted-foreground mb-6">
                I make edits of TV shows and films that I like, combining visual storytelling with creative editing techniques.
              </p>
              
              <div className="flex justify-center">
                <motion.a 
                  href="https://www.youtube.com/watch?v=aHXhtOFzseE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full text-white font-medium hover:opacity-90 transition-all"
                  style={{ backgroundColor: hobbiesColor }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Watch on YouTube
                  <ExternalLink size={16} className="ml-2" />
                </motion.a>
              </div>
            </GlassCard>
          </motion.div>
          
          {/* Sketching */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                style={{ backgroundColor: `${hobbiesColor}10` }}>
                <Palette style={{ color: hobbiesColor }} size={24} />
              </div>
              <h3 className="text-2xl font-bold">Sketching</h3>
            </div>
            
            <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
              I enjoy creating sketches in my free time, exploring different artistic styles and subjects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "https://i.imgur.com/1lrgDuh.jpg",
                "https://i.imgur.com/QofQoSg.jpg",
                "https://i.imgur.com/c47D1kW.jpg"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <GlassCard color={hobbiesColor} className="p-0 aspect-square overflow-hidden">
                    <div className="w-full h-full">
                      <img 
                        src={item} 
                        alt={`Sketch ${index + 1}`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://via.placeholder.com/400x400?text=Sketch+Not+Found";
                        }}
                      />
                    </div>
                  </GlassCard>
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
