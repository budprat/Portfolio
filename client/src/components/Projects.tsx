import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ExternalLink, Filter } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// Project type definition
type Project = {
  title: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
  category: string;
};

export default function Projects() {
  // Define the projects data with added categories
  const projectsData: Project[] = [
    {
      title: "Terrabyte HPDA Platform",
      period: "2021-2023",
      description: "High-performance distributed computing framework for processing satellite data, funded by the German Government.",
      achievements: [
        "Engineered framework processing 10TB+ of satellite data daily",
        "Reduced computation time by 35% through optimization"
      ],
      technologies: ["Python", "Dask", "Kubernetes", "ODC", "xarray", "GDAL"],
      imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      projectUrl: "https://www.dlr.de/en/dw/research-transfer/hpda/high-performance-data-analysis",
      category: "Data Engineering"
    },
    {
      title: "openEO (EU Horizon 2020)",
      period: "2018-2021",
      description: "Standardized API for satellite data processing, adopted by major European data providers.",
      achievements: [
        "Led backend API development adopted by 8 major European data providers",
        "Implemented STAC-compliant metadata API, resulting in 60% faster data discovery"
      ],
      technologies: ["Python", "REST API", "Docker", "Kubernetes", "STAC", "Dask"],
      imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      projectUrl: "https://github.com/Open-EO/openeo-spring-driver",
      category: "API Development"
    },
    {
      title: "EO Data Pipeline Automation",
      period: "2017-2019",
      description: "Automated Earth Observation data processing pipeline reducing manual intervention by 85%.",
      achievements: [
        "Created fully automated processing chain for satellite imagery",
        "Developed cloud-based architecture processing 5TB of data daily"
      ],
      technologies: ["Python", "AWS", "Docker", "Machine Learning", "GIS"],
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      projectUrl: "#",
      category: "Cloud Computing"
    }
  ];

  // State for filtered projects
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  
  // State for active filters
  const [activeFilters, setActiveFilters] = useState({
    technology: "",
    category: "",
    period: ""
  });

  // Extract unique technologies, categories, and time periods
  const allTechnologies = Array.from(
    new Set(projectsData.flatMap(project => project.technologies))
  ).sort();
  
  const allCategories = Array.from(
    new Set(projectsData.map(project => project.category))
  ).sort();
  
  const allPeriods = Array.from(
    new Set(projectsData.map(project => project.period))
  ).sort();

  // Filter function
  useEffect(() => {
    let result = projectsData;
    
    if (activeFilters.technology) {
      result = result.filter(project => 
        project.technologies.includes(activeFilters.technology)
      );
    }
    
    if (activeFilters.category) {
      result = result.filter(project => 
        project.category === activeFilters.category
      );
    }
    
    if (activeFilters.period) {
      result = result.filter(project => 
        project.period === activeFilters.period
      );
    }
    
    setFilteredProjects(result);
  }, [activeFilters]);

  // Reset filters
  const resetFilters = () => {
    setActiveFilters({
      technology: "",
      category: "",
      period: ""
    });
  };

  return (
    <section id="projects" className="bg-white dark:bg-gray-800 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8 reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Delivering innovative solutions that make a difference.
          </p>
        </motion.div>
        
        {/* Filter controls */}
        <motion.div 
          className="mb-12 reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
            <div className="flex flex-wrap items-center mb-4">
              <Filter className="mr-2 h-5 w-5 text-primary dark:text-primary-foreground" />
              <h3 className="text-lg font-semibold">Filter Projects</h3>
              {(activeFilters.technology || activeFilters.category || activeFilters.period) && (
                <Button 
                  variant="link" 
                  onClick={resetFilters}
                  className="ml-auto text-sm"
                >
                  Clear Filters
                </Button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Technology filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Technology</label>
                <select 
                  className="w-full px-3 py-2 bg-white dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                  value={activeFilters.technology}
                  onChange={(e) => setActiveFilters({...activeFilters, technology: e.target.value})}
                >
                  <option value="">All Technologies</option>
                  {allTechnologies.map(tech => (
                    <option key={tech} value={tech}>{tech}</option>
                  ))}
                </select>
              </div>
              
              {/* Category filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select 
                  className="w-full px-3 py-2 bg-white dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                  value={activeFilters.category}
                  onChange={(e) => setActiveFilters({...activeFilters, category: e.target.value})}
                >
                  <option value="">All Categories</option>
                  {allCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              {/* Time Period filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Time Period</label>
                <select 
                  className="w-full px-3 py-2 bg-white dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                  value={activeFilters.period}
                  onChange={(e) => setActiveFilters({...activeFilters, period: e.target.value})}
                >
                  <option value="">All Time Periods</option>
                  {allPeriods.map(period => (
                    <option key={period} value={period}>{period}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Projects grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={index}
                className="reveal"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full bg-gray-50 dark:bg-gray-700 hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-64 object-cover" 
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-white dark:bg-primary-foreground dark:text-gray-900">
                        {project.period}
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-primary dark:text-primary-foreground">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2 mb-4">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex">
                            <Check className="h-5 w-5 text-green-600 dark:text-green-400 mt-1 mr-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge 
                          key={i} 
                          variant="outline" 
                          className={`bg-gray-200 dark:bg-gray-600 cursor-pointer hover:bg-primary/20 ${
                            activeFilters.technology === tech ? "ring-2 ring-primary" : ""
                          }`}
                          onClick={() => setActiveFilters({...activeFilters, technology: tech === activeFilters.technology ? "" : tech})}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="px-6 pb-6 pt-0">
                    <a 
                      href={project.projectUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-primary dark:text-primary-foreground hover:underline"
                    >
                      View Project <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <p className="text-xl mb-4">No projects match your selected filters.</p>
            <Button onClick={resetFilters}>View All Projects</Button>
          </div>
        )}
      </div>
    </section>
  );
}
