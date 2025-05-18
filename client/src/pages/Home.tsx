import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Publications from "@/components/Publications";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Set title and meta description for SEO
    document.title = "Prateek Budhwar | Data Engineer & AI Enthusiast";
    
    // Create meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    
    // Set meta description content
    metaDescription.setAttribute('content', 
      'Prateek Budhwar - Data Engineer & AI Enthusiast specializing in Earth Observation data processing pipelines and cloud-native applications');
    
    // Scroll reveal animation
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal');
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        }
      }
    };
    
    // Initial check
    handleScroll();
    
    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Publications />
      </main>
      <Footer />
    </div>
  );
}
