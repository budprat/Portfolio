import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll event to track active section and header transparency
  useEffect(() => {
    const handleScroll = () => {
      // Update header transparency
      setIsScrolled(window.scrollY > 10);

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
      isScrolled ? 'backdrop-blur-sm bg-white/90 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a 
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold font-heading text-primary flex items-center gap-2 cursor-pointer"
        >
          <span>Prateek</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 font-medium">
          {navItems.map((item) => (
            <a
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`cursor-pointer hover:text-primary transition-colors duration-200 ${
                activeSection === item.id ? 'text-primary' : 'text-gray-600'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}