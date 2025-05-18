import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Phone, Send } from "lucide-react";

// Form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // For now, we'll just simulate a successful submission
      // In the future, we can connect to a real API endpoint
      setTimeout(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        
        form.reset();
        setIsSubmitting(false);
      }, 1500);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again later.",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
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
          }}>Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Have a project in mind or want to discuss AI and Data Engineering opportunities? Feel free to reach out.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass cosmic-border rounded-lg p-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Info</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center cosmic-pulse">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Email</h4>
                      <a href="mailto:p.budhwar@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-200 animated-underline">
                        p.budhwar@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center cosmic-pulse">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Phone</h4>
                      <a href="tel:+919350569323" className="text-muted-foreground hover:text-secondary transition-colors duration-200 animated-underline">
                        +91 935-056-9323
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center cosmic-pulse">
                      <MessageSquare className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Socials</h4>
                      <div className="flex gap-3">
                        <a href="https://github.com/budprat" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                          GitHub
                        </a>
                        <span className="text-muted-foreground">•</span>
                        <a href="https://www.linkedin.com/in/prateek-budhwar-212a92314/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="bg-background/20 rounded-lg p-4 border border-white/5">
                  <p className="text-sm text-muted-foreground">
                    Looking forward to building innovative AI and data solutions together!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass cosmic-border rounded-lg p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              {...field} 
                              className="bg-background/40 border-white/10 focus:border-primary text-foreground placeholder:text-muted-foreground"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="your.email@example.com" 
                              type="email" 
                              {...field} 
                              className="bg-background/40 border-white/10 focus:border-primary text-foreground placeholder:text-muted-foreground"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your project or inquiry..." 
                              className="min-h-[150px] bg-background/40 border-white/10 focus:border-primary text-foreground placeholder:text-muted-foreground"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full group cosmic-glow relative overflow-hidden transition-all duration-300" 
                    disabled={isSubmitting}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Send className="h-4 w-4" />}
                    </span>
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 border border-primary/10 rounded-full opacity-20 -z-10" 
        style={{ transform: 'translateX(-40%)' }}></div>
      <div className="absolute bottom-1/4 right-0 w-60 h-60 border border-accent/10 rounded-full opacity-20 -z-10" 
        style={{ transform: 'translateX(30%)' }}></div>
    </section>
  );
}