import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function GitHubCallout() {
  return (
    <section className="py-16 bg-bg-dark text-white border-y border-charcoal/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 p-8 sm:p-12 bg-bg-darkCard rounded-3xl border border-white/10 shadow-editorial">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-teal-border text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Open Source & Code</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              More code lives on GitHub.
            </h2>
            <p className="text-charcoal-light mt-3 text-base sm:text-lg leading-relaxed">
              Explore full repositories, commits, and experiments across modern React 19, Socket.IO WebSockets, LangChain AI agents, and full-stack MERN architectures.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="https://github.com/naitik-work"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-teal-accent text-white font-semibold text-sm hover:bg-teal-hover hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-lg group"
            >
              <GithubIcon className="w-5 h-5" />
              <span>Visit GitHub</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
