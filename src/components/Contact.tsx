import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

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
        <p
          className="text-lg text-muted-foreground leading-relaxed mb-10"
          style={{ textWrap: "pretty" } as React.CSSProperties}
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to collaborate on something impactful.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:hello@nisargthakur.dev"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-200 glow-blue-hover active:scale-[0.97]"
          >
            <Mail className="w-4 h-4" />
            Send an Email
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-border font-semibold rounded-lg transition-all duration-200 hover:bg-surface-elevated hover:border-primary/20 active:scale-[0.97]"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-border font-semibold rounded-lg transition-all duration-200 hover:bg-surface-elevated hover:border-primary/20 active:scale-[0.97]"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
