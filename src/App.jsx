import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from "./components/Certificates";
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="bg-primary text-white overflow-x-hidden">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>
      
      <section id="about" className="scroll-mt-20">
        <About />
      </section>
      
      <section id="skills" className="scroll-mt-20">
        <Skills />
      </section>
      
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      <section id="certificates" className="scroll-mt-20">
        <Certificates />
      </section>
      
      <section id="experience" className="scroll-mt-20">
        <Experience />
      </section>
      
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
}