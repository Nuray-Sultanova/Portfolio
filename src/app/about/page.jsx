"use client";

import React from "react";
import {
  User,
  Code2,
  GraduationCap,
  Coffee,
  Globe2,
  Zap,
  Heart,
  Brackets,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Bölmə Başlığı */}
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-rose-500/10 rounded-2xl border border-rose-500/20 text-rose-500">
            <User size={28} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Haqqımda <span className="text-rose-500">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* 1. Bioqrafiya (Geniş Blok) */}
          <div className="md:col-span-7 bg-[#0C0C0C] border border-white/5 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-2 text-rose-500 font-mono text-xs uppercase tracking-[0.3em]">
              <Brackets size={14} />
               Story
            </div>
            <h3 className="text-3xl font-bold leading-tight">
              Kod yazmaq mənim üçün sadəcə iş deyil,{" "}
              <span className="text-white">rəqəmsal incəsənətdir</span>.
            </h3>
            <p className="text-slate-400 leading-relaxed font-light text-lg">
              Mən Nuray, frontend development sahəsinə maraq göstərən və bu
              istiqamətdə biliklərini inkişaf etdirən gənc developerəm. Hazırda
              əsasən React və Next.js texnologiyaları üzərində çalışaraq müasir
              və istifadəçi dostu interfeyslər yaratmağı öyrənirəm. Məqsədim
              biliklərimi praktik layihələrdə tətbiq edərək peşəkar frontend
              developer kimi inkişaf etmək və funksional, estetik veb
              interfeyslər hazırlamaqdır.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">6+</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                  ay Təcrübə
                </span>
              </div>
              <div className="w-1 h-10 bg-white/5 mx-4" />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">fərdi</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                   Layihələr
                </span>
              </div>
            </div>
          </div>

          {/* 2. Təhsil/Sertifikat (Kiçik Blok) */}
          <div className="md:col-span-5 bg-[#0C0C0C] border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between group hover:border-rose-500/20 transition-all">
            <div className="p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
              <GraduationCap size={32} className="text-rose-500" />
            </div>
            <div>
              <h4 className="text-xl font-bold my-2 uppercase tracking-tighter">
                Akademik Keçmiş
              </h4>
              <p className="text-slate-500 text-md font-light  tracking-widest leading-loose">
               Hazırda informasiya təhlükəsizliyi ixtisası
                üzrə 3-cü kurs tələbəsiyəm. Təhsil müddətində proqramlaşdırma
                əsasları, alqoritmlər və məlumat strukturları, veb
                texnologiyaları və informasiya təhlükəsizliyi sahəsində biliklər
                əldə etmişəm. Akademik fəaliyyətim çərçivəsində müxtəlif
                mövzularda təqdimatlar və layihələr hazırlayaraq həm nəzəri, həm
                də praktiki bacarıqlarımı inkişaf etdirmişəm.
                <br />
                <span className="text-white/50 text-[10px] tracking-normal lowercase italic underline underline-offset-4 decoration-rose-500">
                  Daimi öyrənmə prosesində...
                </span>
              </p>
            </div>
          </div>

          {/* 3. Maraqlar/Hobilər (Kiçik Blok) */}
          <div className="md:col-span-4 bg-[#0C0C0C] border border-white/5 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center space-y-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-rose-500 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
              <Coffee
                size={40}
                className="relative text-rose-500 group-hover:rotate-12 transition-transform"
              />
            </div>
            <h4 className="text-lg font-bold uppercase tracking-widest">
              Coffee & Code
            </h4>
            <p className="text-sm text-slate-500 font-light">
              Mükəmməl bir espresso və sakit bir mühit mənim ən böyük
              motivasiyamdır.
            </p>
          </div>

          {/* 4. Texniki Fəlsəfə (Orta Blok) */}
          <div className="md:col-span-5 bg-[#0C0C0C] border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden">
            <Globe2 className="absolute -right-10 -top-10 text-white/5 w-40 h-40" />
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-[10px] uppercase tracking-widest">
                <Zap size={14} />
                Main Values
              </div>
              <ul className="space-y-3">
                {[
                  "Performans İlkdir",
                  "Piksel Mükəmməlliyi",
                  "Təmiz Kod Strukturu",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight"
                  >
                    <Heart size={12} className="text-rose-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 5. Tooltip/Tech Cloud (Kiçik Blok) */}
          <div className="md:col-span-3 bg-rose-500 rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-black group relative overflow-hidden">
            <Code2
              size={60}
              className="opacity-10 absolute -left-4 -bottom-4 group-hover:scale-150 transition-transform duration-700"
            />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-70">
              Focusing on
            </span>
            <span className="text-4xl font-black italic tracking-tighter uppercase">
              NEXTJS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
