import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      specialization: "Data Science & Machine Learning",
      institution: "Delhi Technological University",
      location: "New Delhi, India",
      period: "2016 - 2018",
      description: "Specialized in machine learning algorithms and large-scale data processing techniques with a focus on geospatial applications.",
      achievements: [
        "Graduated with Distinction (3.8/4.0 GPA)",
        "Research thesis on 'Optimizing Data Pipelines for Earth Observation Analysis'",
        "Published paper in International Journal of Geoinformatics"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "University of Delhi",
      location: "New Delhi, India",
      period: "2012 - 2016",
      description: "Developed a strong foundation in software engineering principles, algorithms, and distributed systems.",
      achievements: [
        "Cumulative GPA: 3.7/4.0",
        "Capstone Project: 'Cloud-based Geospatial Data Processing Framework'",
        "National Mathematics Olympiad Finalist"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Data Analytics - Specialty",
      issuer: "Amazon Web Services",
      date: "2022",
      credentialId: "AWS-DAT-12345"
    },
    {
      id: 2,
      name: "Google Professional Data Engineer",
      issuer: "Google Cloud",
      date: "2021",
      credentialId: "GCP-PDE-67890"
    },
    {
      id: 3,
      name: "Microsoft Certified: Azure Data Engineer Associate",
      issuer: "Microsoft",
      date: "2020",
      credentialId: "MSFT-AZ-24680"
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
    <section id="education" className="py-16 md:py-24 relative overflow-hidden">
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
          }}>Education & Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications in data engineering and cloud technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Education Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-8 w-[1px] bg-gradient-to-b from-primary to-secondary opacity-30 hidden md:block"></div>
              
              <div className="space-y-12">
                {educationData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="relative"
                    variants={itemVariants}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-background hidden md:block">
                      <div className="absolute inset-0.5 rounded-full bg-primary cosmic-pulse"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="glass cosmic-border rounded-lg p-6 md:ml-12">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-primary/10 rounded-full p-2 hidden sm:flex">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{item.degree}</h3>
                          {item.specialization && (
                            <p className="text-primary font-medium">{item.specialization}</p>
                          )}
                          <div className="flex flex-col sm:flex-row sm:items-center text-sm gap-1 sm:gap-3 mt-1">
                            <span className="text-muted-foreground">{item.institution}</span>
                            <span className="hidden sm:block text-muted-foreground">•</span>
                            <span className="text-muted-foreground">{item.location}</span>
                          </div>
                          <div className="flex items-center mt-1 text-sm text-primary">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            <span>{item.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{item.description}</p>

                      {item.achievements && (
                        <div className="space-y-2">
                          <h4 className="text-foreground font-medium">Achievements:</h4>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span className="text-muted-foreground text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications Column */}
          <div>
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground">Professional Certifications</h3>
              <p className="text-muted-foreground">
                Industry-recognized certifications validating my expertise in cloud technologies and data engineering.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  className="glass cosmic-border rounded-lg p-5 transition-all duration-300 hover:scale-[1.02]"
                  variants={itemVariants}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 rounded-full p-2 mt-1">
                      <Award className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{cert.name}</h4>
                      <p className="text-muted-foreground">{cert.issuer}</p>
                      <div className="flex items-center mt-1 text-sm text-accent">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span>Issued {cert.date}</span>
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">
                        Credential ID: {cert.credentialId}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Section */}
            <motion.div 
              className="mt-12 glass cosmic-border rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-6 text-foreground">Technical Skills</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">Data Engineering</span>
                    <span className="text-sm text-muted-foreground">95%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "95%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">Cloud Architecture</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "90%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">Machine Learning</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">API Development</span>
                    <span className="text-sm text-muted-foreground">88%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "88%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">DevOps</span>
                    <span className="text-sm text-muted-foreground">82%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "82%" }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Orbital accent rings */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 border border-secondary/10 rounded-full opacity-20 -z-10" 
        style={{ transform: 'translateX(-40%) rotate(25deg)' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 border border-primary/10 rounded-full opacity-20 -z-10" 
        style={{ transform: 'translateX(30%) rotate(-15deg)' }}></div>
    </section>
  );
}