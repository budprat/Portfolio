import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="mb-6 leading-tight"
              variants={itemVariants}
            >
              <span className="block text-4xl md:text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-600 text-transparent bg-clip-text">Hi, I'm Prateek Budhwar</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-cyan-400">Data Engineer & AI Enthusiast</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-6 text-gray-300 font-light leading-relaxed"
              variants={itemVariants}
            >
              Transforming <span className="text-blue-400 font-medium">Earth Observation data</span> into actionable insights through <span className="text-emerald-400 font-medium">scalable pipelines</span> and <span className="text-amber-400 font-medium">cloud-native applications</span>.
            </motion.p>
            
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
            className="order-1 lg:order-2 reveal"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-70"></div>
              <div className="relative bg-gray-900 rounded-full p-2">
                <img 
                  src={profileImage} 
                  alt="Prateek Budhwar profile picture" 
                  className="rounded-full w-full h-auto aspect-square object-cover border-4 border-gray-800" 
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full blur-xl opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full blur-xl opacity-70"></div>
              <div className="absolute top-1/2 -right-6 w-8 h-8 bg-cyan-500 rounded-full blur-lg opacity-70"></div>
            </div>
            
            {/* Decorative background elements */}
            <div className="hidden lg:block absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="hidden lg:block absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
