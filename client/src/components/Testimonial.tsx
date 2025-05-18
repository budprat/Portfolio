import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section id="testimonial" className="py-8 md:py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8 reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Testimonial</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What colleagues say about my work.
          </p>
        </motion.div>
        
        <motion.div
          className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm p-8 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          whileHover={{ 
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.2 }
          }}
        >
          <div className="absolute -top-5 left-8 text-primary opacity-80">
            <Quote size={48} strokeWidth={1} />
          </div>
          
          <div className="mt-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              Mr. Budhwar worked on various projects, particularly on the following tasks:
            </p>
            
            <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>Conception, requirements analysis, and design of geodata services for raster data (data cubes)</li>
              <li>Analysis, testing, and evaluation of various open source software products for managing geo-raster data in online access services</li>
              <li>Development of workflows for the systematic transformation and integration of geo-raster data products into data cubes</li>
              <li>Deployment of software and configurations for geo-raster data services in virtualized system environments and cloud platforms</li>
              <li>Development, documentation, and presentation of application examples for scientific users of data cubes</li>
            </ul>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The languages, techniques, and tools used included Python, Java, Bash, Git/GitLab, Linux, Postgres/PostGIS, Jupyter, OpenDataCube, DAPA, Xarray, DASK, OpenEO, and STAC.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Mr. Budhwar always performed his duties with great dedication and personal commitment. He has excellent specialist knowledge, can quickly grasp tasks, and finds effective solutions that he successfully implements in practice. Mr. Budhwar worked very independently, goal-oriented, and autonomously.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              Mr. Budhwar always fulfilled the tasks assigned to him to our complete satisfaction. His behavior towards superiors, employees, and project partners was always impeccable. His collegial, calm demeanor and openness were always highly valued by all colleagues.
            </p>
            
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  SD
                </div>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-lg">Dr. Stefan Dech</h4>
                <p className="text-gray-600">Director of the German Remote Sensing Data Center, DLR, German Space Agency</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}