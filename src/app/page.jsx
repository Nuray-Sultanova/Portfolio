"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Github, Linkedin } from "lucide-react";

import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Resume from "./resume/page";

const Home = () => {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 selection:bg-rose-500/30 overflow-x-hidden relative">
      {/* Arxa Fon İşıqları - Standart Blur Klassları */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-rose-600/10 blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-full h-96 bg-blue-600/10 blur-3xl opacity-50" />
      </div>

      <main className="relative z-10 pt-24 md:pt-32 pb-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-20 md:space-y-32">
          {/* HERO SECTION */}
          <section className="w-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-6 py-16 md:p-24 relative overflow-hidden backdrop-blur-xl flex flex-col items-center justify-center text-center group">
            {/* Animasiyalı Badge */}
            <div className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 transition-transform hover:scale-105">
              <Sparkles size={14} className="text-rose-400" />
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-zinc-300">
                Digital Architect
              </span>
            </div>

            {/* Ad və Soyad - Mobil  dinamik ölçülər */}
            <div className="relative z-10 w-full">
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none uppercase">
                <span className="block text-white">Nuray</span>
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-zinc-100 to-rose-500">
                  Sultanova
                </span>
              </h1>

              {/* Animasiyalı Alt Xətt */}
              <div className="mt-8 md:mt-10 h-1 w-32 md:w-48 mx-auto rounded-full bg-white/10 overflow-hidden relative">
                <div className="absolute inset-0 bg-rose-500 w-full animate-shimmer" />
              </div>
            </div>

            {/* Təsvir mətni */}
            <p className="mt-8 md:mt-10 max-w-xl mx-auto text-zinc-400 text-base md:text-xl font-light leading-relaxed px-2">
              Mükəmməl interfeyslər və{" "}
              <span className="text-white border-b border-rose-500/50">
                təhlükəsiz kodlar
              </span>{" "}
              inşa edirəm.
            </p>

            {/* Düymələr - Mobildə w-full, Tabletdən sonra normal */}
            <div className="relative z-10 mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto">
              <Link
                href="#projects"
                className="w-full sm:w-auto group flex items-center justify-center gap-2 px-10 py-4 bg-white text-black font-bold rounded-full text-xs uppercase tracking-widest transition-all hover:bg-rose-500 hover:text-white active:scale-95"
              >
                Layihələrim
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  className="p-4 rounded-full bg-white/5 border border-white/10 hover:border-rose-500 hover:text-rose-500 transition-all active:scale-90"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="p-4 rounded-full bg-white/5 border border-white/10 hover:border-rose-500 hover:text-rose-500 transition-all active:scale-90"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </section>

          {/* Bölmələr - Mobil üçün pt-16, Desktop üçün pt-24 */}
          <div id="about" className="pt-16 md:pt-24 scroll-mt-20">
            <About />
          </div>

          <div id="projects" className="pt-16 md:pt-24 scroll-mt-20">
            <Projects />
          </div>

          <div id="contact" className="pt-16 md:pt-24 scroll-mt-20">
            <Contact />
          </div>

          <div id="resume" className="pt-16 md:pt-24 scroll-mt-20 pb-20">
            <Resume />
          </div>
        </div>
      </main>

      {/* Qlobal Animasiyalar və Scroll ayarı */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite linear;
        }
        html {
          scroll-behavior: smooth;
        }

        body {
          overflow-x: hidden;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Home;
