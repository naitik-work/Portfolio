import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap } from 'lucide-react';
import { HeadingReveal } from './motion/MotionHelpers';

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 70%'],
  });

  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-subtle text-teal-accent text-xs font-semibold uppercase tracking-wider mb-4 border border-teal-border/40">
            Career & Education
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            <HeadingReveal>Experience & Education</HeadingReveal>
          </h2>
          <p className="text-charcoal-muted mt-2 text-base">
            Hands-on software engineering apprenticeships and formal computer science foundations.
          </p>
        </div>

        {/* Timeline Container with Animated Progress Line */}
        <div ref={containerRef} className="max-w-4xl relative pl-6 sm:pl-8 space-y-12">
          
          {/* Static Track Line */}
          <div className="absolute left-[3px] sm:left-[7px] top-3 bottom-3 w-0.5 bg-charcoal/10" />

          {/* Animated Scroll Progress Line */}
          <motion.div
            style={{ scaleY: lineHeight }}
            className="absolute left-[3px] sm:left-[7px] top-3 bottom-3 w-0.5 bg-teal-accent origin-top"
          />

          {/* Timeline Item 01: Apprenticeship @ Sheryians */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            {/* Timeline Circle with Spring Pop */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="absolute -left-[30px] sm:-left-[38px] top-1.5 w-4 h-4 rounded-full bg-teal-accent ring-4 ring-bg-light shadow-xs z-10"
            />

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-charcoal/10 shadow-card hover:border-teal-border/70 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-charcoal">
                      Full-Stack Trainee — Apprenticeship
                    </h3>
                    <span className="px-2.5 py-0.5 text-xs font-semibold bg-teal-subtle text-teal-accent border border-teal-border/40 rounded-full">
                      Ongoing
                    </span>
                  </div>
                  <p className="text-base font-semibold text-teal-accent mt-1 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span>Sheryians Coding School</span>
                    <span className="text-charcoal/20 select-none">•</span>
                    <span className="text-xs font-normal text-charcoal-muted flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> Bhopal, Madhya Pradesh / Remote
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-charcoal-muted bg-bg-light px-3 py-1.5 rounded-lg border border-charcoal/5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Present Apprentice Program</span>
                </div>
              </div>

              <p className="text-charcoal-muted text-base leading-relaxed mb-6">
                Undergoing hands-on training in full-stack web development covering JavaScript, React.js, Node.js, Express.js, and MongoDB. Building and debugging MERN applications while strengthening skills in frontend development, backend APIs, databases, responsive web development, and AI-assisted engineering workflows.
              </p>

              {/* Specific focus areas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-charcoal/10">
                <div className="flex items-start gap-2 text-xs text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                  <span>Full-stack application development with React.js, Node.js, and Express.js</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                  <span>REST API design, JWT authentication, and HTTP-only cookie security</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                  <span>MongoDB schema design, data modeling, compound indexing, and queries</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                  <span>AI-assisted development to analyze specs, debug issues, and accelerate delivery</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline Item 02: B.Tech CSE @ JUET Guna */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative"
          >
            {/* Timeline Circle with Spring Pop */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
              className="absolute -left-[30px] sm:-left-[38px] top-1.5 w-4 h-4 rounded-full bg-gold-accent ring-4 ring-bg-light shadow-xs z-10"
            />

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-charcoal/10 shadow-card hover:border-gold-accent/60 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-charcoal">
                      B.Tech in Computer Science and Engineering
                    </h3>
                    <span className="px-2.5 py-0.5 text-xs font-semibold bg-gold-subtle text-gold-accent border border-gold-border/60 rounded-full font-mono">
                      CGPA: 8.0
                    </span>
                  </div>
                  <p className="text-base font-semibold text-charcoal mt-1 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-gold-accent" />
                    <span>Jaypee University of Engineering and Technology</span>
                    <span className="text-charcoal/20 select-none">•</span>
                    <span className="text-xs font-normal text-charcoal-muted flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> Guna, India
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-charcoal-muted bg-bg-light px-3 py-1.5 rounded-lg border border-charcoal/5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>2023 – 2027</span>
                </div>
              </div>

              <p className="text-charcoal-muted text-sm leading-relaxed">
                Core coursework spanning Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks. Selected as a <strong className="text-charcoal font-semibold">Cummins India Scholar</strong> with a full academic fee waiver for consistent academic excellence.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
