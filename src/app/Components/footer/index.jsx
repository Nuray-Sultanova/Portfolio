"use client";

import React from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
  ArrowUpRight,
  Heart,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 pb-12 mt-20">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Üst Grid Sistemi */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* 1. Brend və Missiya (Böyük Blok) */}
          <div className="md:col-span-6 bg-[#0C0C0C] border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between group hover:border-rose-500/20 transition-all duration-500">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-rose-500 bg-rose-500/5 group-hover:bg-rose-500 transition-all duration-500 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                  <span className="text-2xl font-black text-rose-500 group-hover:text-black transition-colors">
                    N
                  </span>
                </div>
              </div>
              <p className="text-slate-400 max-w-sm text-lg leading-relaxed font-light">
                İdeyaları təhlükəsiz kodla, kodları isə{" "}
                <span className="text-white font-medium">
                  unikal rəqəmsal təcrübələrlə
                </span>{" "}
                birləşdirirəm.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-3 text-rose-500/40 font-mono text-[10px] tracking-[0.3em] uppercase">
              <ShieldCheck size={16} />
              <span>Security Minded Frontend</span>
            </div>
          </div>

          {/* 2. Menu Linkləri (Kiçik Blok) */}
          <div className="md:col-span-3 bg-[#0C0C0C] border border-white/5 rounded-[2.5rem] p-10 group hover:border-rose-500/20 transition-all duration-500">
            <h4 className="text-slate-600 font-mono text-[10px] uppercase tracking-widest mb-8 italic">
              Naviqasiya
            </h4>
            <ul className="space-y-4">
              {["About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-bold uppercase text-slate-400 hover:text-rose-500 transition-all flex items-center justify-between group/link"
                  >
                    {item}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover/link:opacity-100 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Sosial Linklər (Kiçik Blok) */}
          <div className="md:col-span-3 bg-[#0C0C0C] border border-white/5 rounded-[2.5rem] p-10 group hover:border-rose-500/20 transition-all duration-500">
            <h4 className="text-slate-600 font-mono text-[10px] uppercase tracking-widest mb-8 italic">
              Sosial
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm font-bold uppercase text-slate-400 hover:text-white transition-all flex items-center gap-3"
                >
                  <Linkedin size={18} className="text-rose-500" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-bold uppercase text-slate-400 hover:text-white transition-all flex items-center gap-3"
                >
                  <Github size={18} className="text-rose-500" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:sul.dev"
                  className="text-sm font-bold uppercase text-slate-400 hover:text-white transition-all flex items-center gap-3"
                >
                  <Mail size={18} className="text-rose-500" /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Bar - Copyright və Status */}
        <div className="bg-[#0C0C0C] border border-white/5 rounded-full px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          <p>
            © {currentYear} — Handcrafted with{" "}
            <Heart size={10} className="inline text-rose-500 mx-1" /> by Nuray
          </p>

          <div className="flex items-center gap-3 bg-gray-500 border border-white/5 px-4 py-2 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-400">Available for new projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
