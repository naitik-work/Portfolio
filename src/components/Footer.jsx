import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-white border-t border-charcoal/10 text-xs text-charcoal-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-medium text-charcoal">
            © {new Date().getFullYear()} Naitik Chitransh · Full-Stack / MERN Developer
          </p>
          <p className="text-[11px] text-charcoal-light mt-0.5">
            Apprentice at Sheryians Coding School · B.Tech CSE Final Year (JUET)
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/naitik-work"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="#projects"
            className="hover:text-teal-accent transition-colors"
          >
            Projects
          </a>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-charcoal hover:text-teal-accent transition-colors p-1.5 rounded-lg bg-bg-light border border-charcoal/10"
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
