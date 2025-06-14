import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Video } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface Publication {
  title: string;
  authors: string;
  event: string;
  year: string;
  url: string;
  videoUrl?: string;
}

export default function Publications() {
  const publications: Publication[] = [
    {
      title: "SAR2CUBE: A Data Cube Concept for Providing Both Interferometric and Intensity Based Products through an Open Source Framework",
      authors: "Jacob A, Vicente-Guijalba F, Claus M, Zellner PJ, Moral F, Budhwar P, Mougnaud P",
      event: "ESA Phi Week",
      year: "2020",
      url: "https://bia.unibz.it/esploro/outputs/991006043940201241",
      videoUrl: "https://youtu.be/dnrDfLDciGQ?si=n8cjtwyzzh08mFo1"
    },
    {
      title: "OpenEO - an API for Standardised Access to Big Earth Observation Data in a Landscape of a Growing Number of EO Cloud Providers",
      authors: "Jacob A, Pebesma E, Neteler M, Wagner W, Verbesselt J, Mohr M, Dries J, Monsorno R, Budhwar P, Briese C, Mistelbauer T, Schramm M, Kadunc",
      event: "ESA Living Planet Symposium (Milan)",
      year: "2019",
      url: "https://repositum.tuwien.at/handle/20.500.12708/83784"
    }
  ];

  return (
    <section id="publications" className="bg-background py-8 md:py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8 reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Publications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic contributions and research papers.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {publications.map((publication, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="bg-card border border-border shadow-md hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 flex">
                  <div className="flex-shrink-0 mr-5 mt-1">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <BookOpen size={24} />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {publication.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-3">
                      {publication.authors}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-muted-foreground">
                        <span className="font-medium">{publication.event}</span>
                        <span className="mx-2">•</span>
                        <span>{publication.year}</span>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        {publication.videoUrl && (
                          <a 
                            href={publication.videoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center text-accent hover:text-accent/80 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                          >
                            Watch Video <Video className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </a>
                        )}
                        
                        <a 
                          href={publication.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center text-primary group-hover:text-primary/80 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full"
                        >
                          View Publication <ExternalLink className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}