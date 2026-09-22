import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Code2 } from 'lucide-react';
import { HeadingReveal, AnimatedCounter } from './motion/MotionHelpers';

export default function Achievements() {
  const achievements = [
    {
      id: '01',
      title: 'Cummins India Scholar',
      badge: 'Full Academic Fee Waiver',
      description:
        'Awarded the prestigious Cummins India Scholarship for sustained academic excellence and engineering aptitude, providing a 100% academic fee waiver.',
      issuer: 'Cummins India Foundation',
      icon: Award,
    },
    {
      id: '02',
      title: 'Sheryians Coding School Hackathons',
      badge: <><AnimatedCounter value={2} suffix="×" /> Hackathon Winner</>,
      description:
        'Won two intense software engineering hackathons conducted by Sheryians Coding School by architecting, debugging, and pitching working full-stack applications within strict deadlines.',
      issuer: 'Sheryians Coding School',
      icon: Trophy,
    },
    {
      id: '03',
      title: 'TEDx-JUET Curation Lead',
      badge: 'Curation Head',
      description:
        'Headed the curation team at TEDx-JUET, leading speaker discovery, idea selection, speech structuring, and stage delivery execution for the university conference.',
      issuer: 'TEDx-JUET',
      icon: Star,
    },
    {
      id: '04',
      title: 'Competitive Programming',
      badge: <><AnimatedCounter value={200} suffix="+" /> LeetCode Solved</>,
      description:
        'Solved 200+ algorithmic challenges on LeetCode with deep consistency across arrays, strings, trees, graphs, dynamic programming, and system optimization.',
      issuer: 'LeetCode / CP',
      icon: Code2,
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-bg-subtle/30 border-t border-charcoal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-subtle text-gold-accent text-xs font-semibold uppercase tracking-wider mb-4 border border-gold-border/60">
            Honors & Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            <HeadingReveal>Key Achievements</HeadingReveal>
          </h2>
          <p className="text-charcoal-muted mt-2 text-base">
            Academic scholarships, competitive engineering milestones, and problem-solving benchmarks.
          </p>
        </div>

        {/* List Layout */}
        <div className="space-y-5 max-w-4xl">
          {achievements.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-white p-6 sm:p-7 rounded-2xl border border-charcoal/10 shadow-subtle hover:border-gold-accent/60 hover:shadow-card hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gold-subtle text-gold-accent border border-gold-border/60 shrink-0 group-hover:scale-105 transition-transform duration-200">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-gold-accent">
                          [{item.id}]
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-charcoal tracking-tight group-hover:text-gold-accent transition-colors duration-200">
                          {item.title}
                        </h3>
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-gold-subtle text-gold-accent border border-gold-border/50">
                          {item.badge}
                        </span>
                      </div>

                      <p className="text-charcoal-muted text-sm leading-relaxed max-w-2xl">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="sm:text-right shrink-0">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-bg-light text-charcoal-muted border border-charcoal/10 rounded-full">
                      {item.issuer}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
