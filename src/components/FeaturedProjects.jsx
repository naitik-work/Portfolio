import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Radio, Search, Sparkles, Terminal, ShoppingBag, Grid, Layers, Zap } from 'lucide-react';
import { GithubIcon } from './Icons';
import { HeadingReveal, TiltCard } from './motion/MotionHelpers';

export default function FeaturedProjects() {
  const [hoveredFeatured, setHoveredFeatured] = useState(null);

  const otherProjects = [
    {
      id: '03',
      name: 'Snitch',
      subtitle: 'Full-Stack Contemporary Apparel E-Commerce',
      description:
        'A comprehensive menswear e-commerce application featuring variant-level stock management, defensive cart mechanics, and role-protected seller operations.',
      highlights: [
        'Variant stock matrix [sizes: {size, stock}]',
        'Redux Toolkit state & async thunks',
        'JWT role-based access control (User/Seller)',
        'ImageKit cloud asset streaming via Multer',
      ],
      tech: ['React 18', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'ImageKit'],
      github: 'https://github.com/naitik-work/Snitch',
      live: 'https://snitch-cxnr.onrender.com/',
      icon: ShoppingBag,
    },
    {
      id: '04',
      name: 'Mac-OS',
      subtitle: 'Interactive Desktop Operating System Portfolio',
      description:
        'A dual-mode desktop operating system portfolio (macOS Sonoma & Windows 11) with window management, an interactive CLI terminal, and simulated apps.',
      highlights: [
        'Draggable & resizable multi-window engine',
        'Functional CLI terminal with custom commands',
        'Virtual filesystem (Finder & File Explorer)',
        'GSAP timeline animations & OS mode switching',
      ],
      tech: ['React 19', 'Vite', 'GSAP 3', 'SCSS', 'react-rnd', 'Console Emulator'],
      github: 'https://github.com/naitik-work/Mac-OS',
      live: 'https://mac-os-y6za.onrender.com/',
      icon: Terminal,
    },
    {
      id: '05',
      name: 'VibeFeed',
      subtitle: 'Visual Creator Social Feed & Platform',
      description:
        'An image-centric social platform for visual creators and photographers, featuring in-memory media uploads, relational graph modeling, and activity feeds.',
      highlights: [
        'In-memory Multer buffer to ImageKit CDN',
        'Compound unique indexed follows and likes',
        'Stateless HTTP-only JWT cookie authentication',
        'Activity notifications & creator discovery',
      ],
      tech: ['React 19', 'Express 5', 'Node.js', 'MongoDB', 'Mongoose 9', 'ImageKit SDK', 'SCSS'],
      github: 'https://github.com/naitik-work/VibeFeed',
      live: 'https://vibefeedd.onrender.com/',
      icon: Grid,
    },
    {
      id: '06',
      name: 'Cardify',
      subtitle: 'Dynamic Profile Card Generator',
      description:
        'An interactive React application demonstrating form validation, real-time two-way data binding, dynamic user card creation, and responsive layout management.',
      highlights: [
        'Real-time two-way data binding',
        'Dynamic card creation & instant deletion',
        'Responsive layout built with Tailwind CSS',
        'Form validation and clean interactive state',
      ],
      tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript ES6+', 'Vercel'],
      github: 'https://github.com/naitik-work/Cardify',
      live: 'https://cardify-d1vd.vercel.app/',
      icon: Layers,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-bg-subtle/40 border-t border-charcoal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-subtle text-teal-accent text-xs font-semibold uppercase tracking-wider mb-4 border border-teal-border/40">
              Engineering Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              <HeadingReveal>Featured & Selected Projects</HeadingReveal>
            </h2>
            <p className="text-charcoal-muted mt-2 text-base max-w-2xl">
              Production full-stack applications with AI agent orchestration, sub-200ms WebSocket real-time systems, and scalable backend architectures.
            </p>
          </div>
          <a
            href="https://github.com/naitik-work"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-accent hover:text-teal-hover transition-colors group w-fit active:scale-95"
          >
            <span>Explore all repositories on GitHub</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Projects Layout */}
        <div className="space-y-14">
          
          {/* ============================================================ */}
          {/* TIER 1 — FEATURED PROJECT 01: QUERYMIND */}
          {/* ============================================================ */}
          <TiltCard maxTilt={2}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setHoveredFeatured('querymind')}
              onMouseLeave={() => setHoveredFeatured(null)}
              animate={{
                opacity: hoveredFeatured === 'pulseclass' ? 0.93 : 1,
              }}
              className="group relative bg-white rounded-3xl border border-charcoal/10 shadow-editorial overflow-hidden hover:border-teal-border/70 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Case Study Content */}
                <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                  <div>
                    {/* Top Badge */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-teal-accent bg-teal-subtle px-3 py-1 rounded-full border border-teal-border/40 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>FEATURED CASE STUDY · AI ENGINEERING</span>
                      </span>
                      <span className="text-xs font-mono font-bold text-charcoal-light">01</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight group-hover:text-teal-accent group-hover:translate-x-1 transition-all duration-200">
                      QueryMind
                    </h3>
                    
                    <p className="text-base font-medium text-teal-accent mt-1 mb-4 italic font-serif">
                      "AI-Powered Context-Aware Research Assistant with Persistent Memory & Fallback Orchestration."
                    </p>

                    <p className="text-charcoal-muted text-base leading-relaxed mb-6">
                      QueryMind solves LLM statelessness and provider fragility by combining durable cross-conversation user memory with intelligent multi-model orchestration, real-time web grounding, and LangGraph-powered AI battle evaluation.
                    </p>

                    {/* Highlights Grid */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-3">
                        Architectural Highlights
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {[
                          'Real-time token streaming over Socket.IO',
                          'Durable cross-session user memory layer',
                          'Multi-provider fallback (Gemini → OpenRouter)',
                          'Live web grounding via Tavily Search with citations',
                          'LangGraph AI Battle Arena with LLM-as-a-Judge',
                          'Human-in-the-loop email actions (Gmail API & Nodemailer)',
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 p-2 rounded-lg bg-bg-light border border-charcoal/5 text-charcoal font-medium hover:border-teal-border/40 hover:bg-white transition-colors duration-150"
                          >
                            <Zap className="w-3.5 h-3.5 text-teal-accent shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Engineering Story */}
                    <div className="mb-8 p-4 rounded-xl bg-bg-light/80 border border-charcoal/10">
                      <p className="text-xs font-semibold text-charcoal mb-1 uppercase tracking-wider">
                        Engineering Problem Solved:
                      </p>
                      <p className="text-xs text-charcoal-muted leading-relaxed">
                        Eliminated LLM context amnesia and downtime by extracting structured facts into MongoDB, streaming responses bi-directionally, and cascading failed API calls across model providers without interrupting user sessions.
                      </p>
                    </div>
                  </div>

                  {/* Tech & Buttons */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {[
                        'React 19',
                        'Redux Toolkit',
                        'Node.js',
                        'Express 5',
                        'MongoDB',
                        'Socket.IO',
                        'LangChain',
                        'LangGraph',
                        'Google Gemini',
                        'OpenRouter',
                        'Tavily API',
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium bg-charcoal text-white rounded-md hover:bg-teal-accent hover:-translate-y-0.5 transition-all duration-150 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href="https://querymind-aeh7.onrender.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-accent text-white font-medium text-sm hover:bg-teal-hover hover:-translate-y-0.5 active:scale-[0.96] transition-all shadow-subtle group/btn"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />
                      </a>
                      <a
                        href="https://github.com/naitik-work/QueryMind"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-charcoal font-medium text-sm border border-charcoal/15 hover:border-charcoal/30 hover:bg-bg-subtle/50 hover:-translate-y-0.5 active:scale-[0.96] transition-all shadow-subtle"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>View GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Visual Case Study Mockup */}
                <div className="lg:col-span-5 bg-charcoal p-8 sm:p-12 flex flex-col justify-between text-bg-light relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between text-xs text-charcoal-light mb-8 pb-4 border-b border-white/10">
                      <span className="flex items-center gap-2">
                        <Radio className="w-4 h-4 text-teal-accent animate-pulse" />
                        LangGraph State Graph
                      </span>
                      <span className="text-teal-border font-mono">Socket.IO Streaming</span>
                    </div>

                    {/* Interactive UI Mockup Box with subtle hover zoom */}
                    <div className="bg-bg-darkCard p-6 rounded-2xl border border-white/10 shadow-dark-card space-y-4 transform transition-all duration-500 ease-out group-hover:scale-[1.025] group-hover:border-teal-border/40">
                      <div className="flex items-center justify-between text-xs font-semibold text-white">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-teal-accent animate-pulse" />
                          <span>Research Query Stream</span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-teal-accent/20 text-teal-border font-mono text-[10px]">Tavily Grounded</span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <p className="text-charcoal-light">Prompt:</p>
                        <p className="font-medium text-white bg-white/5 p-2.5 rounded-lg border border-white/5">
                          "Compare React 19 Actions with server state mutations..."
                        </p>
                      </div>

                      {/* AI Battle & Citations preview */}
                      <div className="pt-2 border-t border-white/10 space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] text-charcoal-light">
                          <span>Model Arena Evaluation:</span>
                          <span className="text-gold-accent font-semibold font-mono">Gemini 9.4 / 10 · Mistral 8.9 / 10</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-teal-accent/10 border border-teal-border/20 text-[11px] text-teal-border flex items-center justify-between">
                          <span>✓ Verified 4 domain citations</span>
                          <span className="font-mono text-[10px]">react.dev • web.dev</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 pt-8 mt-8 border-t border-white/10 flex items-center justify-between text-xs text-charcoal-light">
                    <span>Resilient Fallback Orchestrator</span>
                    <span className="font-mono text-gold-accent">Auto-failover enabled</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </TiltCard>

          {/* ============================================================ */}
          {/* TIER 1 — FEATURED PROJECT 02: PULSECLASS */}
          {/* ============================================================ */}
          <TiltCard maxTilt={2}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setHoveredFeatured('pulseclass')}
              onMouseLeave={() => setHoveredFeatured(null)}
              animate={{
                opacity: hoveredFeatured === 'querymind' ? 0.93 : 1,
              }}
              className="group relative bg-white rounded-3xl border border-charcoal/10 shadow-editorial overflow-hidden hover:border-teal-border/70 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Case Study Content */}
                <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                  <div>
                    {/* Top Badge */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-teal-accent bg-teal-subtle px-3 py-1 rounded-full border border-teal-border/40 flex items-center gap-1.5">
                        <Radio className="w-3.5 h-3.5" />
                        <span>FEATURED CASE STUDY · REAL-TIME SYSTEMS</span>
                      </span>
                      <span className="text-xs font-mono font-bold text-charcoal-light">02</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight group-hover:text-teal-accent group-hover:translate-x-1 transition-all duration-200">
                      PulseClass
                    </h3>
                    
                    <p className="text-base font-medium text-teal-accent mt-1 mb-4 italic font-serif">
                      "Instant Real-Time Classroom Engagement SaaS Platform with Sub-200ms WebSocket Latency."
                    </p>

                    <p className="text-charcoal-muted text-base leading-relaxed mb-6">
                      A real-time classroom polling and student engagement SaaS platform designed for high-velocity teaching environments where instructors launch instant anonymous pulses and monitor live participation distributions.
                    </p>

                    {/* Highlights Grid */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-3">
                        Architectural Highlights
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {[
                          'Sub-200ms latency WebSocket broadcasting',
                          'Keyboard-first instructor UX (Q to trigger, 1-9 to pick)',
                          'Server-authoritative timers (3s to 30s countdowns)',
                          'Duplicate prevention via compound unique (poll, student) index',
                          '100% anonymous voting decoupling student identity',
                          'Live animating response distribution charts',
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 p-2 rounded-lg bg-bg-light border border-charcoal/5 text-charcoal font-medium hover:border-teal-border/40 hover:bg-white transition-colors duration-150"
                          >
                            <Zap className="w-3.5 h-3.5 text-teal-accent shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Engineering Story */}
                    <div className="mb-8 p-4 rounded-xl bg-bg-light/80 border border-charcoal/10">
                      <p className="text-xs font-semibold text-charcoal mb-1 uppercase tracking-wider">
                        Engineering Architecture:
                      </p>
                      <p className="text-xs text-charcoal-muted leading-relaxed">
                        Engineered with React 19, Socket.IO, Express, and MongoDB. Solved student hesitation through anonymous response streaming while enforcing voting integrity via database-level compound indexing and backend countdown synchronization.
                      </p>
                    </div>
                  </div>

                  {/* Tech & Buttons */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {[
                        'React 19',
                        'Vite',
                        'Tailwind CSS',
                        'Node.js',
                        'Express.js',
                        'MongoDB',
                        'Mongoose',
                        'Socket.IO',
                        'JWT',
                        'Zod',
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium bg-charcoal text-white rounded-md hover:bg-teal-accent hover:-translate-y-0.5 transition-all duration-150 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href="https://realtimepulseclass.onrender.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-accent text-white font-medium text-sm hover:bg-teal-hover hover:-translate-y-0.5 active:scale-[0.96] transition-all shadow-subtle group/btn"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />
                      </a>
                      <a
                        href="https://github.com/naitik-work/PulseClass"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-charcoal font-medium text-sm border border-charcoal/15 hover:border-charcoal/30 hover:bg-bg-subtle/50 hover:-translate-y-0.5 active:scale-[0.96] transition-all shadow-subtle"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>View GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Visual Case Study Mockup */}
                <div className="lg:col-span-5 bg-charcoal p-8 sm:p-12 flex flex-col justify-between text-bg-light relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between text-xs text-charcoal-light mb-8 pb-4 border-b border-white/10">
                      <span className="flex items-center gap-2">
                        <Radio className="w-4 h-4 text-teal-accent animate-pulse" />
                        WebSocket Session
                      </span>
                      <span className="text-teal-border font-mono">&lt;200ms Latency</span>
                    </div>

                    {/* Interactive UI Mockup Box with subtle hover zoom */}
                    <div className="bg-bg-darkCard p-6 rounded-2xl border border-white/10 shadow-dark-card space-y-4 transform transition-all duration-500 ease-out group-hover:scale-[1.025] group-hover:border-teal-border/40">
                      <div className="flex items-center justify-between text-xs font-semibold text-white">
                        <span>Active Pulse #12</span>
                        <span className="px-2 py-0.5 rounded bg-teal-accent/20 text-teal-border font-mono text-[10px]">00:14s Left</span>
                      </div>

                      <div className="space-y-1.5">
                        <p className="text-xs text-charcoal-light">Prompt:</p>
                        <p className="text-sm font-semibold text-white">"Should we review Compound Indexes or dive into Sharding?"</p>
                      </div>

                      {/* Progress bars preview */}
                      <div className="space-y-2 pt-2">
                        <div>
                          <div className="flex justify-between text-[11px] text-charcoal-light mb-1">
                            <span>Review Compound Indexes</span>
                            <span className="text-teal-border font-mono font-semibold">82% (28 votes)</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: '82%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
                              className="h-full bg-teal-accent rounded-full"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[11px] text-charcoal-light mb-1">
                            <span>Proceed directly to Sharding</span>
                            <span className="text-charcoal-light font-mono">18% (6 votes)</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: '18%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
                              className="h-full bg-white/25 rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 pt-8 mt-8 border-t border-white/10 flex items-center justify-between text-xs text-charcoal-light">
                    <span>Server-Authoritative Sync</span>
                    <span className="font-mono text-gold-accent">Anonymous Vote Engine</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </TiltCard>

          {/* ============================================================ */}
          {/* TIER 2 — SUPPORTING PROJECTS HEADER */}
          {/* ============================================================ */}
          <div className="pt-6">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px bg-charcoal/15 flex-grow" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal-muted bg-white px-4 py-1.5 rounded-full border border-charcoal/10 shadow-xs">
                More Notable Engineering Projects
              </h3>
              <span className="h-px bg-charcoal/15 flex-grow" />
            </div>

            {/* 2x2 Grid of Projects 03, 04, 05, 06 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((proj, idx) => {
                const IconComponent = proj.icon;
                return (
                  <motion.div
                    key={proj.name}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="group bg-white p-7 sm:p-8 rounded-3xl border border-charcoal/10 shadow-card hover:border-teal-border/70 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Bar */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-charcoal-muted bg-bg-light px-3 py-1 rounded-full border border-charcoal/10 font-mono">
                          PROJECT {proj.id}
                        </span>
                        <div className="p-2 rounded-xl bg-bg-light text-teal-accent border border-charcoal/5 group-hover:bg-teal-subtle group-hover:border-teal-border/40 group-hover:scale-110 transition-all duration-200">
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>

                      <h4 className="text-2xl font-bold text-charcoal tracking-tight group-hover:text-teal-accent group-hover:translate-x-0.5 transition-all duration-200">
                        {proj.name}
                      </h4>
                      <p className="text-xs font-medium text-teal-accent mt-0.5 mb-3 italic">
                        {proj.subtitle}
                      </p>

                      <p className="text-charcoal-muted text-sm leading-relaxed mb-5">
                        {proj.description}
                      </p>

                      {/* Feature Highlights */}
                      <div className="mb-6 space-y-1.5 bg-bg-light/60 p-3.5 rounded-xl border border-charcoal/5">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-muted mb-2">
                          Key Capabilities:
                        </p>
                        <ul className="space-y-1 text-xs text-charcoal">
                          {proj.highlights.map((feat) => (
                            <li key={feat} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-teal-accent shrink-0" />
                              <span className="leading-tight">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {proj.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 text-[11px] font-medium bg-bg-light text-charcoal-muted border border-charcoal/10 rounded-md hover:border-teal-border hover:text-teal-accent hover:-translate-y-0.5 transition-all duration-150 cursor-default"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-3 pt-4 border-t border-charcoal/10">
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-accent text-white font-medium text-xs hover:bg-teal-hover hover:-translate-y-0.5 active:scale-[0.96] transition-all shadow-xs group/btn"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />
                        </a>
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-bg-light text-charcoal font-medium text-xs border border-charcoal/15 hover:border-charcoal/30 hover:bg-white hover:-translate-y-0.5 active:scale-[0.96] transition-all shadow-xs"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
