"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? "py-4 bg-black/80 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black tracking-tighter uppercase text-rose-500">
          Nuray<span className="text-rose-500 italic text-3xl">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
            {['About', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`} className="hover:text-rose-500 transition-colors flex items-center gap-1 group">
                  {item}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                </Link>
              </li>
            ))}
          </ul>
          
          <Link 
            href="/resume.pdf" 
            className="flex items-center gap-2 px-6 py-2.5 bg-rose-500 text-white rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-rose-600 transition-all shadow-lg shadow-rose-500/20"
          >
            <FileText size={14} />
            Resume
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-black z-[-1] flex flex-col items-center justify-center gap-8 text-3xl font-black uppercase tracking-tighter transition-all">
          <Link href="#about" onClick={() => setMobileMenu(false)}>About</Link>
          <Link href="#projects" onClick={() => setMobileMenu(false)}>Projects</Link>
          <Link href="#contact" onClick={() => setMobileMenu(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;