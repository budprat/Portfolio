import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Experience() {
  const experiences = [
    {
      title: "Developer",
      company: "German Aerospace Center (DLR)",
      location: "Munich, Germany",
      period: "March 2021 - December 2023",
      achievements: [
        "Engineered openEO Python API for satellite data processing, reducing processing time by 40% across 15TB+ of Sentinel-2 data.",
        "Architected distributed computing infrastructure for the Terrabyte HPDA platform, enabling parallel processing of 1000+ satellite scenes.",
        "Implemented CI/CD workflows with Docker and Kubernetes, decreasing deployment time by 50% and improving service reliability by 30%."
      ],
      skills: ["Python", "Dask", "Docker", "Kubernetes", "API Development"]
    },
    {
      title: "Researcher",
      company: "Institute for Earth Observation, EURAC Research",
      location: "Bozen, Italy",
      period: "March 2018 - March 2021",
      achievements: [
        "Developed Sentinel-2/UAV datacube ingestion workflows, improving data access time by 35% using OpenDataCube.",
        "Created and maintained openEO WCPS driver API, enabling standardized access to 5+ satellite data providers across Europe.",
        "Optimized containerized deployment of geospatial data processing services, reducing infrastructure costs by 25%."
      ],
      skills: ["OpenDataCube", "Python", "REST API", "Docker", "Geospatial Data"]
    }
  ];

  return (
    <section id="experience" className="py-8 md:py-12 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8 reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey building innovative tech solutions.
          </p>
        </motion.div>
        
        <div className="timeline-container relative max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div 
              key={index}
              className="timeline-item reveal mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-dot bg-primary"></div>
              <div className="timeline-content ml-10">
                <div className="bg-background/40 backdrop-blur-md border border-white/10 rounded-lg shadow-lg overflow-hidden relative">
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-70"></div>
                  <div className="p-6">
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                      <h3 className="text-xl font-bold text-primary relative inline-block">
                        {experience.title}
                      </h3>
                      <div className="date-badge">
                        {experience.period}
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-2 text-foreground">
                      {experience.company}, {experience.location}
                    </h4>
                    
                    <ul className="space-y-3 mt-4">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex">
                          <Rocket className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                          <span className="text-foreground/90">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.skills.map((skill, i) => (
                        <Badge key={i} className="bg-background/50 text-foreground/90 border border-white/10 px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .timeline-container::after {
          content: '';
          position: absolute;
          width: 2px;
          background: linear-gradient(to bottom, 
            rgba(78, 205, 196, 0.8),
            rgba(68, 49, 141, 0.8),
            rgba(78, 205, 196, 0.8));
          top: 0;
          bottom: 0;
          left: 20px;
          margin-left: -1px;
          box-shadow: 0 0 8px rgba(78, 205, 196, 0.4);
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 30px;
        }
        
        .timeline-dot {
          position: absolute;
          width: 18px;
          height: 18px;
          left: 20px;
          border-radius: 50%;
          z-index: 1;
          transform: translateX(-50%);
          box-shadow: 0 0 10px rgba(78, 205, 196, 0.6);
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
      ` }} />
    </section>
  );
}
