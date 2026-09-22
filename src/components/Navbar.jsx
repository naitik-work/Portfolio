import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Achievements', href: '#achievements', id: 'achievements' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 130;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? 'bg-bg-light/92 backdrop-blur-md py-3 border-b border-charcoal/10 shadow-subtle'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Name */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-charcoal font-semibold text-lg tracking-tight transition-all hover:opacity-85 active:scale-[0.98]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-teal-accent animate-pulse" />
          <span className="tracking-tight">Naitik Chitransh</span>
        </a>

        {/* Center: Desktop Nav with LayoutId Active Indicator */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-charcoal-muted">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`py-1 relative transition-colors duration-200 group active:scale-95 ${
                  isActive ? 'text-teal-accent font-semibold' : 'hover:text-teal-accent'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavUnderline"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-accent rounded-full"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Resume Download CTA */}
          <a
            href="/Naitik-Chitransh-Resume.pdf"
            download="Naitik-Chitransh-Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-charcoal border border-charcoal/15 bg-white shadow-xs hover:border-gold-accent hover:text-gold-accent hover:-translate-y-0.5 active:scale-[0.96] transition-all duration-200"
            title="Download Naitik Chitransh Resume (PDF)"
          >
            <FileText className="w-3.5 h-3.5 text-gold-accent" />
            <span>Resume</span>
          </a>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-teal-accent border border-teal-accent/35 hover:bg-teal-accent hover:text-white hover:-translate-y-0.5 active:scale-[0.96] transition-all duration-200"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-charcoal hover:text-teal-accent active:scale-90 transition-all"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden fixed inset-x-0 top-[56px] sm:top-[60px] bg-bg-light/98 backdrop-blur-xl border-b border-charcoal/10 shadow-lg py-6 px-6"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-medium py-1.5 transition-colors active:scale-[0.98] ${
                      isActive
                        ? 'text-teal-accent font-semibold pl-2 border-l-2 border-teal-accent'
                        : 'text-charcoal hover:text-teal-accent'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-charcoal/10 flex flex-col gap-2.5">
                <a
                  href="/Naitik-Chitransh-Resume.pdf"
                  download="Naitik-Chitransh-Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-xl text-sm font-semibold bg-white border border-charcoal/15 text-charcoal hover:border-gold-accent hover:text-gold-accent active:scale-[0.97] transition-all shadow-xs"
                >
                  <FileText className="w-4 h-4 text-gold-accent" />
                  <span>Download Resume (PDF)</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-xl text-sm font-semibold bg-teal-accent text-white hover:bg-teal-hover active:scale-[0.97] transition-all shadow-xs"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
