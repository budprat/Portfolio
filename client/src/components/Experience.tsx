import { motion } from "framer-motion";
import { ChevronRight, Building2, Briefcase } from "lucide-react";

export default function Experience() {
  // Work experience data
  const experiences = [
    {
      id: 1,
      title: "Senior Data Engineer",
      company: "SpaceVision Analytics",
      period: "2022 - Present",
      description: "Leading the development of Earth Observation data pipelines, processing terabytes of satellite imagery daily for environmental monitoring and analysis.",
      highlights: [
        "Architected and implemented a distributed processing system for satellite imagery, reducing processing time by 60%",
        "Optimized cloud infrastructure resulting in 40% cost reduction while maintaining performance",
        "Designed API for seamless integration with third-party applications, increasing platform adoption by 35%",
        "Mentored junior engineers and established best practices for data engineering workflows"
      ],
      technologies: ["Python", "AWS", "Kubernetes", "Airflow", "Docker", "PostgreSQL"]
    },
    {
      id: 2,
      title: "Data Engineer",
      company: "GeoInsights Labs",
      period: "2020 - 2022",
      description: "Developed and maintained geospatial data processing systems for agriculture and climate monitoring applications.",
      highlights: [
        "Built real-time processing pipeline for meteorological data from multiple sources",
        "Implemented cloud-based storage solution for petabytes of historical Earth observation data",
        "Created automated data quality verification system, reducing manual checks by 90%",
        "Collaborated with data scientists to optimize ML models for geospatial analytics"
      ],
      technologies: ["Python", "GCP", "Apache Spark", "Kafka", "Docker", "MongoDB"]
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "TechNova Systems",
      period: "2018 - 2020",
      description: "Developed backend systems and RESTful APIs for web applications in the environmental monitoring sector.",
      highlights: [
        "Designed and built scalable APIs servicing 1M+ requests daily",
        "Implemented continuous integration/deployment pipeline reducing deployment time by 70%",
        "Collaborated with frontend team to integrate data visualization components",
        "Optimized database queries resulting in 50% improved application response time"
      ],
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "AWS", "Docker"]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text" style={{ 
            background: "linear-gradient(to right, #f8fafc, #a5b4fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A chronicle of my professional journey building scalable data systems and cloud-native applications.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="space-y-12 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-2 bottom-10 w-[1px] bg-gradient-to-b from-primary via-secondary to-accent opacity-30 hidden md:block"></div>

            {experiences.map((experience, index) => (
              <motion.div 
                key={experience.id}
                className="glass cosmic-border rounded-lg relative"
                variants={itemVariants}
              >
                {/* Timeline dot for desktop */}
                <div className="absolute left-8 -top-2 w-4 h-4 rounded-full bg-background hidden md:block">
                  <div className={`absolute inset-0.5 rounded-full ${
                    index === 0 ? 'bg-primary cosmic-pulse' : 
                    index === 1 ? 'bg-secondary cosmic-pulse' : 
                    'bg-accent cosmic-pulse'
                  }`}></div>
                </div>

                <div className="md:ml-16 p-6">
                  <div className="flex flex-col md:flex-row md:items-center mb-4 gap-2 md:gap-6">
                    <div className={`rounded-full h-10 w-10 flex items-center justify-center ${
                      index === 0 ? 'bg-primary/10' : 
                      index === 1 ? 'bg-secondary/10' : 
                      'bg-accent/10'
                    }`}>
                      {index === 0 ? (
                        <Briefcase className={`h-5 w-5 text-primary`} />
                      ) : (
                        <Building2 className={`h-5 w-5 ${index === 1 ? 'text-secondary' : 'text-accent'}`} />
                      )}
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-foreground">{experience.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
                        <span className="text-muted-foreground">{experience.company}</span>
                        <span className="hidden sm:block text-muted-foreground">•</span>
                        <span className={`${
                          index === 0 ? 'text-primary' : 
                          index === 1 ? 'text-secondary' : 
                          'text-accent'
                        }`}>{experience.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="mb-4 text-muted-foreground">{experience.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-foreground">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {experience.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight className={`h-5 w-5 mr-2 mt-0.5 flex-shrink-0 ${
                            index === 0 ? 'text-primary' : 
                            index === 1 ? 'text-secondary' : 
                            'text-accent'
                          }`} />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className={`text-xs px-2.5 py-1 rounded-full bg-background/40 ${
                          index === 0 ? 'text-primary' : 
                          index === 1 ? 'text-secondary' : 
                          'text-accent'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Orbital accent rings */}
      <div className="absolute top-1/3 right-0 w-80 h-80 border border-accent/10 rounded-full opacity-20 -z-10" 
        style={{ transform: 'translateX(40%) rotate(-15deg)' }}></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 border border-primary/10 rounded-full opacity-20 -z-10" 
        style={{ transform: 'translateX(-30%) rotate(15deg)' }}></div>
    </section>
  );
}