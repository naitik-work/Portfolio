import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      id: '01',
      title: 'Cummins Scholar',
      badge: '100% Fee Waiver Scholarship',
      description:
        'Selected as a Cummins Scholar and awarded a scholarship providing a 100% academic fee waiver through the Cummins Foundation.',
      issuer: 'Cummins Foundation',
      icon: Award,
    },
    {
      id: '02',
      title: 'Winner — Build a Startup in 3 Hours Challenge',
      badge: '1st Place Challenge Winner',
      description:
        'Winner of the "Build a Startup in 3 Hours" challenge organized by Sheryians Coding School.',
      issuer: 'Sheryians Coding School',
      icon: Trophy,
    },
    {
      id: '03',
      title: 'Winner — Making Money Using Your Technical Skills in a Day',
      badge: '1st Place Challenge Winner',
      description:
        'Winner of the "Making Money Using Your Technical Skills in a Day" challenge organized by Sheryians Coding School.',
      issuer: 'Sheryians Coding School',
      icon: Star,
    },
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-subtle text-gold-accent text-xs font-semibold uppercase tracking-wider mb-4 border border-gold-border/60">
            Recognition & Honors
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            Things I'm Proud Of
          </h2>
          <p className="text-charcoal-muted mt-2 text-base">
            Academic scholarships and competitive development milestones.
          </p>
        </div>

        {/* List Layout */}
        <div className="space-y-6 max-w-4xl">
          {achievements.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white p-6 sm:p-8 rounded-2xl border border-charcoal/10 shadow-subtle hover:border-gold-accent/40 hover:shadow-card transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gold-subtle text-gold-accent border border-gold-border/60 shrink-0">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-gold-accent">
                          [{item.id}]
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-charcoal tracking-tight group-hover:text-gold-accent transition-colors">
                          {item.title}
                        </h3>
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
