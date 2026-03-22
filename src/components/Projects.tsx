import { motion } from "framer-motion";
import { ExternalLink, Github, Cpu, Brain, Wifi } from "lucide-react";

const projects = [
  {
    title: "Real-Time Multiplayer Chess Engine",
    description:
      "A robust, stateful distributed system featuring live WebSocket matchmaking, PGN-based browser session recovery, server-authoritative role validation, and a custom Minimax AI opponent.",
    tags: ["React", "Spring Boot", "WebSockets", "Java"],
    icon: Cpu,
    accentClass: "text-primary",
    accentBg: "bg-primary/10",
  },
  {
    title: "Hybrid Region-Based Regressor",
    description:
      "An advanced AI research project featuring a novel architecture that combines decision trees and neural networks for highly accurate data evaluation and regression modeling.",
    tags: ["Python", "Deep Learning", "Machine Learning"],
    icon: Brain,
    accentClass: "text-accent",
    accentBg: "bg-accent/10",
  },
  {
    title: "Ahilya Rakshasutra",
    description:
      "An innovative IoT and software solution developed during the Indore Tech Hackathon, securing 4th place overall.",
    tags: ["ESP32", "Arduino", "System Integration"],
    icon: Wifi,
    accentClass: "text-emerald-400",
    accentBg: "bg-emerald-400/10",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
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

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-6 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={item}
            className="group relative rounded-xl p-6 md:p-8 glass glass-hover transition-all duration-300 flex flex-col"
          >
            {/* Icon */}
            <div className={`w-10 h-10 rounded-lg ${project.accentBg} flex items-center justify-center mb-5`}>
              <project.icon className={`w-5 h-5 ${project.accentClass}`} />
            </div>

            <h3 className="text-lg font-semibold tracking-tight mb-3 group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h3>

            <p
              className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1"
              style={{ textWrap: "pretty" } as React.CSSProperties}
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Hover links */}
            <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button className="p-1.5 rounded-md hover:bg-surface-hover transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4 text-muted-foreground" />
              </button>
              <button className="p-1.5 rounded-md hover:bg-surface-hover transition-colors" aria-label="Live">
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
