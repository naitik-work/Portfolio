import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Code2, FileText } from 'lucide-react';
import { GithubIcon } from './Icons';
import { HeadingReveal, MagneticButton } from './motion/MotionHelpers';

export default function Hero() {
  const techPills = ['React 19', 'Node.js', 'Socket.IO', 'LangChain'];
  const techStrip = [
    'JavaScript',
    'TypeScript',
    'React 19',
    'Node.js',
    'Express 5',
    'MongoDB',
    'Socket.IO',
    'LangChain',
    'Git',
  ];

  // Sequenced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Small Label with Gentle Pulse Dot */}
            <motion.div variants={itemVariants} className="w-fit mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-subtle text-teal-accent border border-teal-border/40 text-xs font-semibold uppercase tracking-widest shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-accent opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-accent" />
                </span>
                <span>SOFTWARE ENGINEER · MERN & AI SYSTEMS</span>
              </div>
            </motion.div>

            {/* Main Heading with Mask Reveal */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal leading-[1.14]">
                <HeadingReveal delay={0.1}>I build web applications that</HeadingReveal>{' '}
                <span className="font-serif italic font-normal text-teal-accent inline-block">
                  <HeadingReveal delay={0.22}>solve real problems.</HeadingReveal>
                </span>
              </h1>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-charcoal-muted font-normal leading-relaxed max-w-2xl mb-8"
            >
              I'm <strong className="font-semibold text-charcoal">Naitik Chitransh</strong>, a final-year Computer Science student and Full Stack Developer specializing in MERN-based, AI-powered, and real-time applications. Currently an Apprentice at <strong className="font-semibold text-charcoal">Sheryians Coding School</strong>.
            </motion.p>

            {/* Action Buttons with Magnetic Pull & Tactile Press */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5">
              {/* View Projects */}
              <MagneticButton maxDistance={4}>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-accent text-white font-medium text-sm shadow-subtle hover:bg-teal-hover hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 group"
                >
                  <span>View Projects</span>
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                </a>
              </MagneticButton>

              {/* Download Resume */}
              <MagneticButton maxDistance={4}>
                <a
                  href="/Naitik-Chitransh-Resume.pdf"
                  download="Naitik-Chitransh-Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gold-subtle text-charcoal font-medium text-sm border border-gold-border/80 shadow-subtle hover:bg-gold-accent hover:text-white hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 group"
                  title="Download Naitik Chitransh Resume (PDF)"
                >
                  <FileText className="w-4 h-4 text-gold-accent group-hover:text-white transition-colors" />
                  <span>Resume PDF</span>
                </a>
              </MagneticButton>

              {/* GitHub */}
              <MagneticButton maxDistance={4}>
                <a
                  href="https://github.com/naitik-work"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white text-charcoal font-medium text-sm border border-charcoal/15 shadow-subtle hover:border-charcoal/30 hover:bg-bg-subtle/50 hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200"
                >
                  <GithubIcon className="w-4 h-4 text-charcoal" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 text-charcoal-muted" />
                </a>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Photo Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative max-w-sm w-full">
              {/* Editorial Outer Frame */}
              <div className="relative p-3 bg-white rounded-2xl border border-charcoal/10 shadow-editorial hover:shadow-2xl transition-shadow duration-300">
                
                {/* Photo container */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-bg-subtle group">
                  <img
                    src="/naitik-profile.jpg"
                    alt="Naitik Chitransh — Software Engineer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle vignette/border overlay */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-charcoal/5 rounded-xl pointer-events-none" />
                </div>

                {/* Subtle tech labels floating near the portrait border */}
                <div className="pt-3 px-1 flex flex-wrap items-center justify-between gap-2">
                  {techPills.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-bg-light text-charcoal-muted border border-charcoal/10 rounded-md hover:border-teal-border hover:text-teal-accent hover:-translate-y-0.5 transition-all duration-150 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Editorial decorative accent card with gentle pulse */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="hidden sm:flex absolute -bottom-5 -left-5 bg-charcoal text-bg-light p-3.5 rounded-xl shadow-lg border border-charcoal/20 items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-white/10 text-gold-accent">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-accent opacity-60" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold-accent" />
                    </span>
                    <p className="text-[11px] text-charcoal-light font-medium uppercase tracking-wider">Currently Building</p>
                  </div>
                  <p className="text-xs font-semibold text-white">Apprentice @ Sheryians</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Technology Strip below Hero with Staggered Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-20 pt-8 border-t border-charcoal/10"
        >
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-charcoal-muted mb-4">
            Core Technology Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-3 text-sm sm:text-base font-medium text-charcoal/80">
            {techStrip.map((item, idx) => (
              <React.Fragment key={item}>
                <span className="hover:text-teal-accent transition-colors cursor-default hover:-translate-y-0.5 inline-block duration-150">
                  {item}
                </span>
                {idx < techStrip.length - 1 && (
                  <span className="text-charcoal/20 select-none">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
