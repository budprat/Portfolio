import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import profileImage from "@assets/IMG_0178.jpeg";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: (element as HTMLElement).offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Mouse position state for parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col pt-16 overflow-hidden relative">
      {/* Particle background */}
      <ParticleBackground />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Profile Image */}
          <div className="lg:w-1/3">
            <div className="mb-6">
              <motion.div
                className="relative max-w-[280px] mb-4"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * -10}deg)`,
                  transition: 'transform 0.2s ease-out'
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.0 }}
              >
                <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-40"></div>
                <div className="relative bg-card rounded-full p-2">
                  <img 
                    src={profileImage} 
                    alt="Prateek Budhwar profile picture" 
                    className="rounded-full w-full h-auto aspect-square object-cover border-2 border-primary/30" 
                  />
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
                Hi, I'm Prateek Budhwar
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
                Data Engineer & AI Enthusiast
              </h2>
              
              <p className="text-lg mb-6 text-muted-foreground font-light leading-relaxed">
                Transforming Earth Observation data into actionable insights through scalable pipelines and cloud-native applications.
              </p>
              
              <div className="bg-card border border-border shadow-md rounded-lg p-4 mb-8 flex items-center gap-3">
                <div className="flex-shrink-0 p-2 bg-primary/20 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path>
                    <path d="M15.6 10a4 4 0 1 1-8 2.4"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Arctic Code Vault Contributor</h4>
                  <p className="text-sm text-muted-foreground">Contributed code to 1 repository in the 2020 GitHub Archive Program.</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] group"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] hover:border-primary"
                >
                  View My Projects
                </Button>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href="https://github.com/budprat" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary text-xl transition-colors duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/prateek-budhwar-212a92314/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary text-xl transition-colors duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Right side - AI Projects moved upwards */}
          <div className="lg:w-2/3">
            <motion.div
              className="bg-card shadow-md border border-border rounded-lg p-6 w-full"
              style={{
                transformStyle: "preserve-3d",
                transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * -10}deg)`,
                transition: 'transform 0.2s ease-out'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-primary mb-4">AI Projects</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-muted rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:translate-y-[-2px] border border-border/50">
                  <h4 className="font-semibold text-foreground">AI Knowledge Assistant</h4>
                  <p className="text-sm text-muted-foreground mb-2">Advanced conversational AI system that provides intelligent answers and information retrieval capabilities.</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["React", "TypeScript", "GPT-4", "NLP"].map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-background text-foreground rounded-full border border-border/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href="https://6b3b849b-dd07-4106-925a-f6f5e9c55f2e-00-2p5b1ten8f8we.worf.replit.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:text-primary/80 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                  >
                    View Project <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:translate-y-[-2px] border border-border/50">
                    <h4 className="font-semibold text-foreground">Notion AI Template Forge</h4>
                    <p className="text-sm text-muted-foreground mb-2">AI-powered app generating custom Notion templates based on user interests and preferred styles.</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {["React", "TypeScript", "Tailwind", "AI"].map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-background text-foreground rounded-full border border-border/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href="https://github.com/budprat/notion-ai-template-forge"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary hover:text-primary/80 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    >
                      View Project <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>

                  <div className="bg-muted rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:translate-y-[-2px] border border-border/50">
                    <h4 className="font-semibold text-foreground">Delhi Date Eats Guide</h4>
                    <p className="text-sm text-muted-foreground mb-2">A curated guide for romantic dining spots in Delhi with recommendations for date nights.</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {["React", "JavaScript", "CSS"].map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-background text-foreground rounded-full border border-border/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href="https://github.com/budprat/delhi-date-eats-guide"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary hover:text-primary/80 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    >
                      View Project <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <motion.div 
        className="hidden lg:block absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10"
        style={{ 
          x: mousePosition.x * -40,
          y: mousePosition.y * -40
        }}
      ></motion.div>
      <motion.div 
        className="hidden lg:block absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl -z-10"
        style={{ 
          x: mousePosition.x * 40,
          y: mousePosition.y * 40
        }}
      ></motion.div>
    </section>
  );
}