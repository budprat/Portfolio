import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar } from "lucide-react";

// Project data
const projects = [
  {
    id: 1,
    title: "Earth Observation Pipeline",
    description: "Built scalable data processing pipeline for satellite imagery, optimizing workflows for large-scale datasets.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
    technologies: ["Python", "AWS", "Docker", "GeoJSON"],
    category: "Data Engineering",
    year: 2022,
    github: "https://github.com/budprat/earth-observation-pipeline",
    live: "https://earth-observation-pipeline.demo",
  },
  {
    id: 2,
    title: "Geospatial Analytics Platform",
    description: "Developed a cloud-based platform for analyzing geospatial data and generating insights for precision agriculture.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
    category: "Full Stack",
    year: 2023,
    github: "https://github.com/budprat/geospatial-analytics",
    live: "https://geospatial-analytics.demo",
  },
  {
    id: 3,
    title: "Satellite Image Classifier",
    description: "Created a machine learning model to classify satellite imagery for land use and environmental monitoring.",
    image: "https://images.unsplash.com/photo-1518770356366-65372ab15d99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    technologies: ["Python", "TensorFlow", "Keras", "scikit-learn"],
    category: "Machine Learning",
    year: 2022,
    github: "https://github.com/budprat/satellite-classifier",
    live: "https://satellite-classifier.demo",
  },
  {
    id: 4,
    title: "Climate Data API",
    description: "Developed RESTful API for accessing and querying historical climate data from multiple sources.",
    image: "https://images.unsplash.com/photo-1580716917600-604be92abcc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2538&q=80",
    technologies: ["FastAPI", "MongoDB", "Redis", "Docker"],
    category: "Backend",
    year: 2023,
    github: "https://github.com/budprat/climate-data-api",
    live: "https://climate-data-api.demo",
  },
  {
    id: 5,
    title: "Notion AI Template Forge",
    description: "AI-powered app generating custom Notion templates based on user interests and preferred styles.",
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2429&q=80",
    technologies: ["React", "TypeScript", "Node.js", "AI"],
    category: "AI",
    year: 2023,
    github: "https://github.com/budprat/notion-ai-template-forge",
    live: "https://notion-ai-template-forge.demo",
  },
  {
    id: 6,
    title: "Delhi Date Eats Guide",
    description: "A curated guide for romantic dining spots in Delhi with recommendations for date nights.",
    image: "https://images.unsplash.com/photo-1512699355324-f07e3106dae5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2429&q=80",
    technologies: ["React", "JavaScript", "CSS"],
    category: "Frontend",
    year: 2022,
    github: "https://github.com/budprat/delhi-date-eats-guide",
    live: "https://delhi-date-eats-guide.demo",
  },
];

export default function Projects() {
  // Filter state
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeYear, setActiveYear] = useState<string | null>(null);

  // Get unique technologies, categories, years for filters
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();
  
  const allCategories = Array.from(
    new Set(projects.map(project => project.category))
  ).sort();
  
  const allYears = Array.from(
    new Set(projects.map(project => project.year.toString()))
  ).sort((a, b) => parseInt(b) - parseInt(a));

  // Handle filter clicks
  const handleTechFilter = (tech: string) => {
    setActiveFilter(activeFilter === tech ? null : tech);
  };
  
  const handleCategoryFilter = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };
  
  const handleYearFilter = (year: string) => {
    setActiveYear(activeYear === year ? null : year);
  };

  // Filter projects based on selected filters
  const filteredProjects = projects.filter(project => {
    const techMatch = !activeFilter || project.technologies.includes(activeFilter);
    const categoryMatch = !activeCategory || project.category === activeCategory;
    const yearMatch = !activeYear || project.year.toString() === activeYear;
    return techMatch && categoryMatch && yearMatch;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text" style={{ 
            background: "linear-gradient(to right, #f8fafc, #a5b4fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my data engineering and AI projects, highlighting skills in distributed computing, geospatial analytics, and cloud infrastructure.
          </p>
        </motion.div>

        {/* Filter controls */}
        <div className="mb-12 space-y-6">
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-sm text-muted-foreground mr-2">Filter by Technology:</span>
            {allTechnologies.map(tech => (
              <Button
                key={tech}
                variant={activeFilter === tech ? "default" : "outline"}
                size="sm"
                onClick={() => handleTechFilter(tech)}
                className={`rounded-full ${
                  activeFilter === tech 
                    ? 'bg-primary text-white cosmic-glow' 
                    : 'bg-background/40 border-white/10 hover:bg-primary/20 hover:text-primary'
                }`}
              >
                {tech}
              </Button>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-wrap items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm text-muted-foreground mr-2">Filter by Category:</span>
            {allCategories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryFilter(category)}
                className={`rounded-full ${
                  activeCategory === category 
                    ? 'bg-secondary text-white cosmic-glow' 
                    : 'bg-background/40 border-white/10 hover:bg-secondary/20 hover:text-secondary'
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-sm text-muted-foreground mr-2">Filter by Year:</span>
            {allYears.map(year => (
              <Button
                key={year}
                variant={activeYear === year ? "default" : "outline"}
                size="sm"
                onClick={() => handleYearFilter(year)}
                className={`rounded-full ${
                  activeYear === year 
                    ? 'bg-accent text-white cosmic-glow' 
                    : 'bg-background/40 border-white/10 hover:bg-accent/20 hover:text-accent'
                }`}
              >
                {year}
              </Button>
            ))}
          </motion.div>
        </div>

        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.map(project => (
            <motion.div 
              key={project.id}
              className="cosmic-border glass rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] group"
              variants={itemVariants}
            >
              {/* Project image with overlay */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                />
                
                <div className="absolute top-3 right-3 z-20 flex items-center space-x-1 bg-background/50 backdrop-blur-sm rounded-full px-2.5 py-1">
                  <Calendar className="h-3.5 w-3.5 text-accent mr-1" />
                  <span className="text-xs">{project.year}</span>
                </div>
              </div>
              
              {/* Project content */}
              <div className="p-5 relative">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  
                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map(tech => (
                      <Badge 
                        key={tech} 
                        variant="outline"
                        className={`text-xs font-normal bg-background/60 border-white/10 ${
                          activeFilter === tech ? 'border-primary text-primary' : ''
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex justify-between items-center mt-6">
                    <Badge
                      className={`bg-background/50 text-xs font-normal ${
                        activeCategory === project.category 
                          ? 'border-secondary text-secondary' 
                          : 'text-muted-foreground'
                      }`}
                    >
                      {project.category}
                    </Badge>
                    
                    <div className="flex space-x-3">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-all duration-200"
                        aria-label={`View ${project.title} GitHub repository`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-all duration-200"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Orbital accent rings */}
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-primary/10 rounded-full opacity-20 -z-10" 
        style={{ transform: 'translateX(30%) rotate(-15deg)' }}></div>
      <div className="absolute top-1/3 left-1/4 w-80 h-80 border border-accent/10 rounded-full opacity-20 -z-10" 
        style={{ transform: 'translateX(-20%) rotate(25deg)' }}></div>
    </section>
  );
}