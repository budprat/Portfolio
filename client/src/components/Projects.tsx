import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
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
      projectUrl: "https://www.dlr.de/en/dw/research-transfer/hpda/high-performance-data-analysis"
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
      projectUrl: "https://github.com/Open-EO/openeo-spring-driver"
    }
  ];

  return (
    <section id="projects" className="bg-background py-8 md:py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8 reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering innovative solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="reveal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="overflow-hidden h-full bg-card shadow-md hover:shadow-lg transition-all duration-300 group border border-border">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {project.period}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4 transform transition-all duration-300 group-hover:translate-y-[-2px]">
                    <h4 className="font-semibold mb-2 text-primary">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2 mb-4">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex">
                          <Check className="h-5 w-5 text-secondary mt-1 mr-2 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                          <span className="text-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="bg-muted text-foreground hover:bg-primary/20 hover:text-primary border border-border/50 transition-colors duration-300 cursor-pointer"
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
                    className="inline-flex items-center text-primary group-hover:text-primary/80 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full"
                  >
                    View Project <ExternalLink className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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