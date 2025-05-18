import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="glass cosmic-border rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center cosmic-glow">
                  <span className="text-xs font-bold text-white">PB</span>
                </div>
                <span className="text-xl font-bold glow-text">Prateek Budhwar</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Data Engineer & AI Enthusiast specializing in Earth Observation data processing and cloud-native applications.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/budprat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/prateek-budhwar-212a92314/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:p.budhwar@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a 
                  href="tel:+919350569323" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label="Phone"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#home" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 animated-underline"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 animated-underline"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#experience" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 animated-underline"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 animated-underline"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#education" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 animated-underline"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 animated-underline"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <span className="block text-muted-foreground">Email</span>
                    <a 
                      href="mailto:p.budhwar@gmail.com" 
                      className="text-foreground hover:text-primary transition-colors duration-200"
                    >
                      p.budhwar@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <span className="block text-muted-foreground">Phone</span>
                    <a 
                      href="tel:+919350569323" 
                      className="text-foreground hover:text-primary transition-colors duration-200"
                    >
                      +91 935-056-9323
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm mb-4 sm:mb-0">
                &copy; {currentYear} Prateek Budhwar. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#home" 
                  className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a 
                  href="#home" 
                  className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 border border-primary/10 rounded-full opacity-20 -z-10" 
        style={{ transform: 'translateX(-30%) translateY(50%)' }}></div>
      <div className="absolute top-0 right-0 w-80 h-80 border border-accent/10 rounded-full opacity-20 -z-10" 
        style={{ transform: 'translateX(40%) translateY(-50%)' }}></div>
      
      {/* Shooting star animation */}
      <div 
        className="shooting-star"
        style={{ 
          top: '20%', 
          left: '10%', 
          animationDelay: '0s',
          animationDuration: '4s'
        }}
      />
    </footer>
  );
}