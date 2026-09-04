import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Cpu, Wrench, Shield, Globe } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      name: 'Languages',
      icon: Code,
      skills: ['JavaScript', 'HTML5', 'CSS3'],
    },
    {
      name: 'Frontend',
      icon: Globe,
      skills: ['React.js', 'Tailwind CSS'],
    },
    {
      name: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express.js'],
    },
    {
      name: 'Database',
      icon: Database,
      skills: ['MongoDB', 'Mongoose'],
    },
    {
      name: 'Real-Time & Auth',
      icon: Shield,
      skills: ['Socket.io', 'JWT', 'Nodemailer'],
    },
    {
      name: 'Tools & Platform',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'REST APIs', 'Vercel', 'Render'],
    },
    {
      name: 'Core CS Foundations',
      icon: Cpu,
      skills: ['Data Structures & Algorithms', 'OOP', 'DBMS'],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-subtle text-teal-accent text-xs font-semibold uppercase tracking-wider mb-4">
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-charcoal-muted mt-2 text-base">
            Technologies and core fundamentals I actively use to build full-stack web products.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl border border-charcoal/10 shadow-subtle hover:border-teal-border/50 hover:shadow-card transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-charcoal/10">
                  <div className="p-2.5 rounded-lg bg-bg-light text-teal-accent border border-charcoal/5">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-charcoal">{cat.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-semibold bg-bg-light text-charcoal border border-charcoal/10 rounded-lg transition-colors hover:bg-teal-subtle hover:text-teal-accent hover:border-teal-border/40 cursor-default"
                    >
                      {skill}
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
