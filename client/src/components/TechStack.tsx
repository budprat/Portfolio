
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const techStack = [
  {
    category: "AI/ML",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "LangChain"]
  },
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git"]
  },
  {
    category: "Web Technologies",
    items: ["React", "Node.js", "FastAPI", "GraphQL", "REST"]
  }
];

export default function TechStack() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies I work with to build powerful solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center text-muted-foreground">
                      <span className="mr-2">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
