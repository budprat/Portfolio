import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

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
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight"
              variants={itemVariants}
            >
              <span className="block">Hi, I'm Prateek Budhwar</span>
              <span className="text-primary dark:text-primary-foreground">Data Engineer & AI Enthusiast</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              Building scalable Earth Observation data processing pipelines and cloud-native applications that turn satellite data into actionable insights.
            </motion.p>
            
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
            <img 
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern tech workspace with data visualizations" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
