import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink, Star, Heart } from "lucide-react";
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
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative y2k-grid">
      {/* Y2K decorative elements */}
      <motion.div 
        className="absolute top-20 right-10 w-12 h-12 text-[#FBFF12]"
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Star className="w-full h-full" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-40 left-10 w-10 h-10 text-[#FF9EE0]"
        animate={{ 
          rotate: -360,
          scale: [1, 1.2, 1],
          y: [0, -10, 0]
        }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Heart className="w-full h-full" />
      </motion.div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Y2K Typography */}
          <motion.div className="lg:order-1 z-10">
            <motion.h1 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-4xl md:text-5xl lg:text-7xl font-extrabold threed-text" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                Hi, I'm Prateek Budhwar
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold mt-2 holographic" style={{ fontFamily: 'VT323, monospace' }}>
                Data Engineer & AI Enthusiast
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl mb-6 text-muted-foreground"
              style={{ fontFamily: 'Quicksand, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforming Earth Observation data into actionable insights through scalable pipelines and cloud-native applications.
            </motion.p>

            <motion.div
              className="y2k-card p-4 mb-8 inline-flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex-shrink-0 p-2 bg-[#FBFF12] rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black">
                  <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path>
                  <path d="M15.6 10a4 4 0 1 1-8 2.4"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-primary" style={{ fontFamily: 'VT323, monospace' }}>
                  Arctic Code Vault Contributor
                </h4>
                <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                  Contributed code to 1 repository in the 2020 GitHub Archive Program.
                </p>
              </div>
            </motion.div>
          
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bubble-button"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                <span className="relative z-10 font-bold">Get in Touch</span>
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                onClick={() => scrollToSection('projects')}
                className="bubble-button bg-[#75D5FA] border-4 border-white"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                <span className="relative z-10 font-bold text-white">View My Projects</span>
              </Button>
            </motion.div>

            <motion.div 
              className="mt-8 flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <a 
                href="https://github.com/budprat" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-[#C1FF72] rounded-full text-black hover:scale-110 transition-transform duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/prateek-budhwar-212a92314/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-[#75D5FA] rounded-full text-black hover:scale-110 transition-transform duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Visual Elements with Y2K style */}
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
                {/* Y2K-style profile image border */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#FF9EE0] to-[#75D5FA] rounded-full"></div>
                <div className="absolute -inset-1 bg-white rounded-full"></div>
                <div className="relative bg-white rounded-full p-1 border-4 border-white">
                  <img 
                    src={profileImage} 
                    alt="Prateek Budhwar profile picture" 
                    className="rounded-full w-full h-auto aspect-square object-cover" 
                  />
                </div>

                {/* Y2K decorative elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-8 h-8 bg-[#FF9EE0] rounded-full"
                  style={{ 
                    x: mousePosition.x * -30,
                    y: mousePosition.y * -30
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#75D5FA] rounded-full"
                  style={{ 
                    x: mousePosition.x * 30,
                    y: mousePosition.y * 30
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute top-1/2 -right-6 w-6 h-6 bg-[#C1FF72] rounded-full"
                  style={{ 
                    x: mousePosition.x * -15,
                    y: mousePosition.y * 15
                  }}
                ></motion.div>
              </div>
            </motion.div>

            {/* AI Projects Card - Y2K style */}
            <motion.div
              className="chrome-gradient rounded-3xl p-6 mx-auto lg:mx-0 w-full border-4 border-white"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * -10}deg)`,
                transition: 'transform 0.2s ease-out'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-4 holographic" style={{ fontFamily: 'VT323, monospace' }}>
                AI PROJECTS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] border-2 border-[#FF9EE0]">
                  <h4 className="font-semibold text-[#4E3D8B]" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                    Notion AI Template Forge
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                    AI-powered app generating custom Notion templates based on user interests and preferred styles.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["React", "TypeScript", "Tailwind", "AI"].map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-[#75D5FA]/20 text-[#4E3D8B] rounded-full border border-[#75D5FA]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href="https://github.com/budprat/notion-ai-template-forge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-[#FF9EE0] hover:text-[#FF9EE0]/80 font-bold"
                    style={{ fontFamily: 'VT323, monospace' }}
                  >
                    View Project <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] border-2 border-[#75D5FA]">
                  <h4 className="font-semibold text-[#4E3D8B]" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                    Delhi Date Eats Guide
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                    A curated guide for romantic dining spots in Delhi with recommendations for date nights.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["React", "JavaScript", "CSS"].map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-[#FF9EE0]/20 text-[#4E3D8B] rounded-full border border-[#FF9EE0]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href="https://github.com/budprat/delhi-date-eats-guide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-[#75D5FA] hover:text-[#75D5FA]/80 font-bold"
                    style={{ fontFamily: 'VT323, monospace' }}
                  >
                    View Project <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Y2K background elements */}
      <motion.div 
        className="hidden lg:block absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-[#FF9EE0]/20 to-[#75D5FA]/20 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div 
        className="hidden lg:block absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-[#C1FF72]/20 to-[#FBFF12]/20 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
    </section>
  );
}