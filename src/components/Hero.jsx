import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Hero() {
  const techPills = ['React', 'Node.js', 'MongoDB', 'JavaScript'];
  const techStrip = [
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'Socket.io',
    'Git',
  ];

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-subtle text-teal-accent border border-teal-border/40 text-xs font-semibold uppercase tracking-widest mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-accent" />
              <span>FULL-STACK DEVELOPER · MERN</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal leading-[1.15] mb-6">
              I build web applications that{' '}
              <span className="font-serif italic font-normal text-teal-accent">
                solve real problems.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-charcoal-muted font-normal leading-relaxed max-w-2xl mb-8">
              I'm Naitik Chitransh, a final-year Computer Science student and MERN Stack Developer currently working as an Apprentice at Sheryians Coding School.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-accent text-white font-medium text-sm shadow-subtle hover:bg-teal-hover transition-all duration-200 group"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="https://github.com/naitik-work"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-charcoal font-medium text-sm border border-charcoal/15 shadow-subtle hover:border-charcoal/30 hover:bg-bg-subtle/50 transition-all duration-200"
              >
                <GithubIcon className="w-4 h-4 text-charcoal" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-charcoal-muted" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Editorial Photo Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative max-w-sm w-full">
              {/* Editorial Outer Frame */}
              <div className="relative p-3 bg-white rounded-2xl border border-charcoal/10 shadow-editorial">
                
                {/* Photo container */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-bg-subtle">
                  <img
                    src="/naitik-profile.jpg"
                    alt="Naitik Chitransh - Professional Portrait"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle vignette/border overlay */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-charcoal/5 rounded-xl pointer-events-none" />
                </div>

                {/* Subtle tech labels floating near the portrait border */}
                <div className="pt-3 px-1 flex flex-wrap items-center justify-between gap-2">
                  {techPills.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-bg-light text-charcoal-muted border border-charcoal/10 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Editorial decorative accent card */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-charcoal text-bg-light p-3.5 rounded-xl shadow-lg border border-charcoal/20 items-center gap-3">
                <Code2 className="w-5 h-5 text-gold-accent" />
                <div>
                  <p className="text-xs text-charcoal-light font-medium">Current Status</p>
                  <p className="text-xs font-semibold text-white">Apprentice @ Sheryians</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Technology Strip below Hero */}
        <div className="mt-20 pt-8 border-t border-charcoal/10">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-charcoal-muted mb-4">
            Core Technology Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-3 text-sm sm:text-base font-medium text-charcoal/80">
            {techStrip.map((item, idx) => (
              <React.Fragment key={item}>
                <span className="hover:text-teal-accent transition-colors cursor-default">
                  {item}
                </span>
                {idx < techStrip.length - 1 && (
                  <span className="text-charcoal/20 select-none">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
