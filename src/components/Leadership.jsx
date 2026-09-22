import React from 'react';
import { motion } from 'framer-motion';
import { Users, Mic } from 'lucide-react';
import { HeadingReveal } from './motion/MotionHelpers';

export default function Leadership() {
  const leadershipRoles = [
    {
      title: 'Curation Team Co-Head',
      organization: 'TEDx-JUET',
      timeline: '2025 – Present · Guna, India',
      icon: Mic,
      description:
        'Leading the speaker curation committee, screening proposals, coaching keynote speakers, and orchestrating theme cohesion for the annual university TEDx conference.',
      highlights: ['Speaker curation & preparation', 'Idea selection & narrative editing', 'Stage delivery coordination'],
    },
    {
      title: 'Joint Secretary',
      organization: 'Bitwise Programming Club — JUET',
      timeline: '2025 – Present · Guna, India',
      icon: Users,
      description:
        'Directing university-wide algorithmic workshops, mentoring junior peers in data structures and web development, and coordinating departmental coding hackathons.',
      highlights: ['University coding contests', 'Technical peer mentorship', 'Full-stack development sessions'],
    },
  ];

  return (
    <section className="py-16 bg-bg-subtle/30 border-t border-charcoal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-subtle text-teal-accent text-xs font-semibold uppercase tracking-wider mb-4 border border-teal-border/40">
            Leadership & Campus Initiatives
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            <HeadingReveal>Community & Technical Leadership</HeadingReveal>
          </h2>
        </div>

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadershipRoles.map((role, idx) => {
            const IconComp = role.icon;
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group bg-white p-7 sm:p-8 rounded-2xl border border-charcoal/10 shadow-card hover:border-teal-border/70 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-teal-subtle text-teal-accent border border-teal-border/40 group-hover:scale-105 transition-transform duration-200">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-charcoal group-hover:text-teal-accent transition-colors duration-200">{role.title}</h3>
                      <p className="text-xs font-semibold text-teal-accent">{role.organization}</p>
                      <p className="text-[11px] text-charcoal-muted mt-0.5">{role.timeline}</p>
                    </div>
                  </div>

                  <p className="text-charcoal-muted text-sm leading-relaxed mb-6">
                    {role.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-charcoal/10 flex flex-wrap gap-2">
                  {role.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-medium bg-bg-light text-charcoal-muted border border-charcoal/5 rounded-md hover:border-teal-border/40 hover:text-teal-accent transition-colors duration-150 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
