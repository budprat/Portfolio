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
    <section id="experience" className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8 reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                      <h3 className="text-xl font-bold text-primary dark:text-primary-foreground">
                        {experience.title}
                      </h3>
                      <Badge variant="outline" className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                        {experience.period}
                      </Badge>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-2">
                      {experience.company}, {experience.location}
                    </h4>
                    
                    <ul className="space-y-3 mt-4">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex">
                          <Rocket className="h-5 w-5 text-green-600 dark:text-green-400 mt-1 mr-3 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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
          background-color: #e5e7eb;
          top: 0;
          bottom: 0;
          left: 20px;
          margin-left: -1px;
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 20px;
        }
        
        .timeline-dot {
          position: absolute;
          width: 16px;
          height: 16px;
          left: 20px;
          border-radius: 50%;
          z-index: 1;
          transform: translateX(-50%);
        }
      ` }} />
    </section>
  );
}
