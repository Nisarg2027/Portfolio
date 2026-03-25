import { motion } from "framer-motion";
import { ExternalLink, Github, Cpu, Brain, Wifi, Code, Database, Server } from "lucide-react";

const projects = [
  {
    title: "Real-Time Multiplayer Chess Engine",
    description: "A robust, stateful distributed system featuring live WebSocket matchmaking, PGN-based browser session recovery, server-authoritative role validation, and a custom Minimax AI opponent.",
    tags: ["React", "Spring Boot", "WebSockets", "Java"],
    icon: Cpu,
    accentClass: "text-primary",
    accentBg: "bg-primary/10",
    github: "https://github.com/Nisarg2027/chess-engine-backend", // <-- UPDATE THIS
    live: "https://chess-engine-project.vercel.app", // <-- UPDATE THIS
  },
  {
    title: "FestFlow: DBMS Management System",
    description: "A full-stack event management platform featuring a normalized PostgreSQL schema with 17+ tables, automated expense tracking, and a mesmerizing glassmorphism dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind", "Vite"],
    icon: Database, // You can use 'Database' or 'LayoutDashboard' from Lucide
    accentClass: "text-blue-400",
    accentBg: "bg-blue-400/10",
    github: "https://github.com/Nisarg2027/Fest-Management",
    live: "https://fest-management-eight.vercel.app",
  },
  {
    title: "Nexus MLOps Pipeline",
    description: "An automated, self-healing MLOps pipeline dashboard for monitoring continuous model retraining and zero-downtime deployments.",
    tags: ["React", "FastAPI", "Kubernetes", "MLflow"],
    icon: Server, // Or 'Server', 'Database', or 'Layout' depending on your icon library
    accentClass: "text-teal-400",
    accentBg: "bg-teal-400/10",
    github: "https://github.com/Nisarg2027/Nexus", // <-- UPDATE THIS
    live: "",
  },
  {
    title: "Hybrid Region-Based Regressor",
    description: "An advanced AI research project featuring a novel architecture that combines decision trees and neural networks for highly accurate data evaluation and regression modeling.",
    tags: ["Python", "Deep Learning", "Machine Learning"],
    icon: Brain,
    accentClass: "text-accent",
    accentBg: "bg-accent/10",
    github: "https://github.com/Nisarg2027", // <-- UPDATE THIS
    live: "",
  },
  
  {
    title: "Ahilya Rakshasutra",
    description: "An innovative Cyber Security and software solution developed during the Indore Tech Hackathon, securing 4th place overall.",
    tags: ["ESP32", "Arduino", "System Integration"],
    icon: Wifi,
    accentClass: "text-emerald-400",
    accentBg: "bg-emerald-400/10",
    github: "https://github.com/Nisarg2027/Ahilya-RakshaSutra", // <-- UPDATE THIS
    live: "",
  },
  {
    title: "sachAI: AI Fact-Checker",
    description: "An intelligent fact-checking system featuring a Python API backend and a custom Chrome Extension. It leverages Groq's LLM capabilities and the Tavily Search API for real-time claim verification.",
    tags: ["Python", "FastAPI", "Chrome Extension", "AI/LLMs"],
    icon: Brain, // We can reuse the Brain icon, or import 'Search' from lucide-react at the top!
    accentClass: "text-blue-400",
    accentBg: "bg-blue-400/10",
    github: "https://github.com/Nisarg2027/sachAI", // <-- Update this if the repo name is different
    live: "", // You can leave this blank since it requires local API keys to run
  },
  
  // {
  //   title: "Portfolio Architecture",
  //   description: "A highly responsive, dark-themed developer portfolio built with Vite, React, and Framer Motion, featuring real-time API integration.",
  //   tags: ["React", "Tailwind CSS", "Framer Motion"],
  //   icon: Code,
  //   accentClass: "text-purple-400",
  //   accentBg: "bg-purple-400/10",
  //   github: "https://github.com/Nisarg2027/portfolio",
  //   live: "", 
  // },
  // {
  //   title: "Upcoming Project / MS Research",
  //   description: "Placeholder for your next big algorithm or backend architecture project. Ready for your Fall 2027 intake preparations.",
  //   tags: ["Distributed Systems", "Algorithms"],
  //   icon: Database,
  //   accentClass: "text-orange-400",
  //   accentBg: "bg-orange-400/10",
  //   github: "https://github.com/Nisarg2027", 
  //   live: "", 
  // }
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 py-28 md:py-36">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14"
      >
        <p className="font-mono text-sm tracking-widest uppercase text-primary mb-3">Selected Work</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
      </motion.div>

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.article key={project.title} variants={item} className="group relative rounded-xl p-6 md:p-8 glass glass-hover transition-all duration-300 flex flex-col">
            <div className={`w-10 h-10 rounded-lg ${project.accentBg} flex items-center justify-center mb-5`}>
              <project.icon className={`w-5 h-5 ${project.accentClass}`} />
            </div>

            <h3 className="text-lg font-semibold tracking-tight mb-3 group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1" style={{ textWrap: "pretty" } as React.CSSProperties}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span key={tag} className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>

            {/* Hover links now correctly wrapped in <a> tags */}
            <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-md hover:bg-surface-hover transition-colors" aria-label="GitHub">
                  <Github className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-md hover:bg-surface-hover transition-colors" aria-label="Live Demo">
                  <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;