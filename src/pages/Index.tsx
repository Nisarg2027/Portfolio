import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-border">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Nisarg Singh Thakur. Built with React & Tailwind.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">GitHub</a>
            <a href="https://linkedin.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
