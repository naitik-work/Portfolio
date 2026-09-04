import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, ArrowUpRight, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-white p-8 sm:p-14 rounded-3xl border border-charcoal/10 shadow-editorial max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-subtle text-teal-accent text-xs font-semibold uppercase tracking-wider mb-4">
                Get In Touch
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-charcoal tracking-tight mb-4">
                Let's build{' '}
                <span className="font-serif italic font-normal text-teal-accent">
                  something.
                </span>
              </h2>

              <p className="text-charcoal-muted text-base sm:text-lg leading-relaxed mb-8">
                I'm currently open to opportunities where I can contribute, learn, and grow as a full-stack developer.
              </p>

              {/* Action Buttons Grid */}
              <div className="flex flex-wrap items-center gap-3">

                {/* GitHub */}
                <a
                  href="https://github.com/naitik-work"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-charcoal text-white text-xs sm:text-sm font-semibold hover:bg-teal-accent transition-colors shadow-subtle"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {/* LinkedIn Placeholder */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-bg-light text-charcoal border border-charcoal/15 text-xs sm:text-sm font-semibold hover:border-teal-accent hover:text-teal-accent transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-charcoal-muted" />
                </a>


                {/* Download Resume Placeholder */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gold-subtle text-charcoal border border-gold-border/70 text-xs sm:text-sm font-semibold hover:bg-gold-accent hover:text-white transition-colors"
                >
                  <FileText className="w-4 h-4 text-gold-accent" />
                  <span>Download Resume</span>
                </a>

              </div>
            </div>

            {/* Right Card / Contact Note */}
            <div className="lg:col-span-5 bg-bg-light p-6 sm:p-8 rounded-2xl border border-charcoal/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-teal-subtle text-teal-accent border border-teal-border/40">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-charcoal">Quick Contact Info</h3>
                  <p className="text-xs text-charcoal-muted">Ready to connect</p>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex justify-between py-2 border-b border-charcoal/10">
                  <span className="text-charcoal-muted">Current Role</span>
                  <span className="font-semibold text-charcoal">MERN Apprentice</span>
                </div>
                <div className="flex justify-between py-2 border-b border-charcoal/10">
                  <span className="text-charcoal-muted">Education</span>
                  <span className="font-semibold text-charcoal">Final-Year B.Tech CSE</span>
                </div>
                <div className="flex justify-between py-2 border-b border-charcoal/10">
                  <span className="text-charcoal-muted">University</span>
                  <span className="font-semibold text-charcoal">JUET, Guna (M.P.)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-charcoal-muted">Availability</span>
                  <span className="font-semibold text-teal-accent">Open to roles</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-charcoal-light italic">
                * Social & email links can be easily updated in source code.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
