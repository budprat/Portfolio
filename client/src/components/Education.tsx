import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Master of Science in Geoinformatics",
      institution: "University of Muenster",
      location: "Germany",
      year: "2016"
    },
    {
      degree: "Master of Technology in Geomatics Engineering",
      institution: "Indian Institute of Technology, Roorkee",
      location: "India",
      year: "2012"
    },
    {
      degree: "Bachelor of Engineering in Electronics and Communication",
      institution: "Panjab University",
      location: "Chandigarh, India",
      year: "2009"
    }
  ];

  const certifications = [
    {
      name: "Gen AI Cohort",
      institution: "Bangalore",
      year: "2025",
      description: "Advanced training in generative AI applications, focusing on LLM fine-tuning, prompt engineering, and AI system design."
    }
  ];

  return (
    <section id="education" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Education & Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through continuous learning.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education */}
          <motion.div 
            className="reveal"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Academic Background
            </h3>
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-card border border-border shadow-md">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-foreground">{item.degree}</h4>
                      <p className="text-muted-foreground my-2">
                        {item.institution}, {item.location}
                      </p>
                      <p className="text-sm text-muted-foreground/70">{item.year}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Certifications */}
          <motion.div 
            className="reveal"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Certifications & Training
            </h3>
            
            <div className="space-y-8">
              {certifications.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-card border border-border shadow-md">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-foreground">{item.name}</h4>
                      <p className="text-muted-foreground my-2">
                        {item.institution}
                      </p>
                      <p className="text-sm text-muted-foreground/70">{item.year}</p>
                      <p className="mt-3 text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-card border border-border shadow-md h-full">
                  <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                    <Award className="h-16 w-16 text-primary mb-4" />
                    <p className="text-center text-muted-foreground">
                      Continuously expanding my expertise through specialized courses and hands-on projects in AI engineering, geospatial data science, and cloud architecture.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
