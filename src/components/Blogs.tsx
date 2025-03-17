
import { motion } from "framer-motion";
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
    <section id="blogs" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-secondary/50 to-transparent"></div>
      
      {/* Gradient bg elements */}
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-primary">Tech</span> Blogs
          </h2>
          <p className="text-lg text-muted-foreground">
            I share my knowledge and experiences through technical articles.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              className="bg-card rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <BookOpen size={24} className="text-primary" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-primary mb-3">
                    {blog.publisher}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {blog.description}
                  </p>
                  
                  <a 
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Read Article
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
