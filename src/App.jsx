import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import FeaturedProjects from './components/FeaturedProjects';
import Achievements from './components/Achievements';
import Leadership from './components/Leadership';
import Skills from './components/Skills';
import GitHubCallout from './components/GitHubCallout';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-bg-light text-charcoal flex flex-col font-sans selection:bg-teal-accent selection:text-white relative">
      {/* Subtle top scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-teal-accent z-[60] origin-left pointer-events-none"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <FeaturedProjects />
        <Achievements />
        <Leadership />
        <Skills />
        <GitHubCallout />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
