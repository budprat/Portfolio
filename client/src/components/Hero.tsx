import { useState, useEffect } from "react";
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
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Animated Typography with cosmic theme */}
          <motion.div className="lg:order-1 z-10">
            <motion.h1 
              className="mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="block text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground glow-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ 
                  background: "linear-gradient(to right, #f8fafc, #a5b4fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Hi, I'm Prateek Budhwar
              </motion.span>
              <motion.span 
                className="block text-3xl md:text-4xl lg:text-5xl font-bold mt-2 glow-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ 
                  background: "linear-gradient(to right, #7c3aed, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Data Engineer & AI Enthusiast
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl mb-6 text-muted-foreground font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Transforming Earth Observation data into actionable insights through scalable pipelines and cloud-native applications.
            </motion.p>

            <motion.div
              className="glass cosmic-border rounded-lg p-4 mb-8 inline-flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex-shrink-0 p-2 bg-primary/15 rounded-full cosmic-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-tertiary">
                  <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path>
                  <path d="M15.6 10a4 4 0 1 1-8 2.4"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-tertiary">Arctic Code Vault Contributor</h4>
                <p className="text-sm text-muted-foreground">Contributed code to 1 repository in the 2020 GitHub Archive Program.</p>
              </div>
            </motion.div>
          
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="px-8 relative overflow-hidden transition-all duration-300 hover:translate-y-[-2px] group cosmic-glow"
              >
                <span className="relative z-10">Get in Touch</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('projects')}
                className="px-8 relative overflow-hidden transition-all duration-300 hover:translate-y-[-2px] hover:border-primary cosmic-border"
              >
                View My Projects
              </Button>
            </motion.div>

            <motion.div 
              className="mt-8 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <a 
                href="https://github.com/budprat" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary text-xl transition-colors duration-200 animated-underline"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/prateek-budhwar-212a92314/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary text-xl transition-colors duration-200 animated-underline"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Visual Elements with 3D tilt effect */}
          <div className="lg:order-2 flex flex-col gap-8 relative">
            {/* Profile image with 3D tilt effect */}
            <motion.div 
              className="relative mx-auto lg:mx-0"
              style={{
                transformStyle: "preserve-3d",
                transform: `perspective(1000px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * -20}deg)`,
                transition: 'transform 0.2s ease-out'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0 }}
            >
              <div className="relative max-w-[200px] mx-auto lg:ml-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-70"></div>
                <div className="relative bg-card rounded-full p-1.5 cosmic-border">
                  <img 
                    src={profileImage} 
                    alt="Prateek Budhwar profile picture" 
                    className="rounded-full w-full h-auto aspect-square object-cover" 
                  />
                </div>

                {/* Decorative orbital elements */}
                <motion.div 
                  className="absolute top-0 left-0 right-0 bottom-0 -z-10"
                  style={{
                    background: "radial-gradient(circle at center, transparent 60%, rgba(124, 58, 237, 0.1) 70%, transparent 75%)",
                    borderRadius: "50%",
                    transform: `scale(1.4) rotateZ(${mousePosition.x * 10}deg)`
                  }}
                />

                <motion.div 
                  className="absolute -top-3 -right-3 w-6 h-6 bg-primary rounded-full blur-xl opacity-40"
                  style={{ 
                    x: mousePosition.x * -30,
                    y: mousePosition.y * -30
                  }}
                />
                <motion.div 
                  className="absolute -bottom-3 -left-3 w-6 h-6 bg-accent rounded-full blur-xl opacity-40"
                  style={{ 
                    x: mousePosition.x * 30,
                    y: mousePosition.y * 30
                  }}
                />
              </div>
            </motion.div>

            {/* AI Projects Card */}
            <motion.div
              className="glass cosmic-border rounded-lg p-5 mx-auto lg:mx-0 w-full"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * -10}deg)`,
                transition: 'transform 0.2s ease-out'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold glow-text mb-4" style={{ 
                background: "linear-gradient(to right, #7c3aed, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>AI Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card/50 rounded-lg p-4 shadow-sm transition-all duration-300 hover:translate-y-[-2px] hover:shadow-primary/10 hover:shadow-lg">
                  <h4 className="font-semibold text-foreground">Notion AI Template Forge</h4>
                  <p className="text-sm text-muted-foreground mb-2">AI-powered app generating custom Notion templates based on user interests and preferred styles.</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["React", "TypeScript", "Tailwind", "AI"].map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-background/60 backdrop-blur-sm text-foreground rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href="https://github.com/budprat/notion-ai-template-forge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:text-accent animated-underline"
                  >
                    View Project <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>

                <div className="bg-card/50 rounded-lg p-4 shadow-sm transition-all duration-300 hover:translate-y-[-2px] hover:shadow-primary/10 hover:shadow-lg">
                  <h4 className="font-semibold text-foreground">Delhi Date Eats Guide</h4>
                  <p className="text-sm text-muted-foreground mb-2">A curated guide for romantic dining spots in Delhi with recommendations for date nights.</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["React", "JavaScript", "CSS"].map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-background/60 backdrop-blur-sm text-foreground rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href="https://github.com/budprat/delhi-date-eats-guide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:text-accent animated-underline"
                  >
                    View Project <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Orbital accents */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-primary/20 rounded-full opacity-10" style={{ transform: 'rotate(-20deg)' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 border border-accent/20 rounded-full opacity-10" style={{ transform: 'rotate(15deg)' }}></div>
    </section>
  );
}