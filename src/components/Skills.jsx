import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Cpu, Wrench, ShieldCheck, Layout, Sparkles } from 'lucide-react';
import { HeadingReveal } from './motion/MotionHelpers';

export default function Skills() {
  const skillCategories = [
    {
      name: 'Languages',
      icon: Code,
      badge: 'Core Syntax',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'C', 'C++', 'HTML5', 'CSS3'],
    },
    {
      name: 'Frontend Development',
      icon: Layout,
      badge: 'Client Layer',
      skills: [
        'React.js',
        'React 19',
        'Next.js',
        'Redux Toolkit',
        'React Router',
        'Tailwind CSS',
        'SCSS',
        'Vite',
        'Responsive Design',
      ],
    },
    {
      name: 'Backend Architecture',
      icon: Server,
      badge: 'Server Layer',
      skills: [
        'Node.js',
        'Express.js',
        'REST APIs',
        'Socket.IO',
        'WebSockets',
        'Middleware',
        'API Integration',
      ],
    },
    {
      name: 'Databases & Storage',
      icon: Database,
      badge: 'Persistence',
      skills: ['MongoDB', 'Mongoose', 'MySQL', 'Redis', 'Schema Design', 'Compound Indexing', 'Data Modeling'],
    },
    {
      name: 'AI & LLM Engineering',
      icon: Sparkles,
      badge: 'Intelligent Systems',
      skills: [
        'LangChain',
        'LangGraph',
        'Google Gemini',
        'OpenRouter',
        'Mistral AI',
        'AI Agents',
        'Tool Calling',
        'RAG',
        'Web Search',
        'Prompt Engineering',
      ],
    },
    {
      name: 'Authentication & Security',
      icon: ShieldCheck,
      badge: 'Application Security',
      skills: [
        'JWT',
        'HTTP-only Cookies',
        'bcryptjs',
        'RBAC',
        'OTP',
        'Email Verification',
        'Zod',
        'Helmet',
        'CORS',
        'Rate Limiting',
        'Input Validation',
      ],
    },
    {
      name: 'Core CS Foundations',
      icon: Cpu,
      badge: 'Computer Science',
      skills: [
        'Data Structures & Algorithms',
        'OOP',
        'DBMS',
        'Operating Systems',
        'Computer Networks',
      ],
    },
    {
      name: 'Tools & DevOps',
      icon: Wrench,
      badge: 'Delivery & CI/CD',
      skills: [
        'Git',
        'GitHub',
        'Docker',
        'Postman',
        'VS Code',
        'Render',
        'Vercel',
        'MongoDB Atlas',
        'Nodemailer',
      ],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-subtle text-teal-accent text-xs font-semibold uppercase tracking-wider mb-4 border border-teal-border/40">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            <HeadingReveal>Skills & Technical Competencies</HeadingReveal>
          </h2>
          <p className="text-charcoal-muted mt-2 text-base">
            Verified technologies, frameworks, and system foundations I leverage to architect full-stack applications.
          </p>
        </div>

        {/* Categories Grid (2 or 4 columns based on screen) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="group bg-white p-6 rounded-2xl border border-charcoal/10 shadow-subtle hover:border-teal-border/70 hover:shadow-card hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-charcoal/10">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-bg-light text-teal-accent border border-charcoal/5 group-hover:scale-110 group-hover:bg-teal-subtle group-hover:border-teal-border/40 transition-all duration-200">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-charcoal group-hover:text-teal-accent transition-colors duration-200">{cat.name}</h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium bg-bg-light text-charcoal border border-charcoal/10 rounded-lg transition-all duration-150 hover:bg-teal-subtle hover:text-teal-accent hover:border-teal-border/60 hover:-translate-y-0.5 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-charcoal/5 flex items-center justify-between text-[11px] text-charcoal-muted">
                  <span className="font-mono text-teal-accent">{cat.badge}</span>
                  <span>{cat.skills.length} skills</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
