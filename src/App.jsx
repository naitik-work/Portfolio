import React from 'react';
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
  return (
    <div className="min-h-screen bg-bg-light text-charcoal flex flex-col font-sans selection:bg-teal-accent selection:text-white">
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
