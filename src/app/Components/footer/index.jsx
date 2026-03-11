"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 pb-12 mt-10">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-6 bg-[#0C0C0C] border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between group">
            <Link href="/" className="text-3xl font-black tracking-tighter uppercase inline-block text-rose-500 ">
              Nuray<span className="text-rose-500 italic">.</span>
            </Link>
            <p className="mt-6 text-slate-500 max-w-xs text-sm leading-relaxed font-light">
              Fikirləri koda, kodları isə <span className="text-white">mükəmməl təcrübəyə</span> çevirirəm.
            </p>
          </div>

          <div className="md:col-span-3 bg-[#0C0C0C] border border-white/5 rounded-[2.5rem] p-10">
            <h4 className="text-slate-500 font-mono text-[10px] uppercase tracking-widest mb-8 italic">Menu</h4>
            <ul className="space-y-4 text-rose-500 ">
              <li><Link href="#about" className="text-sm font-bold uppercase hover:text-rose-500 transition-all">About</Link></li>
              <li><Link href="#projects" className="text-sm font-bold uppercase hover:text-rose-500 transition-all">Projects</Link></li>
              <li><Link href="#contact" className="text-sm font-bold uppercase hover:text-rose-500 transition-all">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 bg-[#0C0C0C] border border-white/5 rounded-[2.5rem] p-10">
            <h4 className="text-slate-500 font-mono text-[10px] uppercase tracking-widest mb-8 italic">Socials</h4>
            <ul className="space-y-4 font-bold text-sm uppercase text-rose-500 ">
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-all flex justify-between">LinkedIn <span>↗</span></a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-all flex justify-between">GitHub <span>↗</span></a></li>
            </ul>
          </div>
        </div>

        <div className="bg-[#0C0C0C] border border-white/5 rounded-full px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-slate-600 uppercase tracking-widest">
          <p>© {currentYear} — Handcrafted by Nuray S.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-slate-400">System Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;