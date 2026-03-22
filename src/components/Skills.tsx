import { motion } from "framer-motion";

const skillGroups = [
  { 
    category: "Languages", 
    items: ["Java", "Python", "C/C++", "JavaScript", "TypeScript", "Dart"] 
  },
  { 
    category: "Frontend", 
    items: ["React.js", "Flutter", "Tailwind CSS", "Chrome Extensions", "Framer Motion"] 
  },
  { 
    category: "Backend & Systems", 
    items: ["Spring Boot", "FastAPI", "REST APIs", "WebSockets", "System Architecture"] 
  },
  { 
    category: "AI & Intelligence", 
    items: ["Deep Learning", "Machine Learning", "LLM Integration", "Prompt Engineering"] 
  },
  { 
    category: "Concepts & Hardware", 
    items: ["Data Structures & Algorithms", "Git/GitHub", "ESP32", "Arduino Uno", "IoT"] 
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const Skills = () => {
  return (
    <section id="skills" className="px-6 md:px-12 lg:px-24 py-28 md:py-36">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14"
      >
        <p className="font-mono text-sm tracking-widest uppercase text-primary mb-3">Toolkit</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Skills & Technologies</h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-10"
      >
        {skillGroups.map((group) => (
          <motion.div key={group.category} variants={item}>
            <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60 mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium rounded-lg glass transition-all duration-200 hover:border-primary/30 hover:text-primary cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;