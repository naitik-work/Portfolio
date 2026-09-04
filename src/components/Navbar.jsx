import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-light/90 backdrop-blur-md py-3 border-b border-charcoal/10 shadow-subtle'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Name */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-charcoal font-semibold text-lg tracking-tight transition-opacity hover:opacity-80"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-teal-accent animate-pulse" />
          <span>Naitik Chitransh</span>
        </a>

        {/* Right Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-charcoal-muted">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-teal-accent transition-colors py-1 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-accent transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-teal-accent border border-teal-accent/30 hover:bg-teal-accent hover:text-white transition-all duration-200"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-charcoal hover:text-teal-accent transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-bg-light/98 backdrop-blur-xl border-b border-charcoal/10 shadow-lg py-6 px-6 transition-all">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-charcoal hover:text-teal-accent transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-charcoal/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-sm font-semibold bg-teal-accent text-white hover:bg-teal-hover transition-colors"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
