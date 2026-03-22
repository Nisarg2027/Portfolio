import { motion } from "framer-motion";
import { MapPin, GraduationCap, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-28 md:py-36">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14"
      >
        <p className="font-mono text-sm tracking-widest uppercase text-primary mb-3">Who I Am</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">About Me</h2>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-3"
        >
          <p className="text-lg text-muted-foreground leading-[1.8]" style={{ textWrap: "pretty" } as React.CSSProperties}>
            I am a passionate software engineer specializing in complex distributed systems, full-stack development, 
            and machine learning. When I'm not building real-time applications or participating in LeetCode contests, 
            I am actively researching deep learning architectures and preparing for my MS in Computer Science for the 
            Fall 2027 intake. I'm also currently learning Japanese.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-2 space-y-6"
        >
          <div className="flex items-start gap-3.5">
            <div className="mt-1 p-2 rounded-lg bg-primary/10">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-0.5">Location</p>
              <p className="font-medium">Balaghat, Madhya Pradesh</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="mt-1 p-2 rounded-lg bg-primary/10">
              <GraduationCap className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-0.5">Education</p>
              <p className="font-medium">B.Tech CSE — SGSITS</p>
              <p className="text-sm text-muted-foreground">3rd Year · CGPA: 7.65</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="mt-1 p-2 rounded-lg bg-accent/10">
              <BookOpen className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-0.5">Goal</p>
              <p className="font-medium">MS in CS — Fall 2027</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
