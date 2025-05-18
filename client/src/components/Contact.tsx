import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "p.budhwar@gmail.com",
      link: "mailto:p.budhwar@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+91 9350569323",
      link: "tel:+919350569323"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/prateek-budhwar-212a92314/"
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: "GitHub",
      value: "github.com/budprat",
      link: "https://github.com/budprat"
    }
  ];

  return (
    <section id="contact" className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8 reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how we can work together on your next project.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div 
            className="reveal"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern tech workspace" 
              className="rounded-2xl shadow-xl w-full h-auto" 
            />
            
            <div className="mt-8 space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                >
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    {method.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">{method.title}</h4>
                    <a 
                      href={method.link} 
                      target={method.title === "LinkedIn" || method.title === "GitHub" ? "_blank" : undefined}
                      rel={method.title === "LinkedIn" || method.title === "GitHub" ? "noopener noreferrer" : undefined}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {method.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="reveal"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <p className="text-gray-700">
                    I'm always interested in new opportunities and collaborations. Feel free to reach out directly 
                    through any of the contact methods listed here.
                  </p>
                  
                  <div className="bg-primary/5 p-5 rounded-lg border border-primary/10">
                    <h4 className="font-medium text-lg text-primary mb-3">Contact Me Directly</h4>
                    <div className="space-y-2">
                      <a 
                        href="mailto:p.budhwar@gmail.com" 
                        className="flex items-center text-gray-700 hover:text-primary transition-colors"
                      >
                        <Mail className="h-5 w-5 mr-3" />
                        <span>p.budhwar@gmail.com</span>
                      </a>
                      <a 
                        href="tel:+919350569323" 
                        className="flex items-center text-gray-700 hover:text-primary transition-colors"
                      >
                        <Phone className="h-5 w-5 mr-3" />
                        <span>+91 9350569323</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
                    <a 
                      href="https://www.linkedin.com/in/prateek-budhwar-212a92314/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5] py-3 px-4 rounded flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="h-5 w-5 mr-2" />
                      <span>Connect on LinkedIn</span>
                    </a>
                    <a 
                      href="https://github.com/budprat" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-gray-800/10 hover:bg-gray-800/20 text-gray-800 py-3 px-4 rounded flex items-center justify-center transition-colors"
                    >
                      <Github className="h-5 w-5 mr-2" />
                      <span>Follow on GitHub</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}