
import { CodeIcon, Heart, Cpu, Zap, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-20 left-0 text-[20rem] font-anton text-primary/5 -z-10 opacity-70 leading-none">
        ABOUT
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 lg:col-start-1">
              <p className="font-mono text-sm uppercase tracking-wider text-primary mb-4">
                About Me
              </p>
              <h2 className="text-6xl md:text-7xl font-anton uppercase tracking-tight mb-8">
                Passionate About Development
              </h2>
              
              <div className="space-y-6 text-muted-foreground">
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
            </div>
            
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent -z-10 transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
                  
                  <div className="bg-background border border-border hover:border-primary/50 transition-colors p-6 h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                      <CodeIcon className="text-primary" size={24} />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Clean Code</h4>
                    <p className="text-muted-foreground">I write clean, maintainable code with a focus on performance and scalability.</p>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent -z-10 transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
                  
                  <div className="bg-background border border-border hover:border-primary/50 transition-colors p-6 h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                      <Heart className="text-primary" size={24} />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Pixel Perfect</h4>
                    <p className="text-muted-foreground">I'm passionate about creating pixel-perfect, responsive interfaces that users love.</p>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent -z-10 transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
                  
                  <div className="bg-background border border-border hover:border-primary/50 transition-colors p-6 h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                      <Cpu className="text-primary" size={24} />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Problem Solver</h4>
                    <p className="text-muted-foreground">I enjoy tackling complex problems and finding efficient, elegant solutions.</p>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent -z-10 transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
                  
                  <div className="bg-background border border-border hover:border-primary/50 transition-colors p-6 h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                      <Sparkles className="text-primary" size={24} />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Continuous Learner</h4>
                    <p className="text-muted-foreground">I'm always learning and exploring new technologies and approaches.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
