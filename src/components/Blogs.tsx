
import { ExternalLink, BookOpen } from "lucide-react";

const blogs = [
  {
    title: "NativeBase X Formik",
    url: "https://nativebase.hashnode.dev/nativebase-x-formik",
    publisher: "NativeBase Hashnode",
    description: "A comprehensive guide on integrating NativeBase with Formik for form management in React Native applications."
  },
  {
    title: "How Automated Web Scraping can Ease Your Pain",
    url: "https://medium.com/python-in-plain-english/how-automated-web-scraping-can-ease-your-pain-8839f436bb13",
    publisher: "Medium - Python in Plain English",
    description: "An in-depth tutorial on implementing automated web scraping solutions using Python."
  }
];

const Blogs = () => {
  return (
    <section id="blogs" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="font-mono text-sm uppercase tracking-wider text-primary mb-4">
              Knowledge Sharing
            </p>
            <h2 className="text-6xl md:text-7xl font-anton uppercase tracking-tight mb-8">
              Blogs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I share my technical knowledge and experiences through articles to help others in the developer community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {blogs.map((blog, index) => (
              <div 
                key={blog.title}
                className={`lg:col-span-6 group relative ${index === 0 ? "lg:col-start-1" : "lg:col-start-7"}`}
              >
                {/* Background decoration */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent -z-10 transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
                
                <div className="bg-background border border-border hover:border-primary/50 transition-colors p-8">
                  <div className="mb-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center shrink-0">
                      <BookOpen size={24} className="text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-primary font-mono mb-0">
                        {blog.publisher}
                      </p>
                    </div>
                  </div>
                  
                  <div className="h-[1px] w-full bg-border mb-6"></div>
                  
                  <p className="text-muted-foreground mb-6">
                    {blog.description}
                  </p>
                  
                  <a 
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-mono text-sm uppercase tracking-wide text-primary hover:underline"
                  >
                    Read Article
                    <ExternalLink size={14} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
