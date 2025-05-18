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
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">About Me</h2>
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
              className="text-lg mb-6 text-gray-700 text-center"
              variants={itemVariants}
            >
              I'm a results-oriented Data Engineer with 5+ years of experience in building scalable Earth Observation data processing pipelines, systems, and cloud-native applications.
            </motion.p>
            
            <motion.p 
              className="text-lg mb-6 text-gray-700 text-center"
              variants={itemVariants}
            >
              With a proven track record of architecting distributed computing frameworks and implementing scalable solutions for large-volume geospatial data processing, I've consistently optimized workflows for large-scale satellite datasets.
            </motion.p>
            
            <motion.p 
              className="text-lg mb-8 text-gray-700 text-center"
              variants={itemVariants}
            >
              I'm now transitioning my extensive data engineering expertise toward AI-focused roles, eager to contribute to innovative machine learning applications.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={itemVariants}
            >
              <div>
                <h4 className="font-bold mb-3 text-primary">Expertise</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Data Pipeline Architecture</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Cloud Infrastructure</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Geospatial Analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>API Development</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3 text-primary">Transitioning To</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 text-green-600 mr-2" />
                    <span>AI Engineering</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 text-green-600 mr-2" />
                    <span>Model Finetuning</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 text-green-600 mr-2" />
                    <span>LLM Development</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 text-green-600 mr-2" />
                    <span>AI Systems</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
