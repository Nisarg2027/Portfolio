import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Code2 } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-28 md:py-36">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl"
      >
        <p className="font-mono text-sm tracking-widest uppercase text-primary mb-3">Let's Connect</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Get in Touch</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10" style={{ textWrap: "pretty" } as React.CSSProperties}>
          I'm always open to discussing new system architecture projects, AI research collaborations, or opportunities regarding Fall 2027 MS programs.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:thakurnisarg@gmail.com"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-200 glow-blue-hover active:scale-[0.97]"
          >
            <Mail className="w-4 h-4" />
            thakurnisarg@gmail.com
          </a>
          <a
            href="https://github.com/Nisarg2027"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-border font-semibold rounded-lg transition-all duration-200 hover:bg-surface-elevated hover:border-primary/20 active:scale-[0.97]"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nisargsinghthakur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-border font-semibold rounded-lg transition-all duration-200 hover:bg-surface-elevated hover:border-primary/20 active:scale-[0.97]"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/nisarg_2027/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-border font-semibold rounded-lg transition-all duration-200 hover:bg-surface-elevated hover:border-yellow-500/20 active:scale-[0.97]"
          >
            <Code2 className="w-4 h-4" />
            LeetCode
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;