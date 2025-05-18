import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import profileImage from "@assets/IMG_0178.jpeg";

export default function Hero() {
  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Introduction at top */}
        <motion.div
          className="mb-10 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="block text-4xl md:text-5xl lg:text-7xl font-extrabold text-white">Hi, I'm Prateek Budhwar</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-blue-400">Data Engineer & AI Enthusiast</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-6 text-gray-300 font-light leading-relaxed max-w-4xl mx-auto"
            variants={itemVariants}
          >
            Transforming Earth Observation data into actionable insights through scalable pipelines and cloud-native applications.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 mb-8 inline-flex items-center gap-3"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 p-2 bg-gray-700 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-yellow-400">
                  <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path>
                  <path d="M15.6 10a4 4 0 1 1-8 2.4"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-400">Arctic Code Vault Contributor</h4>
                <p className="text-sm text-gray-300">Contributed code to 1 repository in the 2020 GitHub Archive Program.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="px-8"
              >
                Get in Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('projects')}
                className="px-8"
              >
                View My Projects
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex gap-4"
              variants={itemVariants}
            >
              <a 
                href="https://github.com/budprat" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-foreground text-xl transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/prateek-budhwar-212a92314/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-foreground text-xl transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 reveal flex flex-col gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={imageVariants}>
              <div className="relative max-w-[250px] mx-auto lg:mx-0">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-70"></div>
                <div className="relative bg-gray-900 rounded-full p-1.5">
                  <img 
                    src={profileImage} 
                    alt="Prateek Budhwar profile picture" 
                    className="rounded-full w-full h-auto aspect-square object-cover border-3 border-gray-800" 
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 rounded-full blur-xl opacity-70"></div>
                <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-purple-500 rounded-full blur-xl opacity-70"></div>
                <div className="absolute top-1/2 -right-4 w-6 h-6 bg-cyan-500 rounded-full blur-lg opacity-70"></div>
              </div>
            </motion.div>
            
            {/* AI Projects Section */}
            <motion.div 
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-5 mx-auto lg:mx-0 w-full"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-4">AI Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800/60 rounded-lg p-4">
                  <h4 className="font-semibold text-white">Notion AI Template Forge</h4>
                  <p className="text-sm text-gray-300 mb-2">AI-powered app generating custom Notion templates based on user interests and preferred styles.</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["React", "TypeScript", "Tailwind", "AI"].map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href="https://github.com/budprat/notion-ai-template-forge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
                  >
                    View Project <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
                
                <div className="bg-gray-800/60 rounded-lg p-4">
                  <h4 className="font-semibold text-white">Delhi Date Eats Guide</h4>
                  <p className="text-sm text-gray-300 mb-2">A curated guide for romantic dining spots in Delhi with recommendations for date nights.</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["React", "JavaScript", "CSS"].map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href="https://github.com/budprat/delhi-date-eats-guide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
                  >
                    View Project <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative background elements */}
            <div className="hidden lg:block absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="hidden lg:block absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
