import React from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, Layers, GraduationCap } from 'lucide-react';

export default function About() {
  const skillsList = [
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'REST APIs',
    'Authentication',
    'Real-time communication',
    'Responsive UI',
    'Git/GitHub',
  ];

  const snapshotMetrics = [
    { label: 'Projects Built', value: '6+', icon: Code, desc: 'Full-stack applications' },
    { label: 'Problem Solving', value: '200+', icon: BookOpen, desc: 'LeetCode problems solved' },
    { label: 'Core Specialization', value: 'MERN Stack', icon: Layers, desc: 'React, Node, Express, Mongo' },
    { label: 'Education Status', value: 'Final-Year CSE', icon: GraduationCap, desc: 'JUET, Guna' },
  ];

  return (
    <section id="about" className="py-20 bg-bg-subtle/50 border-y border-charcoal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-subtle text-teal-accent text-xs font-semibold uppercase tracking-wider mb-4">
              About Me
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight mb-6">
              I enjoy turning ideas into{' '}
              <span className="font-serif italic font-normal text-teal-accent">
                working products.
              </span>
            </h2>

            <div className="space-y-4 text-charcoal-muted leading-relaxed text-base sm:text-lg">
              <p>
                I am a final-year Computer Science & Engineering student at Jaypee University of Engineering and Technology (JUET), Guna. My focus is on building functional, responsive, and practical web applications.
              </p>
              <p>
                Currently, I am an Apprentice at <strong className="text-charcoal font-semibold">Sheryians Coding School</strong>, where I spend my time strengthening my full-stack capabilities, mastering JavaScript fundamentals, building scalable backends, and refining user interfaces through hands-on development work.
              </p>
            </div>

            {/* Core Competencies Tag Cloud */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-charcoal-muted mb-3">
                Hands-on Experience With:
              </p>
              <div className="flex flex-wrap gap-2">
                {skillsList.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium bg-white text-charcoal border border-charcoal/10 rounded-lg shadow-subtle"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Developer Snapshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-charcoal/10 shadow-card">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-teal-accent mb-6">
                Developer Snapshot
              </h3>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {snapshotMetrics.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="p-4 rounded-xl bg-bg-light border border-charcoal/5 hover:border-teal-border/40 transition-colors"
                    >
                      <IconComponent className="w-5 h-5 text-teal-accent mb-2" />
                      <p className="text-2xl font-bold text-charcoal tracking-tight">
                        {item.value}
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
