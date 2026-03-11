"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import About from './about/page';
import Projects from './projects/page';
import { Sparkles, ArrowRight, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-[#08080a] min-h-screen text-[#F5F5F7] selection:bg-rose-500/30 overflow-x-hidden font-sans relative">
      
      {/* --- ARXA FON EFFEKTLƏRİ (Saytı canlandıran hissə) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Sol yuxarıdakı bənövşəyi parıltı */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
        {/* Sağ mərkəzdəki rose parıltısı */}
        <div className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] bg-rose-600/10 blur-[150px] rounded-full" />
        {/* Alt tərəfdəki zərif göy dalğa */}
        <div className="absolute bottom-[-10%] left-[20%] w-[800px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* 1. ANA HERO BLOK */}
          <div className="md:col-span-8 bg-white/[0.02] border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden flex flex-col justify-center min-h-[500px] backdrop-blur-3xl shadow-2xl">
            {/* Kartın daxilindəki lokal işıq */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-rose-500/10 blur-[80px] rounded-full" />
            
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <Sparkles size={14} className="text-rose-400" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-rose-400">Digital Architect</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black tracking-[ -0.05em] leading-[0.85] uppercase">
                Nuray <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-white/30">
                  Sultanova
                </span>
              </h1>
              
              <p className="max-w-md text-slate-400 text-lg md:text-xl font-light leading-relaxed">
                Müasir texnologiyalarla <span className="text-white font-medium italic">estetik rəqəmsal təcrübələr</span> inşa edirəm. 
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <Link href="#projects" className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-black rounded-full text-sm uppercase transition-all duration-500 hover:bg-rose-500 hover:text-white hover:scale-105 active:scale-95">
                  Proyektlərim
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="h-12 w-[1px] bg-white/10 hidden sm:block" />
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold max-w-[100px]">
                  Based in <br /> Baku, AZE
                </p>
              </div>
            </div>
          </div>

          {/* 2. PROFİL ŞƏKLİ (Daha şık çərçivə) */}
          <div className="md:col-span-4 bg-[#0C0C0C] border border-white/10 rounded-[3rem] overflow-hidden relative group min-h-[500px] shadow-2xl">
            <Image 
              src="/my-photo.jpg" 
              alt="Nuray Sultanova"
              fill
              className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
              priority 
            />
            {/* Şəkil üzərində şüşə effekti overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-10 left-10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-[1px] bg-rose-500" />
                <p className="text-[10px] font-mono text-rose-400 tracking-widest uppercase italic">01 // Dev</p>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter italic">Creative<br/>Developer</h3>
            </div>
          </div>

          {/* 3. TEXNOLOGİYALAR (Qradient haşiyə effekti) */}
          <div className="md:col-span-4 bg-white/[0.02] border border-white/10 rounded-[3rem] p-10 flex flex-col justify-between hover:bg-white/[0.04] transition-all duration-500 group">
            <div className="p-4 bg-rose-500/10 rounded-2xl w-fit group-hover:rotate-12 transition-transform">
              <Zap size={24} className="text-rose-500" />
            </div>
            <div className="space-y-3">
              <h4 className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">Stack Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TS', 'Tailwind'].map(tech => (
                  <span key={tech} className="text-sm font-bold border-b border-white/10 pb-1">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* 4. CTA (Canlı Rəng) */}
          <div className="md:col-span-8 bg-gradient-to-br from-rose-600 to-rose-800 rounded-[3rem] p-10 md:p-16 flex items-center justify-between relative overflow-hidden group shadow-[0_20px_50px_rgba(225,29,72,0.2)]">
             <div className="relative z-10">
               <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-[0.9] tracking-[ -0.05em]">
                 Gəlin birlikdə <br /> yaradaq
               </h2>
               <Link href="#contact" className="mt-8 inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-all uppercase text-xs tracking-widest">
                 İşə başlayaq
                 <ArrowRight size={14} />
               </Link>
             </div>
             {/* Arxa fon dekoru */}
             <div className="absolute -right-10 -bottom-10 text-white opacity-10 text-[15rem] font-black italic select-none group-hover:scale-110 transition-transform duration-1000">
               NS
             </div>
          </div>

        </div>

        {/* Bölmələr arası boşluq və ayırıcı */}
        <div className="py-20">
          <div className="w-full h-1 bg-linear-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <About/>
        <Projects/>
      </main>
    </div>
  );
};

export default Home;