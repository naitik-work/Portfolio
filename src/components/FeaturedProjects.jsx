import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Radio, Search, Music, Zap } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-bg-subtle/40 border-t border-charcoal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-subtle text-teal-accent text-xs font-semibold uppercase tracking-wider mb-4">
              Featured Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              Selected Projects
            </h2>
            <p className="text-charcoal-muted mt-2 text-base max-w-xl">
              Practical full-stack web applications built with real-time features, AI search concepts, and full-stack architecture.
            </p>
          </div>
          <a
            href="https://github.com/naitik-work"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-accent hover:text-teal-hover transition-colors group w-fit"
          >
            <span>Explore all repositories on GitHub</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Projects Layout */}
        <div className="space-y-12">
          
          {/* ============================================================ */}
          {/* PROJECT 01 — PULSECLASS (PRIMARY FEATURED PROJECT CASE STUDY) */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-white rounded-3xl border border-charcoal/10 shadow-editorial overflow-hidden hover:border-teal-border/70 hover:shadow-2xl transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Case Study Content */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-accent bg-teal-subtle px-3 py-1 rounded-full border border-teal-border/40">
                      PROJECT 01 · PRIMARY SHOWCASE
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight group-hover:text-teal-accent transition-colors duration-200">
                    PulseClass
                  </h3>
                  
                  <p className="text-base font-medium text-teal-accent mt-1 mb-4 italic font-serif">
                    "Real-time classroom interaction, built for hybrid learning."
                  </p>

                  <p className="text-charcoal-muted text-base leading-relaxed mb-6">
                    PulseClass is a real-time question and polling platform designed to improve interaction between instructors and students in classroom and hybrid learning environments.
                  </p>

                  {/* Highlights Grid */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-3">
                      Key Highlights & Features
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                      {[
                        'Real-time polls',
                        'Live responses',
                        'Instant result visualization',
                        'Student participation',
                        'JWT authentication',
                        'Socket.io real-time engine',
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-1.5 p-2 rounded-lg bg-bg-light border border-charcoal/5 text-charcoal font-medium"
                        >
                          <Zap className="w-3.5 h-3.5 text-teal-accent shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* My Contribution */}
                  <div className="mb-8 p-4 rounded-xl bg-bg-light/75 border border-charcoal/10">
                    <p className="text-xs font-semibold text-charcoal mb-1 uppercase tracking-wider">
                      My Contribution:
                    </p>
                    <p className="text-xs text-charcoal-muted leading-relaxed">
                      I worked on the frontend, backend APIs, authentication, database integration, real-time communication, and core polling functionality.
                    </p>
                  </div>
                </div>

                {/* Tech & Buttons */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {[
                      'React.js',
                      'Tailwind CSS',
                      'Node.js',
                      'Express.js',
                      'MongoDB',
                      'Mongoose',
                      'Socket.io',
                      'JWT',
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium bg-charcoal text-white rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href="https://github.com/naitik-work/hackthon-kodr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-accent text-white font-medium text-sm hover:bg-teal-hover transition-colors shadow-subtle"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View GitHub</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Visual Case Study Preview Card */}
              <div className="lg:col-span-5 bg-charcoal p-8 sm:p-12 flex flex-col justify-between text-bg-light relative overflow-hidden">
                {/* Subtle dark pattern background */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between text-xs text-charcoal-light mb-8 pb-4 border-b border-white/10">
                    <span className="flex items-center gap-2">
                      <Radio className="w-4 h-4 text-teal-accent animate-pulse" />
                      Web Socket Architecture
                    </span>
                    <span>Hackathon Project</span>
                  </div>

                  {/* Interactive UI Mockup Box */}
                  <div className="bg-bg-darkCard p-6 rounded-2xl border border-white/10 shadow-dark-card space-y-4 transform transition-transform group-hover:scale-[1.02] duration-300">
                    <div className="flex items-center justify-between text-xs font-semibold text-white">
                      <span>Live Class Session</span>
                      <span className="px-2 py-0.5 rounded bg-teal-accent/20 text-teal-border">Active</span>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs text-charcoal-light">Quick Poll Question:</p>
                      <p className="text-sm font-semibold text-white">"What is the key benefit of Virtual DOM?"</p>
                    </div>

                    {/* Progress bars preview */}
                    <div className="space-y-2 pt-2">
                      <div>
                        <div className="flex justify-between text-[11px] text-charcoal-light mb-1">
                          <span>Minimizes direct DOM manipulation</span>
                          <span className="text-teal-border font-mono">78%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full bg-teal-accent rounded-full w-[78%]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] text-charcoal-light mb-1">
                          <span>Replaces backend database</span>
                          <span className="text-charcoal-light font-mono">12%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full bg-white/20 rounded-full w-[12%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 pt-8 mt-8 border-t border-white/10 flex items-center justify-between text-xs text-charcoal-light">
                  <span>Full-Stack MERN Architecture</span>
                  <span className="font-mono text-gold-accent">Socket.io + JWT</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* PROJECTS 02 & 03 — TWO COLUMN MEDIUM LAYOUT */}
          {/* ============================================================ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* PROJECT 02 — PERPLEXITY CLONE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group bg-white p-8 rounded-3xl border border-charcoal/10 shadow-card hover:border-teal-border/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-charcoal-muted bg-bg-light px-3 py-1 rounded-full border border-charcoal/10">
                    PROJECT 02
                  </span>
                  <Search className="w-5 h-5 text-teal-accent" />
                </div>

                <h3 className="text-2xl font-bold text-charcoal tracking-tight group-hover:text-teal-accent transition-colors">
                  Perplexity Clone
                </h3>

                <p className="text-charcoal-muted text-sm leading-relaxed mt-3 mb-6">
                  A Perplexity-inspired AI search application built to understand modern AI-search interfaces and full-stack communication between frontend and backend.
                </p>

                {/* Highlights */}
                <div className="mb-6 space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal">
                    {[
                      'Search-based interface',
                      'Frontend/backend architecture',
                      'API integration',
                      'Authentication',
                      'Two-step email verification (Nodemailer)',
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React.js', 'JavaScript', 'Node.js', 'Express.js', 'Nodemailer', 'HTML', 'CSS'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-bg-light text-charcoal border border-charcoal/10 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/naitik-work/Perplexity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-charcoal text-white font-medium text-xs hover:bg-teal-accent transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View GitHub</span>
                </a>
              </div>
            </motion.div>

            {/* PROJECT 03 — EMOTUNE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group bg-white p-8 rounded-3xl border border-charcoal/10 shadow-card hover:border-teal-border/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-charcoal-muted bg-bg-light px-3 py-1 rounded-full border border-charcoal/10">
                    PROJECT 03
                  </span>
                  <Music className="w-5 h-5 text-teal-accent" />
                </div>

                <h3 className="text-2xl font-bold text-charcoal tracking-tight group-hover:text-teal-accent transition-colors">
                  EmoTune
                </h3>

                <p className="text-charcoal-muted text-sm leading-relaxed mt-3 mb-6">
                  A mood-based music recommendation application designed around the idea of connecting a user's mood with a personalized music experience.
                </p>

                {/* Highlights */}
                <div className="mb-6 space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal">
                    {[
                      'Mood-based interaction',
                      'Music recommendation concept',
                      'Interactive UI',
                      'Frontend/backend integration',
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React.js', 'JavaScript', 'Node.js', 'Express.js'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-bg-light text-charcoal border border-charcoal/10 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/naitik-work/EmoTune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-charcoal text-white font-medium text-xs hover:bg-teal-accent transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View GitHub</span>
                </a>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
