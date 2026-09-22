import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, FileText, ArrowUpRight, Copy, Check, Send, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { HeadingReveal, MagneticButton } from './motion/MotionHelpers';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const email = 'naitikchs16@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleResumeClick = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 sm:p-14 rounded-3xl border border-charcoal/10 shadow-editorial max-w-5xl mx-auto hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-subtle text-teal-accent text-xs font-semibold uppercase tracking-wider mb-4 border border-teal-border/40">
                Get In Touch
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-charcoal tracking-tight mb-4">
                <HeadingReveal>Let's build</HeadingReveal>{' '}
                <span className="font-serif italic font-normal text-teal-accent inline-block">
                  <HeadingReveal delay={0.15}>something great.</HeadingReveal>
                </span>
              </h2>

              <p className="text-charcoal-muted text-base sm:text-lg leading-relaxed mb-6">
                I am actively seeking Software Engineer, Full-Stack Developer, and MERN engineering opportunities where I can contribute to production systems, solve non-trivial engineering problems, and continue shipping impactful code.
              </p>

              {/* Copy Email Button with Animated Toast Badge */}
              <div className="mb-8 relative inline-block">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-bg-light border border-charcoal/15 text-charcoal text-xs sm:text-sm font-medium hover:border-teal-border hover:bg-teal-subtle/40 active:scale-[0.97] transition-all duration-200 group"
                  title="Click to copy email address"
                >
                  <Mail className="w-4 h-4 text-teal-accent" />
                  <span className="font-mono">{email}</span>
                  <span className="inline-flex items-center gap-1 text-charcoal-muted text-xs ml-1 group-hover:text-teal-accent">
                    <Copy className="w-3.5 h-3.5" />
                    Copy
                  </span>
                </button>

                {/* Animated "Email Copied" Toast */}
                <AnimatePresence>
                  {copied && (
                    <motion.span
                      initial={{ opacity: 0, y: 6, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-full ml-3 top-1/2 -translate-y-1/2 inline-flex items-center gap-1.5 text-teal-accent font-semibold text-xs whitespace-nowrap bg-teal-subtle px-3 py-1.5 rounded-lg border border-teal-border/60 shadow-xs"
                    >
                      <Check className="w-3.5 h-3.5" />
                      Email copied ✓
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Action Buttons Grid with Magnetic Pull & Tactile Press */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Send Email Directly */}
                <MagneticButton maxDistance={4}>
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-accent text-white text-xs sm:text-sm font-semibold hover:bg-teal-hover hover:-translate-y-0.5 active:scale-[0.97] transition-all shadow-subtle group"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Email</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </MagneticButton>

                {/* LinkedIn Profile */}
                <MagneticButton maxDistance={4}>
                  <a
                    href="https://www.linkedin.com/in/naitik-chitransh-5b3b13270/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-charcoal border border-charcoal/15 text-xs sm:text-sm font-semibold hover:border-[#0A66C2] hover:text-[#0A66C2] hover:-translate-y-0.5 active:scale-[0.97] transition-all shadow-subtle"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-charcoal-muted" />
                  </a>
                </MagneticButton>

                {/* GitHub Profile */}
                <MagneticButton maxDistance={4}>
                  <a
                    href="https://github.com/naitik-work"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-charcoal text-white text-xs sm:text-sm font-semibold hover:bg-charcoal/90 hover:-translate-y-0.5 active:scale-[0.97] transition-all shadow-subtle"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-charcoal-light" />
                  </a>
                </MagneticButton>

                {/* Download Resume with Instant Confirmation */}
                <MagneticButton maxDistance={4}>
                  <a
                    href="/Naitik-Chitransh-Resume.pdf"
                    download="Naitik-Chitransh-Resume.pdf"
                    onClick={handleResumeClick}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gold-subtle text-charcoal border border-gold-border/80 text-xs sm:text-sm font-semibold hover:bg-gold-accent hover:text-white hover:-translate-y-0.5 active:scale-[0.97] transition-all shadow-subtle group"
                    title="Download Naitik Chitransh Resume (PDF)"
                  >
                    {downloaded ? (
                      <>
                        <Check className="w-4 h-4 text-teal-accent group-hover:text-white transition-colors" />
                        <span>Downloaded ✓</span>
                      </>
                    ) : (
                      <>
                        <FileText className="w-4 h-4 text-gold-accent group-hover:text-white transition-colors" />
                        <span>Download Resume</span>
                      </>
                    )}
                  </a>
                </MagneticButton>
              </div>
            </div>

            {/* Right Card / Recruiter Snapshot */}
            <div className="lg:col-span-5 bg-bg-light p-6 sm:p-8 rounded-2xl border border-charcoal/10 space-y-4 hover:border-teal-border/40 transition-colors duration-200">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-teal-subtle text-teal-accent border border-teal-border/40">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-charcoal">Quick Recruiter Snapshot</h3>
                  <p className="text-xs text-charcoal-muted">Ready to discuss opportunities</p>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex justify-between py-2 border-b border-charcoal/10">
                  <span className="text-charcoal-muted">Professional Title</span>
                  <span className="font-semibold text-charcoal">Software Engineer</span>
                </div>
                <div className="flex justify-between py-2 border-b border-charcoal/10">
                  <span className="text-charcoal-muted">Specialization</span>
                  <span className="font-semibold text-charcoal">MERN & AI Systems</span>
                </div>
                <div className="flex justify-between py-2 border-b border-charcoal/10">
                  <span className="text-charcoal-muted">Current Role</span>
                  <span className="font-semibold text-charcoal">Full-Stack Apprentice</span>
                </div>
                <div className="flex justify-between py-2 border-b border-charcoal/10">
                  <span className="text-charcoal-muted">Organization</span>
                  <span className="font-semibold text-charcoal">Sheryians Coding School</span>
                </div>
                <div className="flex justify-between py-2 border-b border-charcoal/10">
                  <span className="text-charcoal-muted">Education</span>
                  <span className="font-semibold text-charcoal">B.Tech CSE · CGPA 8.0</span>
                </div>
                <div className="flex justify-between py-2 border-b border-charcoal/10">
                  <span className="text-charcoal-muted">University</span>
                  <span className="font-semibold text-charcoal">JUET, Guna (2023–2027)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-charcoal-muted">Availability</span>
                  <span className="font-semibold text-teal-accent">Open to Software Roles</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-charcoal-muted italic">
                * Based in Guna / Bhopal, India · Open to on-site, hybrid, and remote roles.
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
