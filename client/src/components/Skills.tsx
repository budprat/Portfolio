import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skillCategories = [
    {
      name: "Programming",
      percentage: 95,
      skills: ["Python", "Shell Scripting", "GDAL", "rasterio", "xarray"]
    },
    {
      name: "AI Tools & Skills",
      percentage: 85,
      skills: ["LLMs", "Finetuning", "n8n", "ComfyUI", "LORAs"]
    },
    {
      name: "Cloud/DevOps",
      percentage: 90,
      skills: ["Docker", "Kubernetes", "CI/CD", "Git"]
    },
    {
      name: "Data Engineering",
      percentage: 95,
      skills: ["RESTful APIs", "openEO", "Datacubes", "STAC", "Dask", "OpenDataCube"]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to solve complex problems.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1 reveal space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{category.name}</span>
                  <span>{category.percentage}%</span>
                </div>
                <Progress value={category.percentage} className="h-2.5 mb-2" />
                <div className="mt-2 flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="text-sm bg-gray-100 dark:bg-gray-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 reveal"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Data visualization abstract" 
              className="rounded-2xl shadow-xl w-full h-auto" 
            />
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progressAnimation {
          from { width: 0; }
        }
        
        .progress-bar {
          animation: progressAnimation 1.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
