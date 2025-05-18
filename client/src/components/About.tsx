import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export default function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 glow-text" style={{ 
            background: "linear-gradient(to right, #f8fafc, #a5b4fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>About Me</h2>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="reveal"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p 
              className="text-lg mb-6 text-muted-foreground text-center"
              variants={itemVariants}
            >
              I'm a results-oriented Data Engineer with 5+ years of experience in building scalable Earth Observation data processing pipelines, systems, and cloud-native applications.
            </motion.p>
            
            <motion.p 
              className="text-lg mb-6 text-muted-foreground text-center"
              variants={itemVariants}
            >
              With a proven track record of architecting distributed computing frameworks and implementing scalable solutions for large-volume geospatial data processing, I've consistently optimized workflows for large-scale satellite datasets.
            </motion.p>
            
            <motion.p 
              className="text-lg mb-8 text-muted-foreground text-center"
              variants={itemVariants}
            >
              I'm now transitioning my extensive data engineering expertise toward AI-focused roles, eager to contribute to innovative machine learning applications.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={itemVariants}
            >
              <div className="glass cosmic-border rounded-lg p-6 transition-transform duration-300 hover:scale-[1.02]">
                <h4 className="font-bold mb-3 text-primary glow-text">Expertise</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">Data Pipeline Architecture</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">Cloud Infrastructure</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">Geospatial Analytics</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">API Development</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass cosmic-border rounded-lg p-6 transition-transform duration-300 hover:scale-[1.02]">
                <h4 className="font-bold mb-3 text-accent glow-text">Transitioning To</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                      <ArrowRight className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-foreground">AI Engineering</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                      <ArrowRight className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-foreground">Model Finetuning</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                      <ArrowRight className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-foreground">LLM Development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                      <ArrowRight className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-foreground">AI Systems</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Orbital accent rings */}
      <div className="absolute top-[30%] right-0 w-96 h-96 border border-primary/10 rounded-full opacity-20 -z-10" 
        style={{ transform: 'translateX(40%) rotate(20deg)' }}></div>
      <div className="absolute bottom-[20%] left-0 w-64 h-64 border border-accent/10 rounded-full opacity-20 -z-10" 
        style={{ transform: 'translateX(-30%) rotate(-15deg)' }}></div>
    </section>
  );
}