import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const contactInfo = [
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
    <section id="contact" className="bg-background py-8 md:py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8 reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can work together on your next project.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="reveal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card shadow-md border border-border">
              <CardContent className="p-6 pt-6">
                <div className="flex flex-col items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                    alt="Modern tech workspace" 
                    className="rounded-2xl shadow-xl w-full h-auto mb-8" 
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-4">
                    {contactInfo.map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-150px" }}
                        transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                      >
                        <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                          {item.icon}
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                          <a 
                            href={item.link} 
                            target={item.title === "LinkedIn" || item.title === "GitHub" ? "_blank" : undefined}
                            rel={item.title === "LinkedIn" || item.title === "GitHub" ? "noopener noreferrer" : undefined}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        </div>
                      </motion.div>
                    ))}
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