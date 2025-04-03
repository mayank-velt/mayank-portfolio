
import { motion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Company {
  name: string;
  url?: string;
}

interface Role {
  title: string;
  company: Company;
  location: string;
  period: string;
  description: string[];
}

const roles: Role[] = [
  {
    title: "Software Engineer",
    company: {
      name: "Velt (formerly Cord)",
      url: "https://velt.dev/"
    },
    location: "San Francisco, USA (Remote)",
    period: "June 2022 - Current",
    description: [
      "Designed and developed a framework-agnostic SDK with customizable components and a theming system that provides real-time collaborative features like threads, presence, and mentions.",
      "Created demo apps using <a href='https://react.dev/' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline inline-flex items-center gap-0.5'>React<ExternalLink size={12} /></a>, <a href='https://nextjs.org/' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline inline-flex items-center gap-0.5'>Next.js<ExternalLink size={12} /></a>, <a href='https://www.figma.com/' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline inline-flex items-center gap-0.5'>Figma<ExternalLink size={12} /></a>, <a href='https://firebase.google.com/' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline inline-flex items-center gap-0.5'>Firebase<ExternalLink size={12} /></a>, and <a href='https://www.typescriptlang.org/' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline inline-flex items-center gap-0.5'>TypeScript<ExternalLink size={12} /></a>.",
      "Designed and developed a <a href='https://javascript.info/class-inheritance' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline inline-flex items-center gap-0.5'>class-based inheritance<ExternalLink size={12} /></a> architecture to enable component customization while preserving core functionality.",
      "Integrated with Google Slides, Figma, and Superflow using their respective <a href='https://developers.google.com/apps-script/add-ons/concepts/editor-add-ons' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline inline-flex items-center gap-0.5'>Add-on APIs<ExternalLink size={12} /></a>.",
      "Developed collaborative features for <a href='https://drive.usesuperflow.com/upload' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline inline-flex items-center gap-0.5'>Superflow File Drive<ExternalLink size={12} /></a>, including custom media players for various file types.",
      "Conducted <a href='https://www.w3.org/WAI/standards-guidelines/aria/' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline inline-flex items-center gap-0.5'>ARIA<ExternalLink size={12} /></a> accessibility audits and implemented fixes to improve the user experience for all users."
    ]
  },
  {
    title: "Software Developer",
    company: {
      name: "GeekyAnts",
      url: "https://geekyants.com/"
    },
    location: "Bangalore, India",
    period: "Aug 2021 - June 2022",
    description: [
      "Contributed to the development of <a href='https://gluestack.io/' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline inline-flex items-center gap-0.5'>GlueStack UI<ExternalLink size={12} /></a>, a universal component library for React and React Native with 3.5k+ GitHub stars.",
      "Created a <a href='https://www.figma.com/community/plugin/1304000704678516266/gluestack' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline inline-flex items-center gap-0.5'>Figma Plugin<ExternalLink size={12} /></a> enabling batch updates for color palette alpha tokens and font families.",
      "Worked on <a href='https://nativebase.io/' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline inline-flex items-center gap-0.5'>NativeBase<ExternalLink size={12} /></a>, a popular UI library with 65k+ weekly downloads and 18k+ GitHub stars.",
      "Added <a href='https://reactnative.dev/docs/accessibility' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline inline-flex items-center gap-0.5'>aria-live<ExternalLink size={12} /></a> alias for accessibilityLiveRegion property in React Native Core.",
      "Implemented features like <a href='https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline inline-flex items-center gap-0.5'>aria-valuetext<ExternalLink size={12} /></a> support in React Native, enhancing accessibility for screen readers."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl md:text-7xl font-anton uppercase tracking-tight mb-6">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            My professional journey showcases a commitment to building modern, accessible, and collaborative software solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-12 relative">
          {/* Timeline line */}
          <div className="absolute left-[22px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-primary/80 via-primary/50 to-primary/10 hidden md:block"></div>
          
          {roles.map((role, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[48px_1fr] gap-4 md:gap-8">
                {/* Timeline dot */}
                <div className="hidden md:flex items-start justify-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full shadow-lg z-10">
                    <Briefcase size={20} />
                  </div>
                </div>
                
                <div className="bg-card backdrop-blur-sm rounded-xl p-6 md:p-8 border border-primary/10 shadow-lg hover:shadow-xl transition-shadow group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {role.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        {role.company.url ? (
                          <a 
                            href={role.company.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary font-medium inline-flex items-center hover:underline"
                          >
                            {role.company.name}
                            <ExternalLink size={14} className="ml-1" />
                          </a>
                        ) : (
                          <span className="text-primary font-medium">{role.company.name}</span>
                        )}
                        
                        <span className="text-muted-foreground">•</span>
                        
                        <div className="inline-flex items-center text-muted-foreground">
                          <MapPin size={14} className="mr-1" />
                          <span>{role.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Badge variant="outline" className="flex items-center gap-1 py-1.5 px-3 bg-primary/5 border-primary/20 text-primary">
                      <Calendar size={14} />
                      <span>{role.period}</span>
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    {role.description.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="flex gap-3"
                      >
                        <div className="min-w-4 pt-1.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <div 
                          className="text-muted-foreground" 
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
