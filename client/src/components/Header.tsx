import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll event to track active section and header transparency
  useEffect(() => {
    const handleScroll = () => {
      // Update header transparency
      setIsScrolled(window.scrollY > 10);
      
      // Calculate scroll progress for progress indicator
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Update active section
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const id = section.getAttribute('id') || '';

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(id);
        }
      });
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Nav items array
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.a 
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold font-heading flex items-center gap-2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center cosmic-glow">
            <span className="text-xs font-bold text-white">PB</span>
          </div>
          <span className="glow-text" style={{ 
            background: "linear-gradient(to right, #f8fafc, #a5b4fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Prateek</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 font-medium">
          {navItems.map((item, index) => (
            <motion.a
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`cursor-pointer transition-colors duration-200 animated-underline ${
                activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-muted-foreground hover:text-foreground p-2 cosmic-border rounded-md">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent className="glass border-l border-white/10">
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-lg cursor-pointer hover:text-primary transition-colors duration-200 ${
                      activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      {/* Scroll progress indicator */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent" style={{ width: `${scrollProgress}%` }} />
    </header>
  );
}