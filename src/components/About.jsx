import React from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, Layers, GraduationCap } from 'lucide-react';
import { HeadingReveal, AnimatedCounter } from './motion/MotionHelpers';

export default function About() {
  const competencies = [
    'React.js / React 19',
    'Node.js & Express 5',
    'MongoDB & Mongoose',
    'Socket.IO & WebSockets',
    'LangChain & LLM Agents',
    'REST API Architecture',
    'JWT & Security Best Practices',
    'Database Modeling & Indexing',
    'Data Structures & Algorithms',
    'System Design Fundamentals',
  ];

  const snapshotMetrics = [
    {
      label: 'Projects Built',
      counter: <AnimatedCounter value={6} suffix="+" />,
      icon: Code,
      desc: 'Full-stack & AI applications',
    },
    {
      label: 'Problem Solving',
      counter: <AnimatedCounter value={200} suffix="+" />,
      icon: BookOpen,
      desc: 'LeetCode problems solved',
    },
    {
      label: 'Academic Standing',
      counter: <AnimatedCounter value={8.0} decimals={1} suffix=" CGPA" />,
      icon: GraduationCap,
      desc: 'B.Tech CSE · JUET Guna (2023–2027)',
    },
    {
      label: 'Core Specialization',
      counter: 'MERN + AI',
      icon: Layers,
      desc: 'Real-time & AI-driven systems',
    },
  ];

  return (
    <section id="about" className="py-20 bg-bg-subtle/50 border-y border-charcoal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-subtle text-teal-accent text-xs font-semibold uppercase tracking-wider mb-4 border border-teal-border/40">
              About Me
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight mb-6 leading-tight">
              <HeadingReveal delay={0.05}>I enjoy turning ideas into</HeadingReveal>{' '}
              <span className="font-serif italic font-normal text-teal-accent inline-block">
                <HeadingReveal delay={0.18}>working products.</HeadingReveal>
              </span>
            </h2>

            <div className="space-y-4 text-charcoal-muted leading-relaxed text-base sm:text-lg">
              <p>
                I am a final-year Computer Science & Engineering student at <strong className="text-charcoal font-semibold">Jaypee University of Engineering and Technology (JUET)</strong>, Guna, graduating in 2027 with an <strong className="text-charcoal font-semibold">8.0 CGPA</strong>. My engineering focus is centered on architecting robust, responsive, and data-intensive web applications.
              </p>
              <p>
                Currently, I am a Full-Stack Trainee Apprentice at <strong className="text-charcoal font-semibold">Sheryians Coding School</strong>, where I develop full-stack applications with React.js, Node.js, Express.js, and MongoDB, implement real-time communication using Socket.IO, integrate LLMs via LangChain, and write clean, modular, production-ready code.
              </p>
            </div>

            {/* Core Competencies Tag Cloud */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-charcoal-muted mb-3">
                Core Competencies & Daily Tools:
              </p>
              <div className="flex flex-wrap gap-2">
                {competencies.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium bg-white text-charcoal border border-charcoal/10 rounded-lg shadow-subtle hover:border-teal-border/70 hover:text-teal-accent hover:-translate-y-0.5 transition-all duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Developer Snapshot with Animated Counters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-charcoal/10 shadow-card hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-teal-accent mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-accent animate-pulse" />
                <span>Developer Snapshot</span>
              </h3>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {snapshotMetrics.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="p-4 rounded-xl bg-bg-light border border-charcoal/5 hover:border-teal-border/60 hover:-translate-y-1 hover:shadow-xs transition-all duration-200 group cursor-default"
                    >
                      <IconComponent className="w-5 h-5 text-teal-accent mb-2 transition-transform duration-200 group-hover:scale-110" />
                      <p className="text-2xl font-bold text-charcoal tracking-tight">
                        {item.counter}
                      </p>
                      <p className="text-xs font-semibold text-charcoal mt-1">
                        {item.label}
                      </p>
                      <p className="text-[11px] text-charcoal-muted mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
