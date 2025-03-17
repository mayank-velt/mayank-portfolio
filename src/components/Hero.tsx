
import { Code } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-16 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <p className="font-mono text-sm uppercase tracking-wider text-primary animate-fade-in">
              Hi there, I'm Mayank
            </p>
            
            <div className="relative">
              <div className="absolute -top-10 -left-4 text-[180px] font-anton text-primary/10 animate-fade-in delay-300">
                &lt;/&gt;
              </div>
              
              <h1 className="text-6xl md:text-8xl font-anton uppercase tracking-tight leading-none relative z-10">
                <span className="block animate-slide-left">Front</span>
                <span className="block animate-slide-right">End</span>
                <span className="block text-primary animate-slide-left delay-200">Developer</span>
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl mt-8 animate-fade-in delay-400">
              I'm a dedicated software engineer with experience in building applications for web and mobile platforms. 
              My passion for software lies with dreaming up ideas and making them come true with elegant pixel-perfect interfaces.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-10 animate-fade-in delay-500">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-primary text-white font-medium uppercase tracking-wide inline-flex items-center transition-transform hover:translate-y-[-2px]"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3 border border-foreground bg-transparent text-foreground font-medium uppercase tracking-wide transition-transform hover:translate-y-[-2px]"
              >
                View Work
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative animate-fade-in delay-300">
            <div className="bg-secondary/50 p-6 lg:p-8 rounded-sm relative z-10">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-sm">
                  <Code className="text-primary" size={24} />
                </div>
                <p className="text-sm font-mono opacity-70 pt-1.5">developer.profile</p>
              </div>
              
              <div className="font-mono text-sm">
                <div className="mb-3">
                  <span className="text-primary">const</span> <span className="text-blue-600">developer</span> = {"{"}
                </div>
                
                <div className="pl-6 space-y-1">
                  <div>
                    <span className="text-orange-600">name</span>: <span className="text-green-600">'Mayank Pagar'</span>,
                  </div>
                  <div>
                    <span className="text-orange-600">title</span>: <span className="text-green-600">'Software Engineer'</span>,
                  </div>
                  <div>
                    <span className="text-orange-600">location</span>: <span className="text-green-600">'Pune, India'</span>,
                  </div>
                  <div>
                    <span className="text-orange-600">skills</span>: [
                  </div>
                  <div className="pl-6">
                    <span className="text-green-600">'React'</span>,
                    <span className="text-green-600">'React Native'</span>,
                    <span className="text-green-600">'TypeScript'</span>,
                  </div>
                  <div className="pl-6">
                    <span className="text-green-600">'UI/UX'</span>,
                    <span className="text-green-600">'Problem Solving'</span>
                  </div>
                  <div>
                    ],
                  </div>
                  <div>
                    <span className="text-orange-600">passion</span>: <span className="text-green-600">'Building elegant interfaces'</span>
                  </div>
                </div>
                
                <div className="mt-3">{"}"}</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-sm -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
