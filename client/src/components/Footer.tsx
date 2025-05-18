import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold flex items-center gap-2">
              <span>Prateek Budhwar</span>
            </div>
            <p className="mt-2 text-gray-500">Data Engineer & AI Enthusiast</p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/budprat" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-primary text-xl transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/prateek-budhwar-212a92314/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-primary text-xl transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:p.budhwar@gmail.com" 
              className="text-gray-500 hover:text-primary text-xl transition-colors duration-200"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Prateek Budhwar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
