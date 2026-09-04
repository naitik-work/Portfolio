import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-subtle text-teal-accent text-xs font-semibold uppercase tracking-wider mb-4">
            Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            Currently Building & Learning
          </h2>
          <p className="text-charcoal-muted mt-2 text-base">
            Gaining practical development experience through immersive hands-on training.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl relative pl-6 sm:pl-8 border-l-2 border-charcoal/10 space-y-12">
          
          {/* Timeline Item 01: Apprentice @ Sheryians */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Timeline Circle */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-accent ring-4 ring-bg-light" />

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-charcoal/10 shadow-card">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-charcoal">
                      Apprentice
                    </h3>
                    <span className="px-2.5 py-0.5 text-xs font-semibold bg-teal-subtle text-teal-accent border border-teal-border/40 rounded-full">
                      Current
                    </span>
                  </div>
                  <p className="text-base font-semibold text-teal-accent mt-1">
                    Sheryians Coding School
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-charcoal-muted bg-bg-light px-3 py-1.5 rounded-lg border border-charcoal/5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Present Apprentice Program</span>
                </div>
              </div>

              <p className="text-charcoal-muted text-base leading-relaxed mb-6">
                Currently working as an apprentice at Sheryians Coding School, developing practical full-stack applications and strengthening skills in JavaScript, React, Node.js, Express.js, databases, and problem solving through hands-on development.
              </p>

              {/* Specific focus areas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-charcoal/10">
                <div className="flex items-start gap-2 text-xs text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                  <span>Full-Stack Web Development (MERN)</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                  <span>REST API & Backend Architecture</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                  <span>Database Design & Management (MongoDB)</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                  <span>Data Structures & Algorithmic Problem Solving</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
