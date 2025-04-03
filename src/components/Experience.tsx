
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
      "Created demo apps using <a href='https://react.dev/' target='_blank' rel='noopener noreferrer' class='text-[#0EA5E9] hover:underline inline-flex items-center gap-0.5'>React<ExternalLink size={12} /></a>, <a href='https://nextjs.org/' target='_blank' rel='noopener noreferrer' class='text-[#0EA5E9] hover:underline inline-flex items-center gap-0.5'>Next.js<ExternalLink size={12} /></a>, <a href='https://www.figma.com/' target='_blank' rel='noopener noreferrer' class='text-[#0EA5E9] hover:underline inline-flex items-center gap-0.5'>Figma<ExternalLink size={12} /></a>, <a href='https://firebase.google.com/' target='_blank' rel='noopener noreferrer' class='text-[#0EA5E9] hover:underline inline-flex items-center gap-0.5'>Firebase<ExternalLink size={12} /></a>, and <a href='https://www.typescriptlang.org/' target='_blank' rel='noopener noreferrer' class='text-[#0EA5E9] hover:underline inline-flex items-center gap-0.5'>TypeScript<ExternalLink size={12} /></a>.",
      "Designed and developed a <a href='https://javascript.info/class-inheritance' target='_blank' rel='noopener noreferrer' class='text-[#0EA5E9] hover:underline inline-flex items-center gap-0.5'>class-based inheritance<ExternalLink size={12} /></a> architecture to enable component customization while preserving core functionality.",
      "Integrated with Google Slides, Figma, and Superflow using their respective <a href='https://developers.google.com/apps-script/add-ons/concepts/editor-add-ons' target='_blank' rel='noopener noreferrer' class='text-[#0EA5E9] hover:underline inline-flex items-center gap-0.5'>Add-on APIs<ExternalLink size={12} /></a>.",
      "Developed collaborative features for <a href='https://drive.usesuperflow.com/upload' target='_blank' rel='noopener noreferrer' class='text-[#0EA5E9] hover:underline inline-flex items-center gap-0.5'>Superflow File Drive<ExternalLink size={12} /></a>, including custom media players for various file types.",
      "Conducted <a href='https://www.w3.org/WAI/standards-guidelines/aria/' target='_blank' rel='noopener noreferrer' class='text-[#0EA5E9] hover:underline inline-flex items-center gap-0.5'>ARIA<ExternalLink size={12} /></a> accessibility audits and implemented fixes to improve the user experience for all users."
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
      "Contributed to the development of <a href='https://gluestack.io/' target='_blank' rel='noopener noreferrer' class='text-[#0EA5E9] hover:underline inline-flex items-center gap-0.5'>GlueStack UI<ExternalLink size={12} /></a>, a universal component library for React and React Native with 3.5k+ GitHub stars.",
      "Created a <a href='https://www.figma.com/community/plugin/1304000704678516266/gluestack' target='_blank' rel='noopener noreferrer' class='text-[#0EA5E9] hover:underline inline-flex items-center gap-0.5'>Figma Plugin<ExternalLink size={12} /></a> enabling batch updates for color palette alpha tokens and font families.",
      "Worked on <a href='https://nativebase.io/' target='_blank' rel='noopener noreferrer' class='text-[#0EA5E9] hover:underline inline-flex items-center gap-0.5'>NativeBase<ExternalLink size={12} /></a>, a popular UI library with 65k+ weekly downloads and 18k+ GitHub stars.",
      "Added <a href='https://reactnative.dev/docs/accessibility' target='_blank' rel='noopener noreferrer' class='text-[#0EA5E9] hover:underline inline-flex items-center gap-0.5'>aria-live<ExternalLink size={12} /></a> alias for accessibilityLiveRegion property in React Native Core.",
      "Implemented features like <a href='https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext' target='_blank' rel='noopener noreferrer' class='text-[#0EA5E9] hover:underline inline-flex items-center gap-0.5'>aria-valuetext<ExternalLink size={12} /></a> support in React Native, enhancing accessibility for screen readers."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0A0C1A] to-[#182247]">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent z-0"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#0EA5E9]/10 rounded-full blur-[100px]"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNNjAgMEgwdjYwaDYweiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl md:text-7xl font-anton uppercase tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9]">
            Work <span className="text-white">Experience</span>
          </h2>
          <p className="text-lg text-[#A4B0E0] max-w-3xl">
            My professional journey showcases a commitment to building modern, accessible, and collaborative software solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-12 relative">
          {/* Timeline line with glow effect */}
          <div className="absolute left-[22px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-[#8B5CF6] via-[#0EA5E9] to-transparent hidden md:block shadow-[0_0_8px_rgba(14,165,233,0.7)]"></div>
          
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
                {/* Timeline dot with glow */}
                <div className="hidden md:flex items-start justify-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#8B5CF6] to-[#0EA5E9] text-white rounded-full shadow-[0_0_15px_rgba(139,92,246,0.7)] z-10">
                    <Briefcase size={20} />
                  </div>
                </div>
                
                <div className="bg-[#111A36]/80 backdrop-blur-md rounded-xl p-6 md:p-8 border border-[#8B5CF6]/20 shadow-lg hover:shadow-xl transition-shadow group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#8B5CF6] transition-colors">
                        {role.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        {role.company.url ? (
                          <a 
                            href={role.company.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#0EA5E9] font-medium inline-flex items-center hover:underline"
                          >
                            {role.company.name}
                            <ExternalLink size={14} className="ml-1" />
                          </a>
                        ) : (
                          <span className="text-[#0EA5E9] font-medium">{role.company.name}</span>
                        )}
                        
                        <span className="text-gray-400">•</span>
                        
                        <div className="inline-flex items-center text-gray-400">
                          <MapPin size={14} className="mr-1" />
                          <span>{role.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Badge variant="glow" className="flex items-center gap-1 py-1.5 px-3">
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
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] shadow-[0_0_5px_rgba(139,92,246,0.7)]"></div>
                        </div>
                        <div 
                          className="text-gray-300" 
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
