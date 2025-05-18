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
    <section id="home" className="min-h-screen flex items-center pt-16 overflow-hidden relative">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Animated Typography */}
          <motion.div className="lg:order-1 z-10">
            <motion.h1 
              className="mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900">Hi, I'm Prateek Budhwar</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-primary">Data Engineer & AI Enthusiast</span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl mb-6 text-gray-700 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforming Earth Observation data into actionable insights through scalable pipelines and cloud-native applications.
            </motion.p>

            <motion.div
              className="bg-slate-50 border border-slate-200 shadow-sm rounded-lg p-4 mb-8 inline-flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex-shrink-0 p-2 bg-amber-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-amber-600">
                  <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path>
                  <path d="M15.6 10a4 4 0 1 1-8 2.4"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-amber-600">Arctic Code Vault Contributor</h4>
                <p className="text-sm text-gray-600">Contributed code to 1 repository in the 2020 GitHub Archive Program.</p>
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
            </motion.div>

            <motion.div 
              className="mt-8 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <a 
                href="https://github.com/budprat" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary text-xl transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/prateek-budhwar-212a92314/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary text-xl transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
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
              <div className="relative max-w-[300px] mx-auto lg:ml-auto">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-50"></div>
                <div className="relative bg-white rounded-full p-1.5">
                  <img 
                    src={profileImage} 
                    alt="Prateek Budhwar profile picture" 
                    className="rounded-full w-full h-auto aspect-square object-cover border-2 border-slate-100" 
                  />
                </div>

                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full blur-xl opacity-40"
                  style={{ 
                    x: mousePosition.x * -30,
                    y: mousePosition.y * -30
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-500 rounded-full blur-xl opacity-40"
                  style={{ 
                    x: mousePosition.x * 30,
                    y: mousePosition.y * 30
                  }}
                ></motion.div>
              </div>
            </motion.div>

            {/* AI Projects Card */}
            <motion.div
              className="bg-white shadow-sm border border-slate-200 rounded-lg p-5 mx-auto lg:mx-0 w-full"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * -10}deg)`,
                transition: 'transform 0.2s ease-out'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-primary mb-4">AI Projects</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-slate-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 hover:translate-y-[-2px]">
                  <h4 className="font-semibold text-gray-900">AI Knowledge Assistant</h4>
                  <p className="text-sm text-gray-600 mb-2">Advanced conversational AI system that provides intelligent answers and information retrieval capabilities.</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["React", "TypeScript", "GPT-4", "NLP"].map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-slate-100 text-gray-700 rounded-full">
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
                  <div className="bg-slate-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 hover:translate-y-[-2px]">
                    <h4 className="font-semibold text-gray-900">Notion AI Template Forge</h4>
                    <p className="text-sm text-gray-600 mb-2">AI-powered app generating custom Notion templates based on user interests and preferred styles.</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {["React", "TypeScript", "Tailwind", "AI"].map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-slate-100 text-gray-700 rounded-full">
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

                  <div className="bg-slate-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 hover:translate-y-[-2px]">
                    <h4 className="font-semibold text-gray-900">Delhi Date Eats Guide</h4>
                    <p className="text-sm text-gray-600 mb-2">A curated guide for romantic dining spots in Delhi with recommendations for date nights.</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {["React", "JavaScript", "CSS"].map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-slate-100 text-gray-700 rounded-full">
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