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

  return (
    <section id="projects" className="bg-white dark:bg-gray-800 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 reveal"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="reveal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden h-full bg-gray-50 dark:bg-gray-700 project-card">
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
                      <Badge key={i} variant="outline" className="bg-gray-200 dark:bg-gray-600">
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
      </div>
    </section>
  );
}
